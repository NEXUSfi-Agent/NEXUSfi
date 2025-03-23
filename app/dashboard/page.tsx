'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency, formatPercentage, truncateAddress } from '@/lib/utils';

// Mock data for UI demo
const mockPortfolio = {
  totalValue: 15423.67,
  profitLoss: {
    value: 1256.89,
    percentage: 8.87,
    timeframe: '24h',
  },
  assets: [
    {
      symbol: 'SOL',
      name: 'Solana',
      amount: 45.28,
      value: 6425.56,
      allocationPercentage: 41.66,
      price: 141.91,
      priceChange24h: 3.24,
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      amount: 1.62,
      value: 4852.11,
      allocationPercentage: 31.46,
      price: 2995.13,
      priceChange24h: 1.87,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: 0.085,
      value: 4146.00,
      allocationPercentage: 26.88,
      price: 48776.47,
      priceChange24h: -0.52,
    },
  ],
};

// Mock strategies
const strategies = [
  {
    id: 'yield-optimizer',
    name: 'Yield Optimizer',
    description: 'Automatically rotates capital between lending protocols to maximize stable returns.',
    riskProfile: 'Conservative',
    returns: {
      monthly: 1.2,
      yearly: 14.8,
    },
    allocation: 25,
  },
  {
    id: 'growth-portfolio',
    name: 'Growth Portfolio',
    description: 'Balanced exposure to blue-chip crypto assets with dynamic weighing.',
    riskProfile: 'Moderate',
    returns: {
      monthly: 2.5,
      yearly: 32.5,
    },
    allocation: 45,
  },
  {
    id: 'alpha-seeker',
    name: 'Alpha Seeker',
    description: 'Opportunistic strategy targeting emerging trends and momentum.',
    riskProfile: 'Aggressive',
    returns: {
      monthly: 4.8,
      yearly: 62.4,
    },
    allocation: 20,
  },
  {
    id: 'ai-hedge',
    name: 'AI Hedge',
    description: 'Market-neutral strategy using AI to identify correlated pairs and arbitrage opportunities.',
    riskProfile: 'Moderate',
    returns: {
      monthly: 1.8,
      yearly: 21.6,
    },
    allocation: 10,
  },
];

export default function Dashboard() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  
  const connectWallet = async () => {
    // In a real application, this would connect to the Phantom wallet
    setWalletAddress('7X3csFTwQvLnigg1Rz87hCkzYckVcEXwfDXUyqzqerGh');
    setWalletConnected(true);
  };
  
  const disconnectWallet = () => {
    setWalletAddress('');
    setWalletConnected(false);
  };
  
  // Helper function to determine color based on value
  const getColorClass = (value: number) => {
    return value >= 0 ? 'text-green-500' : 'text-red-500';
  };
  
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
              <Link href="/dashboard" className="text-text-primary font-medium">Dashboard</Link>
              <Link href="/strategies" className="text-text-secondary hover:text-text-primary">Strategies</Link>
              <Link href="/analytics" className="text-text-secondary hover:text-text-primary">Analytics</Link>
              <Link href="/staking" className="text-text-secondary hover:text-text-primary">Staking</Link>
            </div>
          </div>
          <div>
            {walletConnected ? (
              <div className="flex items-center">
                <span className="text-text-secondary mr-2">{truncateAddress(walletAddress)}</span>
                <button 
                  onClick={disconnectWallet}
                  className="bg-red-50 text-red-500 px-3 py-1 rounded-md text-sm hover:bg-red-100"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button 
                onClick={connectWallet}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {walletConnected ? (
          <>
            {/* Portfolio Overview */}
            <div className="bg-white rounded-xl shadow-card p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary">Portfolio Overview</h2>
                  <p className="text-text-secondary">Track and manage your investments</p>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col items-end">
                  <div className="text-3xl font-bold text-text-primary">
                    {formatCurrency(mockPortfolio.totalValue)}
                  </div>
                  <div className={`flex items-center ${getColorClass(mockPortfolio.profitLoss.percentage)}`}>
                    <span>
                      {mockPortfolio.profitLoss.value >= 0 ? '+' : ''}
                      {formatCurrency(mockPortfolio.profitLoss.value)}
                    </span>
                    <span className="ml-2">
                      ({mockPortfolio.profitLoss.percentage >= 0 ? '+' : ''}
                      {formatPercentage(mockPortfolio.profitLoss.percentage)})
                    </span>
                    <span className="ml-1 text-text-secondary text-sm">
                      {mockPortfolio.profitLoss.timeframe}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Portfolio Assets */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="pb-3 text-left text-text-secondary font-medium text-sm">Asset</th>
                      <th className="pb-3 text-right text-text-secondary font-medium text-sm">Price</th>
                      <th className="pb-3 text-right text-text-secondary font-medium text-sm">24h</th>
                      <th className="pb-3 text-right text-text-secondary font-medium text-sm">Amount</th>
                      <th className="pb-3 text-right text-text-secondary font-medium text-sm">Value</th>
                      <th className="pb-3 text-right text-text-secondary font-medium text-sm">Allocation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockPortfolio.assets.map((asset) => (
                      <tr key={asset.symbol} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4">
                          <div className="flex items-center">
                            {/* Replace with actual token icons in production */}
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                              {asset.symbol.slice(0, 2)}
                            </div>
                            <div className="ml-3">
                              <div className="font-medium text-text-primary">{asset.name}</div>
                              <div className="text-xs text-text-secondary">{asset.symbol}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-right font-medium text-text-primary">
                          {formatCurrency(asset.price)}
                        </td>
                        <td className={`py-4 text-right font-medium ${getColorClass(asset.priceChange24h)}`}>
                          {asset.priceChange24h >= 0 ? '+' : ''}
                          {formatPercentage(asset.priceChange24h)}
                        </td>
                        <td className="py-4 text-right text-text-primary">
                          {asset.amount.toFixed(4)} {asset.symbol}
                        </td>
                        <td className="py-4 text-right font-medium text-text-primary">
                          {formatCurrency(asset.value)}
                        </td>
                        <td className="py-4 text-right">
                          <div className="flex items-center justify-end">
                            <span className="mr-2 text-text-primary">{formatPercentage(asset.allocationPercentage)}</span>
                            <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${asset.symbol === 'SOL' ? 'bg-primary' : asset.symbol === 'ETH' ? 'bg-secondary' : 'bg-purple-500'}`}
                                style={{ width: `${asset.allocationPercentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Strategy Allocation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Active Strategies */}
              <div className="bg-white rounded-xl shadow-card p-6">
                <h2 className="text-xl font-bold text-text-primary mb-6">Active Strategies</h2>
                
                <div className="space-y-6">
                  {strategies.map((strategy) => (
                    <div key={strategy.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className={`w-2 h-10 rounded-full ${
                            strategy.riskProfile === 'Conservative' ? 'bg-blue-500' :
                            strategy.riskProfile === 'Moderate' ? 'bg-green-500' : 'bg-purple-500'
                          } mr-3`}></div>
                          <div>
                            <h3 className="font-medium text-text-primary">{strategy.name}</h3>
                            <p className="text-sm text-text-secondary">{strategy.riskProfile} Risk</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-text-primary">{formatPercentage(strategy.allocation)}</div>
                          <div className="text-sm text-green-500">+{formatPercentage(strategy.returns.yearly)} YTD</div>
                        </div>
                      </div>
                      <p className="text-sm text-text-secondary mb-4">{strategy.description}</p>
                      <div className="flex justify-between text-sm">
                        <Link href={`/strategies/${strategy.id}`} className="text-primary hover:underline">
                          Strategy Details
                        </Link>
                        <button className="text-primary hover:underline">
                          Adjust Allocation
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Performance Summary */}
              <div className="bg-white rounded-xl shadow-card p-6">
                <h2 className="text-xl font-bold text-text-primary mb-6">Performance Summary</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Total Growth (30d)</span>
                    <span className="font-medium text-green-500">+8.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Annualized Return</span>
                    <span className="font-medium text-green-500">+27.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Risk Adjusted Return (Sharpe)</span>
                    <span className="font-medium text-text-primary">1.87</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Volatility (30d)</span>
                    <span className="font-medium text-text-primary">16.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Maximum Drawdown</span>
                    <span className="font-medium text-red-500">-12.5%</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-medium text-text-primary mb-4">AI Insights</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start bg-blue-50 p-3 rounded-md">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-text-primary">
                          Your Growth Portfolio is outperforming the market by 12% in the last 30 days.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-yellow-50 p-3 rounded-md">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-text-primary">
                          Market volatility is expected to increase in the coming weeks, consider adjusting your Alpha Seeker allocation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-green-50 p-3 rounded-md">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-text-primary">
                          Recommended: Increase SOL allocation by 5% based on positive on-chain metrics and ecosystem growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Wallet not connected
          <div className="flex flex-col items-center justify-center py-20">
            <div className="max-w-md text-center">
              <Image src="/logo.svg" alt="NEXUSfi" width={120} height={120} className="mx-auto mb-8" />
              <h2 className="text-2xl font-bold text-text-primary mb-4">Connect your wallet to access the dashboard</h2>
              <p className="text-text-secondary mb-8">
                Connect your Solana wallet to view your portfolio, track performance, and manage your investment strategies.
              </p>
              <button 
                onClick={connectWallet}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 