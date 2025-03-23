export interface Strategy {
  id: string;
  name: string;
  description: string;
  riskLevel: 'Low' | 'Medium' | 'Medium-High' | 'High';
  targetApy: string;
  rebalancingFrequency: string;
  assets: string[];
  createdAt: string;
  creator: string;
  tvl: number;
  users: number;
  performance: {
    daily: number;
    weekly: number;
    monthly: number;
    allTime: number;
  };
} 