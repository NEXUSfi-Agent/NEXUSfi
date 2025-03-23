/**
 * Mock Data Service
 * In a real application, this data would come from APIs or blockchain
 */

import { Portfolio, PortfolioAsset, Strategy, RiskProfile, RebalancingFrequency, Transaction, TransactionType } from '@/types';

// Extended Strategy interface for mock data to include additional fields
interface ExtendedStrategy extends Strategy {
  longDescription?: string;
  performanceFee?: number;
  allocation?: Array<{
    protocol: string;
    percentage: number;
    apy: number;
  }>;
}

// Mock strategy data
export const strategies: ExtendedStrategy[] = [
  {
    id: 'yield-optimizer',
    name: 'Yield Optimizer',
    description: 'Focuses on generating sustainable yields from various stablecoin trading pairs and lending protocols. Balances risk and reward to achieve optimized annual returns.',
    risk: 'low' as RiskProfile,
    apy: 8.5,
    tvl: 2450000,
    rebalancing: 'daily' as RebalancingFrequency,
    tokens: ['USDC', 'USDT', 'SOL', 'mSOL'],
    supportedTokens: ['USDC', 'USDT', 'SOL', 'mSOL'],
    minimumInvestment: 100,
    createdAt: '2023-01-01T00:00:00Z',
    lastUpdated: '2023-08-15T00:00:00Z',
    performance: [
      { period: '1 Day', value: 0.02 },
      { period: '1 Week', value: 0.14 },
      { period: '1 Month', value: 0.69 },
      { period: '3 Months', value: 2.05 },
      { period: '1 Year', value: 8.5 }
    ],
    longDescription: 'The Yield Optimizer is a conservative investment strategy designed for investors seeking stable returns. This strategy utilizes algorithms to dynamically allocate funds across various DeFi protocols to maximize yields while minimizing risk. By continuously monitoring interest rate changes, liquidity, and protocol health, the strategy automatically shifts funds from low-yielding protocols to higher-yielding ones while maintaining a conservative risk exposure. This strategy is particularly suitable for investors looking to outperform traditional financial products without taking on high risk.',
    performanceFee: 2,
    allocation: [
      { protocol: 'Solend', percentage: 30, apy: 5.2 },
      { protocol: 'Marinade Finance', percentage: 25, apy: 6.5 },
      { protocol: 'Jito Liquid Staking', percentage: 20, apy: 7.1 },
      { protocol: 'Orca Whirlpools', percentage: 15, apy: 12.8 },
      { protocol: 'Jupiter LP', percentage: 10, apy: 18.5 }
    ]
  },
  {
    id: 'growth-portfolio',
    name: 'Growth Portfolio',
    description: 'Balanced allocation of large to mid-cap crypto assets focused on medium to long-term growth for investors seeking capital appreciation.',
    risk: 'medium' as RiskProfile,
    apy: 15.2,
    tvl: 1850000,
    rebalancing: 'weekly' as RebalancingFrequency,
    tokens: ['SOL', 'ETH', 'BTC', 'mSOL', 'JitoSOL'],
    supportedTokens: ['SOL', 'ETH', 'BTC', 'mSOL', 'JitoSOL'],
    minimumInvestment: 500,
    createdAt: '2023-02-15T00:00:00Z',
    lastUpdated: '2023-09-01T00:00:00Z',
    performance: [
      { period: '1 Day', value: 0.04 },
      { period: '1 Week', value: 0.28 },
      { period: '1 Month', value: 1.2 },
      { period: '3 Months', value: 3.5 },
      { period: '1 Year', value: 15.2 }
    ],
    longDescription: 'The Growth Portfolio strategy aims to achieve long-term capital appreciation by investing in a curated selection of blue-chip crypto assets. The strategy employs quantitative analysis methods to select assets with strong fundamentals, robust community support, and long-term growth potential. The portfolio is regularly rebalanced to ensure optimal asset allocation and risk management. This strategy is suitable for investors with moderate risk tolerance who are looking to achieve significant returns over a 3-5 year investment horizon.',
    performanceFee: 2.5,
    allocation: [
      { protocol: 'SOL Stake', percentage: 40, apy: 7.8 },
      { protocol: 'ETH (Bridged)', percentage: 25, apy: 4.5 },
      { protocol: 'wBTC (Wrapped)', percentage: 20, apy: 3.2 },
      { protocol: 'Raydium LP', percentage: 10, apy: 14.5 },
      { protocol: 'Kamino Yield', percentage: 5, apy: 18.2 }
    ]
  },
  {
    id: 'alpha-seeker',
    name: 'Alpha Seeker',
    description: 'Actively seeks alpha returns by leveraging market information asymmetries and arbitrage opportunities, suitable for high-risk, high-reward investors.',
    risk: 'high' as RiskProfile,
    apy: 32.5,
    tvl: 780000,
    rebalancing: 'realTime' as RebalancingFrequency,
    tokens: ['SOL', 'RAY', 'ORCA', 'BONK', 'JTO'],
    supportedTokens: ['SOL', 'RAY', 'ORCA', 'BONK', 'JTO'],
    minimumInvestment: 1000,
    createdAt: '2023-03-20T00:00:00Z',
    lastUpdated: '2023-09-15T00:00:00Z',
    performance: [
      { period: '1 Day', value: 0.08 },
      { period: '1 Week', value: 0.56 },
      { period: '1 Month', value: 2.4 },
      { period: '3 Months', value: 7.3 },
      { period: '1 Year', value: 32.5 }
    ],
    longDescription: 'Alpha Seeker is an aggressive investment strategy designed for investors looking for excess returns. The strategy utilizes advanced machine learning algorithms and high-frequency trading techniques to identify short-term trading opportunities and market inefficiencies within the Solana ecosystem. By monitoring on-chain data, social sentiment, and trading patterns, the strategy is able to discover and capitalize on price anomalies in short time frames. The portfolio primarily includes small to medium-sized tokens with high growth potential and actively participates in emerging projects. Due to its high-risk characteristics, this strategy is only suitable for investors with high risk tolerance.',
    performanceFee: 3,
    allocation: [
      { protocol: 'Drift Perpetuals', percentage: 30, apy: 45.2 },
      { protocol: 'Mango Markets', percentage: 25, apy: 38.5 },
      { protocol: 'DeFi Land', percentage: 20, apy: 32.7 },
      { protocol: 'Zeta Markets', percentage: 15, apy: 28.3 },
      { protocol: 'Meteora', percentage: 10, apy: 47.1 }
    ]
  },
  {
    id: 'ai-hedge',
    name: 'AI Hedge Strategy',
    description: 'Uses machine learning algorithms to analyze market trends and sentiment, automatically adjusting strategy and position management to seek consistent returns in various market environments.',
    risk: 'medium-high' as RiskProfile,
    apy: 25.8,
    tvl: 1250000,
    rebalancing: 'hourly' as RebalancingFrequency,
    tokens: ['SOL', 'USDC', 'ETH', 'BTC', 'PYTH'],
    supportedTokens: ['SOL', 'USDC', 'ETH', 'BTC', 'PYTH'],
    minimumInvestment: 2000,
    createdAt: '2023-04-05T00:00:00Z',
    lastUpdated: '2023-09-20T00:00:00Z',
    performance: [
      { period: '1 Day', value: 0.06 },
      { period: '1 Week', value: 0.45 },
      { period: '1 Month', value: 1.9 },
      { period: '3 Months', value: 5.8 },
      { period: '1 Year', value: 25.8 }
    ],
    longDescription: 'The AI Hedge Strategy is an innovative investment approach that utilizes artificial intelligence and machine learning algorithms to seek stable returns in various market environments. The strategy employs a market-neutral approach, simultaneously holding both long and short positions to reduce the impact of overall market volatility on the portfolio. The AI system continuously analyzes large amounts of market data, including price trends, trading volumes, social media sentiment, and macroeconomic indicators, to adjust the portfolio allocation. The strategy aims to remain stable during bear markets and achieve moderate growth during bull markets, providing investors with resilient risk-adjusted returns.',
    performanceFee: 2.5,
    allocation: [
      { protocol: 'Pyth Network', percentage: 30, apy: 18.2 },
      { protocol: 'Switchboard', percentage: 20, apy: 15.5 },
      { protocol: 'USDC Options', percentage: 15, apy: 12.7 },
      { protocol: 'Dual Finance', percentage: 20, apy: 22.3 },
      { protocol: 'Cypher', percentage: 15, apy: 28.1 }
    ]
  }
];

// Mock portfolio data with full Portfolio type requirements
export const mockPortfolio: Portfolio = {
  id: 'user-portfolio-1',
  userId: 'user-123',
  name: 'My Mixed Portfolio',
  strategyId: 'mixed',
  totalValue: 12580.45,
  totalInvestment: 0,
  totalInvested: 10000,
  invested: 10000,
  profit: 2580.45,
  profitPercentage: 25.8,
  assetCount: 5,
  riskScore: 3,
  createdAt: '2023-09-01T12:00:00Z',
  lastRebalanced: '2023-10-01T15:30:00Z',
  returns: {
    overall: 25.8,
    daily: 0.5,
    weekly: 2.3,
    monthly: 8.7,
    yearly: 25.8
  },
  strategies: [],
  holdings: [],
  performance: [],
  profitLoss: {
    value: 1245.87,
    percentage: 10.98,
    timeframe: '1 Month'
  },
  assets: [
    {
      symbol: 'SOL',
      name: 'Solana',
      amount: 50,
      value: 5000,
      allocation: 39.7,
      allocationPercentage: 39.7,
      price: 100,
      change24h: 3.5,
      priceChange24h: 3.5
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      amount: 1.2,
      value: 3600,
      allocation: 28.6,
      allocationPercentage: 28.6,
      price: 3000,
      change24h: 2.1,
      priceChange24h: 2.1
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      amount: 2000,
      value: 2000,
      allocation: 15.9,
      allocationPercentage: 15.9,
      price: 1,
      change24h: 0.01,
      priceChange24h: 0.01
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: 0.03,
      value: 1800,
      allocation: 14.3,
      allocationPercentage: 14.3,
      price: 60000,
      change24h: 1.8,
      priceChange24h: 1.8
    },
    {
      symbol: 'BONK',
      name: 'Bonk',
      amount: 45000,
      value: 180.45,
      allocation: 1.5,
      allocationPercentage: 1.5,
      price: 0.000004,
      change24h: -2.5,
      priceChange24h: -2.5
    }
  ]
};

// Mock transaction history
export const mockTransactions: Transaction[] = [
  {
    id: 'tx-001',
    userId: 'user-123',
    portfolioId: 'user-portfolio-1',
    type: 'deposit' as TransactionType,
    status: 'completed',
    amount: 5000,
    token: 'USDC',
    timestamp: '2023-09-01T12:00:00Z',
    txHash: '0x123...abc',
    date: '2023-09-01'
  },
  {
    id: 'tx-002',
    userId: 'user-123',
    portfolioId: 'user-portfolio-1',
    type: 'rebalance' as TransactionType,
    status: 'completed',
    amount: 2000,
    token: 'USDC',
    timestamp: '2023-09-01T12:05:00Z',
    txHash: '0x124...abd',
    date: '2023-09-01'
  },
  {
    id: 'tx-003',
    userId: 'user-123',
    portfolioId: 'user-portfolio-1',
    type: 'deposit' as TransactionType,
    status: 'completed',
    amount: 3000,
    token: 'USDC',
    timestamp: '2023-09-15T10:30:00Z',
    txHash: '0x125...abe',
    date: '2023-09-15'
  },
  {
    id: 'tx-004',
    userId: 'user-123',
    portfolioId: 'user-portfolio-1',
    type: 'claim' as TransactionType,
    status: 'completed',
    amount: 25.75,
    token: 'USDC',
    timestamp: '2023-09-30T23:59:00Z',
    txHash: '0x126...abf',
    date: '2023-09-30'
  },
  {
    id: 'tx-005',
    userId: 'user-123',
    portfolioId: 'user-portfolio-1',
    type: 'withdraw' as TransactionType,
    status: 'completed',
    amount: 1000,
    token: 'USDC',
    timestamp: '2023-10-05T14:20:00Z',
    txHash: '0x127...abg',
    date: '2023-10-05'
  }
];

// Define interfaces for our mock data
interface PerformanceHistoryData {
  dates: string[];
  portfolioValues: number[];
  benchmarkValues: number[];
}

interface PriceHistoryData {
  dates: string[];
  prices: number[];
}

interface TokenPriceHistory {
  [key: string]: PriceHistoryData;
}

// Mock performance history for charts (daily data for the last 30 days)
export const mockPerformanceHistory: PerformanceHistoryData = {
  dates: Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return date.toISOString().split('T')[0];
  }),
  portfolioValues: [
    10000, 10050, 10120, 10080, 10150, 10220, 10350, 10290, 10380, 10450,
    10520, 10480, 10550, 10630, 10590, 10680, 10750, 10830, 10920, 11050,
    11150, 11230, 11180, 11250, 11380, 11520, 11650, 11720, 11850, 12580
  ],
  benchmarkValues: [
    10000, 10020, 10070, 10050, 10080, 10110, 10160, 10140, 10190, 10230,
    10270, 10240, 10280, 10330, 10300, 10350, 10390, 10430, 10480, 10550,
    10600, 10650, 10620, 10660, 10720, 10790, 10860, 10900, 10980, 11090
  ]
};

// Mock token price history (daily data for the last 30 days)
export const mockPriceHistory: TokenPriceHistory = {
  SOL: {
    dates: Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toISOString().split('T')[0];
    }),
    prices: [
      85, 87, 86, 88, 90, 92, 91, 93, 92, 94,
      95, 94, 93, 95, 97, 96, 98, 97, 99, 101,
      100, 102, 101, 99, 101, 103, 102, 104, 102, 100
    ]
  },
  ETH: {
    dates: Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toISOString().split('T')[0];
    }),
    prices: [
      2800, 2820, 2790, 2810, 2830, 2850, 2840, 2860, 2850, 2870,
      2890, 2880, 2870, 2890, 2910, 2900, 2920, 2910, 2930, 2950,
      2940, 2960, 2950, 2930, 2950, 2970, 2960, 2980, 2970, 3000
    ]
  },
  BTC: {
    dates: Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toISOString().split('T')[0];
    }),
    prices: [
      58000, 58200, 57900, 58100, 58300, 58500, 58400, 58600, 58500, 58700,
      58900, 58800, 58700, 58900, 59100, 59000, 59200, 59100, 59300, 59500,
      59400, 59600, 59500, 59300, 59500, 59700, 59600, 59800, 59700, 60000
    ]
  },
  USDC: {
    dates: Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toISOString().split('T')[0];
    }),
    // Stable coin price should be close to 1
    prices: Array(30).fill(0).map(() => 0.9995 + Math.random() * 0.001)
  }
};

// Mock risk assessment data
export const mockRiskAssessment = {
  sharpeRatio: 1.8,
  volatility: 0.12,
  maxDrawdown: 0.08,
  beta: 0.95,
  alpha: 0.03,
  var95: 0.04,
  correlations: {
    BTC: 0.65,
    ETH: 0.72,
    SOL: 0.85,
    SPY: 0.35
  }
};

// Mock market data
export const mockMarketData = {
  overview: {
    totalMarketCap: 2850000000000,
    btcDominance: 45.2,
    ethDominance: 18.5,
    dailyVolume: 125000000000,
    fearGreedIndex: 65
  },
  trending: [
    { symbol: 'SOL', name: 'Solana', price: 100, change24h: 3.5 },
    { symbol: 'SUI', name: 'Sui', price: 0.85, change24h: 7.2 },
    { symbol: 'JTO', name: 'Jito', price: 3.2, change24h: 5.1 },
    { symbol: 'BONK', name: 'Bonk', price: 0.000004, change24h: 12.5 },
    { symbol: 'WIF', name: 'Dogwifhat', price: 2.05, change24h: 9.8 }
  ],
  gainers: [
    { symbol: 'BONK', name: 'Bonk', price: 0.000004, change24h: 12.5 },
    { symbol: 'WIF', name: 'Dogwifhat', price: 2.05, change24h: 9.8 },
    { symbol: 'SUI', name: 'Sui', price: 0.85, change24h: 7.2 }
  ],
  losers: [
    { symbol: 'ORCA', name: 'Orca', price: 0.85, change24h: -5.2 },
    { symbol: 'RAY', name: 'Raydium', price: 0.35, change24h: -3.8 },
    { symbol: 'PYTH', name: 'Pyth Network', price: 0.45, change24h: -2.1 }
  ]
};

// Mock recommendations based on user profile
export const mockRecommendations = {
  conservative: [
    { strategyId: 'yield-optimizer', fitScore: 0.92 },
    { strategyId: 'growth-portfolio', fitScore: 0.75 },
    { strategyId: 'ai-hedge', fitScore: 0.65 }
  ],
  moderate: [
    { strategyId: 'growth-portfolio', fitScore: 0.88 },
    { strategyId: 'ai-hedge', fitScore: 0.79 },
    { strategyId: 'yield-optimizer', fitScore: 0.72 }
  ],
  aggressive: [
    { strategyId: 'alpha-seeker', fitScore: 0.94 },
    { strategyId: 'ai-hedge', fitScore: 0.83 },
    { strategyId: 'growth-portfolio', fitScore: 0.68 }
  ]
};

// Mock user activity
export const mockUserActivity = [
  {
    id: 'activity-001',
    type: 'strategy-creation',
    date: '2023-10-05T08:15:00Z',
    description: 'Created new custom strategy: Growth Focus'
  },
  {
    id: 'activity-002',
    type: 'deposit',
    date: '2023-10-05T08:20:00Z',
    description: 'Deposited 5000 USDC into Growth Focus strategy'
  },
  {
    id: 'activity-003',
    type: 'rebalance',
    date: '2023-10-12T14:30:00Z',
    description: 'Portfolio automatically rebalanced'
  },
  {
    id: 'activity-004',
    type: 'reward',
    date: '2023-10-15T00:00:00Z',
    description: 'Earned 25 NEX tokens from staking rewards'
  },
  {
    id: 'activity-005',
    type: 'strategy-update',
    date: '2023-10-18T11:45:00Z',
    description: 'Updated allocation in Growth Focus strategy'
  }
];

// Helper function: Get strategy by ID
export function getStrategyById(id: string): Strategy | undefined {
  return strategies.find(strategy => strategy.id === id);
}

// New function to get all strategies
export function getAllStrategies(): Strategy[] {
  return strategies;
}

// Helper function: Filter strategies by risk level
export function getStrategiesByRisk(risk: RiskProfile): Strategy[] {
  return strategies.filter(strategy => strategy.risk === risk);
}

// Helper function: Sort strategies by performance
export function getSortedStrategies(metric: 'apy' | 'tvl', ascending: boolean = false): Strategy[] {
  return [...strategies].sort((a, b) => {
    const valueA = a[metric] ?? 0; // Use nullish coalescing operator to provide default value
    const valueB = b[metric] ?? 0;
    return ascending ? valueA - valueB : valueB - valueA;
  });
}

// Helper function: Get portfolio performance over time
export function getPortfolioPerformance(days: number = 30): PerformanceHistoryData {
  const actualDays = Math.min(days, mockPerformanceHistory.dates.length);
  
  return {
    dates: mockPerformanceHistory.dates.slice(-actualDays),
    portfolioValues: mockPerformanceHistory.portfolioValues.slice(-actualDays),
    benchmarkValues: mockPerformanceHistory.benchmarkValues.slice(-actualDays)
  };
}

// Helper function: Get token price history
export function getTokenPriceHistory(symbol: string, days: number = 30): PriceHistoryData | null {
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

// Helper function: Get recommended strategies for a user profile
export function getRecommendedStrategies(riskProfile: 'conservative' | 'moderate' | 'aggressive'): Array<Strategy & { fitScore: number }> {
  const recommendations = mockRecommendations[riskProfile];
  
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

// Helper function: Calculate portfolio statistics
export function getPortfolioStats(portfolio: Portfolio) {
  const initialInvestment = portfolio.totalInvested || 0;
  const currentValue = portfolio.totalValue || 0;
  
  // Calculate returns
  const absoluteReturn = currentValue - initialInvestment;
  const percentageReturn = initialInvestment > 0 ? (absoluteReturn / initialInvestment) * 100 : 0;
  
  // Asset allocation
  const assetAllocation = portfolio.assets.reduce((acc, asset) => {
    acc[asset.symbol] = (asset.allocation || 0) / 100;
    return acc;
  }, {} as Record<string, number>);
  
  // Calculate diversification score
  const diversificationScore = calculateDiversificationScore(assetAllocation);
  
  return {
    initialInvestment,
    currentValue,
    absoluteReturn,
    percentageReturn,
    assetAllocation,
    assetCount: portfolio.assets.length,
    diversificationScore,
    lastRebalanced: portfolio.lastRebalanced || null
  };
}

// Helper function to calculate diversification score using Herfindahl-Hirschman Index (HHI)
function calculateDiversificationScore(allocations: Record<string, number>): number {
  if (!allocations || Object.keys(allocations).length === 0) return 0;
  
  // Calculate HHI
  const hhi = Object.values(allocations).reduce((sum, allocation) => sum + Math.pow(allocation, 2), 0);
  
  // Normalize to 0-100 scale (where 0 is completely concentrated, 100 is perfectly diversified)
  const n = Object.keys(allocations).length;
  const normalizedHHI = (1 - hhi) / (1 - 1/n);
  
  return Math.round(normalizedHHI * 100);
} 