import { 
  Strategy, 
  RiskProfile, 
  UserPreferences,
  riskLevelToNumber
} from '@/types';
import { 
  strategies, 
  mockRecommendations,
  mockPriceHistory
} from '@/lib/data';

/**
 * Strategy Service
 * Provides encapsulated access to strategy data and operations
 */

// Get all available strategies
export function getAllStrategies(): Strategy[] {
  return strategies;
}

// Get a specific strategy by ID
export function getStrategyById(id: string): Strategy | null {
  const strategy = strategies.find(strategy => strategy.id === id);
  return strategy || null;
}

// Get strategies filtered by risk profile
export function getStrategiesByRisk(risk: RiskProfile): Strategy[] {
  return strategies.filter(strategy => strategy.risk === risk);
}

// Sort strategies by a specific metric
export function getSortedStrategies(metric: 'apy' | 'tvl', ascending: boolean = false): Strategy[] {
  return [...strategies].sort((a, b) => {
    const valueA = a[metric] ?? 0;
    const valueB = b[metric] ?? 0;
    return ascending ? valueA - valueB : valueB - valueA;
  });
}

// Search strategies by name or description
export function searchStrategies(query: string): Strategy[] {
  if (!query || query.trim() === '') {
    return strategies;
  }
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return strategies.filter(strategy => 
    strategy.name.toLowerCase().includes(normalizedQuery) || 
    strategy.description.toLowerCase().includes(normalizedQuery)
  );
}

// Apply multiple filters to strategies
export function filterStrategies(filters: {
  risk?: RiskProfile | RiskProfile[];
  minApy?: number;
  maxApy?: number;
  tokens?: string[];
  search?: string;
}): Strategy[] {
  let filteredStrategies = [...strategies];
  
  // Filter by risk profile
  if (filters.risk) {
    const riskProfiles = Array.isArray(filters.risk) ? filters.risk : [filters.risk];
    filteredStrategies = filteredStrategies.filter(
      strategy => riskProfiles.includes(strategy.risk)
    );
  }
  
  // Filter by APY range
  if (typeof filters.minApy === 'number') {
    filteredStrategies = filteredStrategies.filter(strategy => strategy.apy >= filters.minApy!);
  }
  
  if (typeof filters.maxApy === 'number') {
    filteredStrategies = filteredStrategies.filter(strategy => strategy.apy <= filters.maxApy!);
  }
  
  // Filter by supported tokens
  if (filters.tokens && filters.tokens.length > 0) {
    filteredStrategies = filteredStrategies.filter(strategy => 
      filters.tokens!.some(token => strategy.supportedTokens.includes(token))
    );
  }
  
  // Filter by search term
  if (filters.search && filters.search.trim() !== '') {
    const normalizedSearch = filters.search.toLowerCase().trim();
    filteredStrategies = filteredStrategies.filter(strategy => 
      strategy.name.toLowerCase().includes(normalizedSearch) || 
      strategy.description.toLowerCase().includes(normalizedSearch)
    );
  }
  
  return filteredStrategies;
}

// Get recommended strategies based on user preferences
export function getRecommendedStrategies(
  preferences: UserPreferences, 
  limit: number = 3
): Strategy[] {
  // Simulate AI recommendation algorithm with scoring
  const scoredStrategies = strategies.map(strategy => {
    let score = 0;
    
    // Risk matching
    const riskMatch = Math.abs(riskLevelToNumber(strategy.risk) - riskLevelToNumber(preferences.riskTolerance));
    score += (5 - riskMatch) * 2; // Higher score for closer risk match
    
    // Token preference matching
    const tokenOverlap = strategy.supportedTokens.filter(token => 
      preferences.preferredTokens.includes(token)
    ).length;
    score += tokenOverlap;
    
    // APY optimization (if user prioritizes returns)
    if (preferences.prioritizeReturns) {
      score += strategy.apy / 5;
    }
    
    // Investment amount matching
    if (strategy.minimumInvestment <= preferences.investmentAmount) {
      score += 2;
    }
    
    return { strategy, score };
  });
  
  // Sort by score and return top recommendations
  return scoredStrategies
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.strategy);
}

// Get token price history
export function getTokenPriceHistory(symbol: string, days: number = 30): {
  dates: string[];
  prices: number[];
} | null {
  const tokenData = mockPriceHistory[symbol];
  
  if (!tokenData) {
    return null;
  }
  
  const actualDays = Math.min(days, tokenData.dates.length);
  
  return {
    dates: tokenData.dates.slice(-actualDays),
    prices: tokenData.prices.slice(-actualDays)
  };
}

// Get similar strategies to a given strategy
export function getSimilarStrategies(strategyId: string, limit: number = 3): Strategy[] {
  const targetStrategy = getStrategyById(strategyId);
  
  if (!targetStrategy) {
    return [];
  }
  
  // Get strategies with same risk profile or similar APY
  return strategies
    .filter(strategy => 
      strategy.id !== strategyId && (
        strategy.risk === targetStrategy.risk ||
        Math.abs(strategy.apy - targetStrategy.apy) < 5
      )
    )
    .slice(0, limit);
}

// Get strategies based on risk tolerance category
export function getStrategiesByRiskCategory(category: 'conservative' | 'moderate' | 'aggressive'): Array<Strategy & { fitScore: number }> {
  const recommendations = mockRecommendations[category];
  
  if (!recommendations) {
    return [];
  }
  
  return recommendations
    .map(rec => {
      const strategy = getStrategyById(rec.strategyId);
      if (!strategy) return null;
      return { ...strategy, fitScore: rec.fitScore };
    })
    .filter((item): item is Strategy & { fitScore: number } => item !== null);
} 