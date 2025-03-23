import { 
  Portfolio, 
  Transaction
} from '@/types';
import {
  mockPortfolio,
  mockTransactions,
  mockPerformanceHistory,
  mockPriceHistory,
  mockRiskAssessment,
  mockMarketData,
  mockUserActivity
} from '@/lib/data';

/**
 * Data Service
 * Provides encapsulated access to mock data (will be replaced with real API calls)
 */

// Portfolio Data
export function getUserPortfolio(userId: string): Portfolio | null {
  // In a real app, we'd filter portfolios by userId
  return mockPortfolio;
}

// Transactions
export function getUserTransactions(userId: string, limit: number = 10): Transaction[] {
  // In a real app, we'd filter by userId and limit the results
  return mockTransactions.slice(0, limit);
}

export function getTransactionsByPortfolioId(portfolioId: string): Transaction[] {
  return mockTransactions.filter(tx => tx.portfolioId === portfolioId);
}

// Performance Data
export interface PerformanceHistoryData {
  dates: string[];
  portfolioValues: number[];
  benchmarkValues: number[];
}

export function getPortfolioPerformance(portfolioId: string, days: number = 30): PerformanceHistoryData {
  // In a real app, we'd get the specific portfolio's performance
  const actualDays = Math.min(days, mockPerformanceHistory.dates.length);
  
  return {
    dates: mockPerformanceHistory.dates.slice(-actualDays),
    portfolioValues: mockPerformanceHistory.portfolioValues.slice(-actualDays),
    benchmarkValues: mockPerformanceHistory.benchmarkValues.slice(-actualDays)
  };
}

// Price History
export interface PriceHistoryData {
  dates: string[];
  prices: number[];
}

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

// Risk Assessment
export function getPortfolioRiskAssessment(portfolioId: string) {
  // In a real app, we'd get risk data specific to the portfolio
  return mockRiskAssessment;
}

// Market Data
export function getMarketOverview() {
  return mockMarketData.overview;
}

export function getTrendingAssets(limit: number = 5) {
  return mockMarketData.trending.slice(0, limit);
}

export function getTopGainers(limit: number = 3) {
  return mockMarketData.gainers.slice(0, limit);
}

export function getTopLosers(limit: number = 3) {
  return mockMarketData.losers.slice(0, limit);
}

// User Activity
export function getUserActivity(userId: string, limit: number = 5) {
  // In a real app, we'd filter by userId
  return mockUserActivity.slice(0, limit);
}

// Portfolio Statistics
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