'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency, formatPercentage } from '@/lib/utils';
import { WalletConnectButton } from '@/components/ui/WalletConnectButton';

// Mock portfolio performance data
const portfolioPerformance = {
  totalValue: 12500,
  totalInvested: 10000,
  totalProfit: 2500,
  profitPercentage: 25,
  monthly: [
    { month: 'Jan', value: 10200 },
    { month: 'Feb', value: 10400 },
    { month: 'Mar', value: 10600 },
    { month: 'Apr', value: 11000 },
    { month: 'May', value: 10800 },
    { month: 'Jun', value: 11200 },
    { month: 'Jul', value: 11600 },
    { month: 'Aug', value: 12000 },
    { month: 'Sep', value: 12300 },
    { month: 'Oct', value: 12500 },
    { month: 'Nov', value: 12500 },
    { month: 'Dec', value: 12500 }
  ],
  strategyPerformance: [
    { 
      name: 'Yield Optimizer', 
      invested: 5000, 
      currentValue: 5750, 
      profit: 750, 
      profitPercentage: 15,
      color: 'blue'
    },
    { 
      name: 'Growth Portfolio', 
      invested: 3000, 
      currentValue: 3900, 
      profit: 900, 
      profitPercentage: 30,
      color: 'green'
    },
    { 
      name: 'Alpha Seeker', 
      invested: 2000, 
      currentValue: 2850, 
      profit: 850, 
      profitPercentage: 42.5,
      color: 'purple'
    }
  ],
  assetAllocation: [
    { asset: 'SOL', percentage: 35 },
    { asset: 'USDC', percentage: 25 },
    { asset: 'ETH', percentage: 20 },
    { asset: 'BTC', percentage: 15 },
    { asset: 'Other', percentage: 5 }
  ],
  riskExposure: {
    conservative: 40,
    moderate: 30,
    aggressive: 30
  }
};

// Mock transaction history
const transactionHistory = [
  {
    id: 'tx1',
    type: 'Deposit',
    strategy: 'Yield Optimizer',
    amount: 2000,
    date: '2023-10-15T10:30:00Z',
    status: 'Completed',
    txHash: '5UJKzW...4pLmB'
  },
  {
    id: 'tx2',
    type: 'Deposit',
    strategy: 'Growth Portfolio',
    amount: 3000,
    date: '2023-10-20T14:45:00Z',
    status: 'Completed',
    txHash: '8mNpRq...7kXsT'
  },
  {
    id: 'tx3',
    type: 'Deposit',
    strategy: 'Alpha Seeker',
    amount: 2000,
    date: '2023-11-05T09:15:00Z',
    status: 'Completed',
    txHash: '3wFcJd...9yZvN'
  },
  {
    id: 'tx4',
    type: 'Deposit',
    strategy: 'Yield Optimizer',
    amount: 3000,
    date: '2023-12-10T11:20:00Z',
    status: 'Completed',
    txHash: '6tHgLp...2qRxK'
  },
  {
    id: 'tx5',
    type: 'Withdrawal',
    strategy: 'Growth Portfolio',
    amount: 1000,
    date: '2024-01-25T16:35:00Z',
    status: 'Completed',
    txHash: '9aEfWz...1mDcY'
  }
];

export default function AnalyticsPage() {
  const [isWalletConnected, setIsWalletConnected] = React.useState(false);
  const [timeframe, setTimeframe] = React.useState('all');
  
  // Handle wallet connection
  const handleConnect = () => {
    setIsWalletConnected(true);
  };
  
  const handleDisconnect = () => {
    setIsWalletConnected(false);
  };
  
  // If wallet is not connected, show connect prompt
  if (!isWalletConnected) {
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="bg-white shadow-nav">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image src="/logo.svg" alt="NEXUSfi" width={40} height={40} />
                <span className="ml-2 text-xl font-bold text-primary">NEXUSfi</span>
              </Link>
              <div className="hidden md:flex ml-8 space-x-6">
                <Link href="/dashboard" className="text-text-secondary hover:text-text-primary">Dashboard</Link>
                <Link href="/strategies" className="text-text-secondary hover:text-text-primary">Strategies</Link>
                <Link href="/analytics" className="text-text-primary font-medium">Analytics</Link>
                <Link href="/staking" className="text-text-secondary hover:text-text-primary">Staking</Link>
              </div>
            </div>
            <div>
              <WalletConnectButton 
                onConnect={handleConnect} 
                onDisconnect={handleDisconnect}
              />
            </div>
          </div>
        </nav>
        
        {/* Connect Wallet Prompt */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-card p-6 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">Connect Your Wallet</h2>
            <p className="text-text-secondary mb-6">
              Please connect your Solana wallet to view your investment analytics and performance metrics.
            </p>
            <WalletConnectButton 
              size="lg"
              className="w-full"
              onConnect={handleConnect}
              showAddress={false}
            />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-nav">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="NEXUSfi" width={40} height={40} />
              <span className="ml-2 text-xl font-bold text-primary">NEXUSfi</span>
            </Link>
            <div className="hidden md:flex ml-8 space-x-6">
              <Link href="/dashboard" className="text-text-secondary hover:text-text-primary">Dashboard</Link>
              <Link href="/strategies" className="text-text-secondary hover:text-text-primary">Strategies</Link>
              <Link href="/analytics" className="text-text-primary font-medium">Analytics</Link>
              <Link href="/staking" className="text-text-secondary hover:text-text-primary">Staking</Link>
            </div>
          </div>
          <div>
            <WalletConnectButton 
              onConnect={handleConnect} 
              onDisconnect={handleDisconnect}
              showAddress={true}
              variant="secondary"
            />
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Investment Analytics</h1>
          <p className="text-text-secondary">
            Detailed insights into your portfolio performance, asset allocation, and transaction history.
          </p>
        </div>
        
        {/* Performance Overview */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-xl font-bold text-text-primary">Portfolio Performance</h2>
            <div className="flex space-x-2 mt-3 md:mt-0">
              <button 
                onClick={() => setTimeframe('1m')}
                className={`px-3 py-1 rounded-md text-sm ${
                  timeframe === '1m' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                }`}
              >
                1 Month
              </button>
              <button 
                onClick={() => setTimeframe('3m')}
                className={`px-3 py-1 rounded-md text-sm ${
                  timeframe === '3m' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                }`}
              >
                3 Months
              </button>
              <button 
                onClick={() => setTimeframe('1y')}
                className={`px-3 py-1 rounded-md text-sm ${
                  timeframe === '1y' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                }`}
              >
                1 Year
              </button>
              <button 
                onClick={() => setTimeframe('all')}
                className={`px-3 py-1 rounded-md text-sm ${
                  timeframe === 'all' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                }`}
              >
                All
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-text-secondary mb-1">Total Invested</div>
              <div className="text-2xl font-bold text-text-primary">
                {formatCurrency(portfolioPerformance.totalInvested)}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-text-secondary mb-1">Current Value</div>
              <div className="text-2xl font-bold text-text-primary">
                {formatCurrency(portfolioPerformance.totalValue)}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-text-secondary mb-1">Total Profit</div>
              <div className="text-2xl font-bold text-green-500">
                +{formatCurrency(portfolioPerformance.totalProfit)}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-text-secondary mb-1">Profit Percentage</div>
              <div className="text-2xl font-bold text-green-500">
                +{formatPercentage(portfolioPerformance.profitPercentage)}
              </div>
            </div>
          </div>
          
          {/* Chart component */}
          <div className="bg-card rounded-xl shadow-sm p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Portfolio Performance</h3>
            <div className="w-full h-64 bg-muted/20 rounded-lg flex items-center justify-center text-muted-foreground">
              Portfolio performance chart placeholder
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Strategy Performance */}
          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-xl font-bold text-text-primary mb-6">Strategy Performance</h2>
            {portfolioPerformance.strategyPerformance.map((strategy, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-${strategy.color}-500 mr-2`}></div>
                    <span className="text-text-primary font-medium">{strategy.name}</span>
                  </div>
                  <div className="text-green-500 font-medium">
                    +{formatPercentage(strategy.profitPercentage)}
                  </div>
                </div>
                <div className="flex justify-between text-sm text-text-secondary mb-1">
                  <span>Invested: {formatCurrency(strategy.invested)}</span>
                  <span>Current: {formatCurrency(strategy.currentValue)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-${strategy.color}-500 h-2 rounded-full`} 
                    style={{ width: `${strategy.profitPercentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Asset Allocation */}
          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-xl font-bold text-text-primary mb-6">Asset Allocation</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="h-40">
                {/* Pie chart */}
                <div className="bg-card rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">Asset Allocation</h3>
                  <div className="w-full h-64 bg-muted/20 rounded-lg flex items-center justify-center text-muted-foreground">
                    Asset allocation pie chart placeholder
                  </div>
                </div>
              </div>
              <div>
                {portfolioPerformance.assetAllocation.map((asset, index) => (
                  <div key={index} className="flex justify-between items-center mb-2 last:mb-0">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ 
                          backgroundColor: [
                            '#4F46E5', // Indigo for SOL
                            '#10B981', // Emerald for USDC
                            '#3B82F6', // Blue for ETH
                            '#F59E0B', // Amber for BTC
                            '#6B7280'  // Gray for Other
                          ][index] 
                        }}
                      ></div>
                      <span className="text-text-primary">{asset.asset}</span>
                    </div>
                    <span className="text-text-secondary">{asset.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Risk Analysis */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-8">
          <h2 className="text-xl font-bold text-text-primary mb-6">Risk Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Risk Exposure</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-secondary">Conservative</span>
                  <span className="text-text-primary font-medium">{portfolioPerformance.riskExposure.conservative}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${portfolioPerformance.riskExposure.conservative}%` }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-secondary">Moderate</span>
                  <span className="text-text-primary font-medium">{portfolioPerformance.riskExposure.moderate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${portfolioPerformance.riskExposure.moderate}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-secondary">Aggressive</span>
                  <span className="text-text-primary font-medium">{portfolioPerformance.riskExposure.aggressive}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full" 
                    style={{ width: `${portfolioPerformance.riskExposure.aggressive}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Risk Assessment</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-medium text-text-primary mb-1">Medium Risk Warning</h4>
                    <p className="text-sm text-text-secondary">
                      Your portfolio contains 30% aggressive assets. Please ensure this aligns with your risk tolerance and investment goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-medium text-text-primary mb-1">Good Diversification</h4>
                    <p className="text-sm text-text-secondary">
                      Your portfolio is well diversified across risk categories and asset types. This helps reduce overall volatility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Transaction History */}
        <div className="bg-white rounded-xl shadow-card p-6">
          <h2 className="text-xl font-bold text-text-primary mb-6">Transaction History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left text-sm text-text-secondary font-medium pb-2">Type</th>
                  <th className="text-left text-sm text-text-secondary font-medium pb-2">Strategy</th>
                  <th className="text-right text-sm text-text-secondary font-medium pb-2">Amount</th>
                  <th className="text-left text-sm text-text-secondary font-medium pb-2">Date</th>
                  <th className="text-left text-sm text-text-secondary font-medium pb-2">Status</th>
                  <th className="text-left text-sm text-text-secondary font-medium pb-2">Transaction Hash</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((tx) => (
                  <tr key={tx.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tx.type === 'Deposit' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {tx.type === 'Deposit' ? 'Deposit' : 'Withdrawal'}
                      </span>
                    </td>
                    <td className="py-3 text-text-primary">{tx.strategy}</td>
                    <td className="py-3 text-right text-text-primary">{formatCurrency(tx.amount)}</td>
                    <td className="py-3 text-text-secondary">
                      {new Date(tx.date).toLocaleDateString()}
                    </td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                    <td className="py-3 text-primary">
                      <a href={`https://solscan.io/tx/${tx.txHash}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {tx.txHash}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Image src="/logo.svg" alt="NEXUSfi" width={32} height={32} />
              <span className="ml-2 text-lg font-bold">NEXUSfi</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</Link>
              <Link href="/docs" className="text-gray-400 hover:text-white text-sm">Docs</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center md:text-left">
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} NEXUSfi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 