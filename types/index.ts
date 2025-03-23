import React from 'react';

// Strategy Types
export enum RiskProfile {
  Low = "low",
  Medium = "medium",
  MediumHigh = "medium-high", 
  High = "high"
}

export enum RebalancingFrequency {
  Hourly = "hourly",
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
  Quarterly = "quarterly",
  RealTime = "real-time"
}

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

export interface Portfolio {
  id?: string;
  userId?: string;
  name?: string;
  strategyId?: string;
  totalValue: number;
  totalInvested?: number;
  invested: number;
  profit: number;
  profitPercentage: number;
  assetCount: number;
  profitLoss?: {
    value: number;
    percentage: number;
    timeframe?: string;
  };
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
  createdAt: string;
  lastRebalanced?: string;
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

// Transaction Types
export interface Transaction {
  id: string;
  userId?: string;
  portfolioId?: string;
  type: 'deposit' | 'withdrawal' | 'rebalance' | 'fee';
  status: 'pending' | 'completed' | 'failed';
  amount: number;
  asset?: string;
  timestamp?: string;
  txHash?: string;
  fee?: number;
  strategy?: string;
  token: string;
  date: string;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: 'alert' | 'update' | 'recommendation' | 'system';
  title: string;
  message: string;
  read: boolean;
  timestamp: string;
  actionUrl?: string;
  relatedEntityId?: string;
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