/**
 * Mock Data Service
 * In a real application, this data would come from APIs or blockchain
 */

import { Portfolio, PortfolioAsset, Strategy, RiskProfile, RebalancingFrequency, Transaction } from '@/types';

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
    risk: RiskProfile.Low,
    apy: 8.5,
    tvl: 2450000,
    rebalancing: RebalancingFrequency.Daily,
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
    risk: RiskProfile.Medium,
    apy: 15.2,
    tvl: 1850000,
    rebalancing: RebalancingFrequency.Weekly,
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
    risk: RiskProfile.High,
    apy: 32.5,
    tvl: 780000,
    rebalancing: RebalancingFrequency.RealTime,
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
    risk: RiskProfile.MediumHigh,
    apy: 25.8,
    tvl: 1250000,
    rebalancing: RebalancingFrequency.Hourly,
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

// Mock portfolio data
export const mockPortfolio: Portfolio = {
  id: 'user-portfolio-1',
  userId: 'user-123',
  name: 'My Mixed Portfolio',
  strategyId: 'mixed',
  totalValue: 12580.45,
  totalInvested: 10000,
  profit: 2580.45,
  profitPercentage: 25.8,
  assetCount: 5,
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
  ],
  createdAt: '2023-09-01T12:00:00Z',
  lastRebalanced: '2023-10-01T15:30:00Z'
};

// Mock transaction history
export const mockTransactions: Transaction[] = [
  {
    id: 'tx-001',
    userId: 'user-123',
    portfolioId: 'user-portfolio-1',
    type: 'deposit',
    status: 'completed',
    amount: 5000,
    asset: 'USDC',
    timestamp: '2023-09-01T12:00:00Z',
    txHash: '0x123...abc',
    token: 'USDC',
    date: '2023-09-01'
  },
  {
    id: 'tx-002',
    userId: 'user-123',
    portfolioId: 'user-portfolio-1',
    type: 'rebalance',
    status: 'completed',
    amount: 2000,
    asset: 'USDC',
    timestamp: '2023-09-01T12:05:00Z',
    txHash: '0x124...abd',
    token: 'USDC',
    date: '2023-09-01'
  },
  {
    id: 'tx-003',
    userId: 'user-123',
    portfolioId: 'user-portfolio-1',
    type: 'deposit',
    status: 'completed',
    amount: 3000,
    asset: 'USDC',
    timestamp: '2023-09-15T10:30:00Z',
    txHash: '0x125...abe',
    token: 'USDC',
    date: '2023-09-15'
  },
  {
    id: 'tx-004',
    userId: 'user-123',
    portfolioId: 'user-portfolio-1',
    type: 'fee',
    status: 'completed',
    amount: 25.75,
    asset: 'USDC',
    timestamp: '2023-09-30T23:59:00Z',
    txHash: '0x126...abf',
    token: 'USDC',
    date: '2023-09-30'
  },
  {
    id: 'tx-005',
    userId: 'user-123',
    portfolioId: 'user-portfolio-1',
    type: 'withdrawal',
    status: 'completed',
    amount: 1000,
    asset: 'USDC',
    timestamp: '2023-10-05T14:20:00Z',
    txHash: '0x127...abg',
    token: 'USDC',
    date: '2023-10-05'
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