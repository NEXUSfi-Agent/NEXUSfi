import React from 'react';

/**
 * NEXUSfi Type Definitions
 * Core types used throughout the application
 */

// Risk Profile Types
export type RiskProfile = 'veryLow' | 'low' | 'medium' | 'high' | 'veryHigh';

// Rebalancing Frequency Types
export type RebalancingFrequency = 'hourly' | 'daily' | 'weekly' | 'monthly' | 'quarterly';

// Timeframe Types for Performance Metrics
export type TimeFrame = '24h' | '7d' | '30d' | '90d' | 'ytd' | '1y' | 'all';

// Token Types
export interface Token {
  symbol: string;
  name: string;
  logo: string;
  decimals: number;
  address: string;
  coingeckoId?: string;
}

// Core Strategy Interface
export interface Strategy {
  id: string;
  name: string;
  description: string;
  risk: RiskProfile;
  apy: number;
  tvl?: number;
  rebalancing: RebalancingFrequency;
  platformFee?: number;
  minimumInvestment: number;
  supportedTokens: string[];
  tokens?: string[];
  assetAllocation?: Record<string, number>;
  performance?: Array<{
    period: string;
    value: number;
  }>;
  monthlyPerformance?: Array<{
    date: string;
    return: number;
  }>;
  createdAt: string;
  lastUpdated: string;
}

// Extended Strategy Interface with Additional Metrics
export interface ExtendedStrategy extends Strategy {
  longDescription?: string;
  performanceFee?: number;
  allocation?: Array<{
    protocol: string;
    percentage: number;
    apy: number;
  }>;
  historicalDrawdown?: number;
  sharpeRatio?: number;
  volatility?: number;
  maxDrawdown?: number;
  winRate?: number;
  correlationMatrix?: Record<string, number>;
  riskFactors?: Array<{
    factor: string;
    exposure: number;
    description: string;
  }>;
  backtest?: {
    startDate: string;
    endDate: string;
    initialInvestment: number;
    finalValue: number;
    cagr: number;
    volatility: number;
    maxDrawdown: number;
    recoveryTime: number;
    winRate: number;
    profitFactor: number;
  };
}

// User Profile Interface
export interface UserProfile {
  id: string;
  walletAddress: string;
  displayName?: string;
  email?: string;
  joinedAt: string;
  riskTolerance?: RiskProfile;
  preferredTokens?: string[];
  notificationPreferences?: {
    email: boolean;
    push: boolean;
    rebalancing: boolean;
    marketAlerts: boolean;
    performanceReports: boolean;
  };
  referralCode?: string;
  isVerified: boolean;
  lastLogin?: string;
}

// User Preferences for Strategy Recommendations
export interface UserPreferences {
  riskTolerance: RiskProfile;
  investmentAmount: number;
  investmentHorizon: 'short' | 'medium' | 'long';
  preferredTokens: string[];
  excludedSectors?: string[];
  prioritizeReturns: boolean;
  rebalancingPreference?: RebalancingFrequency;
  feeSensitivity: 'low' | 'medium' | 'high';
}

// Portfolio Interface
export interface Portfolio {
  id: string;
  userId: string;
  name: string;
  description?: string;
  strategyId?: string;
  strategies: Array<{
    strategyId: string;
    allocation: number;
    initialInvestment: number;
    currentValue: number;
  }>;
  totalValue: number;
  totalInvestment: number;
  totalInvested?: number;
  invested: number;
  profit: number;
  profitPercentage: number;
  assetCount: number;
  returns: {
    overall: number;
    daily: number;
    weekly: number;
    monthly: number;
    yearly: number;
  };
  profitLoss?: {
    value: number;
    percentage: number;
    timeframe?: string;
  };
  riskScore: number;
  createdAt: string;
  lastRebalanced?: string;
  performance: Array<{
    date: string;
    value: number;
  }>;
  holdings: Array<{
    token: string;
    amount: number;
    value: number;
    allocation: number;
  }>;
  assets: Array<{
    symbol: string;
    name: string;
    amount: number;
    value: number;
    allocation: number;
    allocationPercentage?: number;
    price: number;
    change24h: number;
    priceChange24h?: number;
  }>;
  bestPerformer?: {
    symbol: string;
    change: number;
  };
  worstPerformer?: {
    symbol: string;
    change: number;
  };
}

// Transaction Types
export type TransactionType = 'deposit' | 'withdraw' | 'rebalance' | 'claim' | 'stake' | 'unstake';

// Transaction Interface
export interface Transaction {
  id: string;
  userId: string;
  portfolioId?: string;
  strategyId?: string;
  type: TransactionType;
  amount: number;
  token: string;
  status: 'pending' | 'completed' | 'failed';
  timestamp: string;
  txHash?: string;
  fee?: number;
  details?: Record<string, any>;
  date?: string;
}

// Staking Pool Interface
export interface StakingPool {
  id: string;
  name: string;
  token: string;
  apy: number;
  totalStaked: number;
  lockupPeriod?: number; // in days
  minStakeAmount: number;
  description: string;
  isActive: boolean;
  rewards: {
    token: string;
    distribution: 'continuous' | 'periodic';
    distributionFrequency?: string;
  };
}

// Notification Types
export type NotificationType = 'info' | 'success' | 'warning' | 'error';

// Notification Interface
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType | 'alert' | 'update' | 'recommendation' | 'system';
  isRead: boolean;
  read?: boolean;
  createdAt: string;
  timestamp?: string;
  action?: {
    label: string;
    url: string;
  };
  actionUrl?: string;
  relatedEntity?: {
    type: 'strategy' | 'portfolio' | 'transaction';
    id: string;
  };
  relatedEntityId?: string;
}

// Market Data Interface
export interface MarketData {
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap?: number;
  ath?: number;
  athDate?: string;
  atl?: number;
  atlDate?: string;
  lastUpdated: string;
}

// API Response Wrapper Interface
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    page?: number;
    pageSize?: number;
    total?: number;
    hasMore?: boolean;
  };
}

// Pagination Parameters Interface
export interface PaginationParams {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

// Filter Parameters for Strategy Listing
export interface StrategyFilters {
  risk?: RiskProfile | RiskProfile[];
  minApy?: number;
  maxApy?: number;
  tokens?: string[];
  rebalancing?: RebalancingFrequency[];
  minInvestment?: number;
  search?: string;
}

// Helper function to convert risk level to numeric value
export function riskLevelToNumber(risk: RiskProfile): number {
  const riskMap: Record<RiskProfile, number> = {
    veryLow: 1,
    low: 2,
    medium: 3,
    high: 4,
    veryHigh: 5
  };
  return riskMap[risk] || 3;
}

// Helper function to format percentage numbers
export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

// Helper function to format currency values
export function formatCurrency(value: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

// User Types
export interface UserProfile {
  walletAddress: string;
  riskProfile?: RiskProfile;
  investmentGoals?: string[];
  timeHorizon?: string;
  preferences?: {
    preferredAssets?: string[];
    excludedAssets?: string[];
    notificationSettings?: {
      email: boolean;
      inApp: boolean;
      priceAlerts: boolean;
      strategyUpdates: boolean;
    };
  };
}

// Portfolio Types
export interface PortfolioAsset {
  symbol: string;
  name: string;
  amount: number;
  value: number;
  allocationPercentage: number;
  price: number;
  priceChange24h: number;
}

// Analytics Types
export interface PerformanceMetric {
  date: string;
  value: number;
}

export interface PerformanceAnalytics {
  portfolioId: string;
  strategyId: string;
  metrics: {
    totalValue: PerformanceMetric[];
    returns: PerformanceMetric[];
    volatility: PerformanceMetric[];
    sharpeRatio: PerformanceMetric[];
    drawdown: PerformanceMetric[];
  };
  comparisonBenchmarks?: {
    [key: string]: PerformanceMetric[];
  };
}

// UI Component Props Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'default' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  isFullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export interface CardProps {
  className?: string;
  bordered?: boolean;
  elevated?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export interface CardHeaderProps {
  className?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactNode;
}

export interface CardContentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CardFooterProps {
  className?: string;
  children?: React.ReactNode;
}

export interface WalletConnectButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'default';
  showAddress?: boolean;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

export interface MainNavProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
  variant?: 'default' | 'minimal';
}

export type WalletStatus = 'connected' | 'disconnected' | 'connecting'; 