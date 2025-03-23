'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency, formatPercentage } from '@/lib/utils';
import { WalletConnectButton } from '@/components/ui/WalletConnectButton';
import { MainNav } from '@/components/layout/MainNav';
import { Footer } from '@/components/layout/Footer';

// Staking Pool Data
const stakingPools = [
  {
    id: 'sol-staking',
    name: 'SOL Staking Pool',
    token: 'SOL',
    logo: '/tokens/sol.svg',
    apy: 7.5,
    totalStaked: 25000000,
    userStaked: 150,
    rewards: 2.75,
    lockupPeriod: 'No Lock',
    minStake: 1,
    description: 'Stake SOL tokens to earn passive income. Rewards are calculated daily and distributed weekly.'
  },
  {
    id: 'nexus-staking',
    name: 'NEXUS Staking Pool',
    token: 'NEXUS',
    logo: '/logo.svg',
    apy: 15,
    totalStaked: 8500000,
    userStaked: 500,
    rewards: 18.5,
    lockupPeriod: '30 Days',
    minStake: 100,
    description: 'Stake NEXUS tokens to participate in platform governance and receive additional rewards. Rewards calculated daily and distributed weekly.'
  },
  {
    id: 'lptoken-staking',
    name: 'NEXUS-SOL LP Staking Pool',
    token: 'NEXUS-SOL LP',
    logo: '/tokens/lp.svg',
    apy: 22.5,
    totalStaked: 4200000,
    userStaked: 0,
    rewards: 0,
    lockupPeriod: 'No Lock',
    minStake: 1,
    description: 'Stake NEXUS-SOL LP tokens for higher yields. Additional rewards for liquidity providers.'
  }
];

export default function StakingPage() {
  const [isWalletConnected, setIsWalletConnected] = React.useState(false);
  const [activeStakingPool, setActiveStakingPool] = React.useState<string | null>(null);
  const [stakeAmount, setStakeAmount] = React.useState('');
  const [connecting, setConnecting] = React.useState(false);
  
  // Handle wallet connection
  const handleConnect = async () => {
    try {
      setConnecting(true);
      // Wallet connection logic would go here
      setTimeout(() => {
        setIsWalletConnected(true);
        setConnecting(false);
      }, 1500);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      setConnecting(false);
    }
  };
  
  const handleDisconnect = () => {
    setIsWalletConnected(false);
  };
  
  const handleStakeAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStakeAmount(e.target.value);
  };
  
  const handleStake = (poolId: string) => {
    if (!stakeAmount || Number(stakeAmount) <= 0) {
      alert('Please enter a valid stake amount');
      return;
    }
    
    // Simulate the actual staking logic
    alert(`Staked ${stakeAmount} for pool ${poolId}`);
    setStakeAmount('');
  };
  
  const handleWithdraw = (poolId: string) => {
    const pool = stakingPools.find(p => p.id === poolId);
    if (!pool || pool.userStaked <= 0) {
      alert('You have no staked assets in this pool');
      return;
    }
    
    // Simulate withdrawal logic
    alert(`Withdrew ${pool.userStaked} tokens from pool ${poolId}`);
  };
  
  const handleClaimRewards = (poolId: string) => {
    const pool = stakingPools.find(p => p.id === poolId);
    if (!pool || pool.rewards <= 0) {
      alert('No rewards available to claim');
      return;
    }
    
    // Simulate claim rewards logic
    alert(`Claimed ${pool.rewards} token rewards from pool ${poolId}`);
  };
  
  // If wallet is not connected, show connect prompt
  if (!isWalletConnected) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <MainNav />
        
        {/* Connect Wallet Prompt */}
        <div className="container mx-auto px-4 py-16 flex-grow">
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
              Please connect your Solana wallet to view staking options and start earning rewards.
            </p>
            <WalletConnectButton 
              size="lg"
              className="w-full"
              onConnect={handleConnect}
              showAddress={false}
            />
          </div>
        </div>
        
        <Footer variant="minimal" />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNav />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Token Staking</h1>
          <p className="text-text-secondary max-w-3xl">
            Stake your tokens to earn passive income. Choose different staking pools for different APYs and rewards.
          </p>
        </div>
        
        {/* Staking Overview Card */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">Staking Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-text-secondary mb-1">Total Staked Assets</div>
              <div className="text-2xl font-bold text-text-primary">{formatCurrency(650)}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-text-secondary mb-1">Accumulated Earnings</div>
              <div className="text-2xl font-bold text-green-500">+{formatCurrency(21.25)}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-text-secondary mb-1">Pending Rewards</div>
              <div className="text-2xl font-bold text-primary">{formatCurrency(stakingPools.reduce((acc, pool) => acc + pool.rewards, 0))}</div>
            </div>
          </div>
        </div>
        
        {/* Staking Pool List */}
        <div className="space-y-6 mb-8">
          {stakingPools.map((pool) => (
            <div key={pool.id} className="bg-white rounded-xl shadow-card overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                        {/* Using default image, replace with actual token icons in production */}
                        <Image
                          src={pool.logo || '/token-placeholder.png'}
                          alt={pool.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary">{pool.name}</h3>
                      <p className="text-text-secondary text-sm">{pool.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary mb-1">Annual Yield (APY)</div>
                    <div className="text-2xl font-bold text-green-500">{pool.apy}%</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Total Staked</span>
                      <span className="font-medium text-text-primary">{formatCurrency(pool.totalStaked)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Your Stake</span>
                      <span className="font-medium text-text-primary">{pool.userStaked} {pool.token}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Pending Rewards</span>
                      <span className="font-medium text-text-primary">{pool.rewards} {pool.token}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Lock Period</span>
                      <span className="font-medium text-text-primary">{pool.lockupPeriod}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Minimum Stake</span>
                      <span className="font-medium text-text-primary">{pool.minStake} {pool.token}</span>
                    </div>
                  </div>
                  
                  {pool.userStaked > 0 && (
                    <div className="mt-4 flex space-x-3">
                      <button
                        onClick={() => handleWithdraw(pool.id)}
                        className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors text-sm font-medium"
                      >
                        Withdraw
                      </button>
                      
                      {pool.rewards > 0 && (
                        <button
                          onClick={() => handleClaimRewards(pool.id)}
                          className="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors text-sm font-medium"
                        >
                          Claim Rewards
                        </button>
                      )}
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-text-primary font-medium mb-3">Stake {pool.token}</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-text-secondary mb-1">Stake Amount</label>
                        <div className="flex">
                          <input
                            type="text"
                            value={stakeAmount}
                            onChange={handleStakeAmountChange}
                            placeholder={`Minimum ${pool.minStake} ${pool.token}`}
                            className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                          />
                          <span className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-md px-3 flex items-center text-text-secondary">
                            {pool.token}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-text-secondary">
                        <div className="flex justify-between mb-1">
                          <span>Estimated Daily Earnings</span>
                          <span className="text-text-primary">
                            {stakeAmount ? (Number(stakeAmount) * pool.apy / 365 / 100).toFixed(6) : '0'} {pool.token}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Estimated Annual Earnings</span>
                          <span className="text-text-primary">
                            {stakeAmount ? (Number(stakeAmount) * pool.apy / 100).toFixed(4) : '0'} {pool.token}
                          </span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleStake(pool.id)}
                        className="w-full bg-primary text-white rounded-md py-2 font-medium hover:bg-primary-dark transition-colors"
                      >
                        Stake
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-card p-6">
          <h2 className="text-xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-2">What is staking?</h3>
              <p className="text-text-secondary">
                Staking is the process of locking your cryptocurrency assets in a smart contract to earn rewards. By staking, you help validate transactions, secure the network, and earn passive income.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-2">How do I start staking?</h3>
              <p className="text-text-secondary">
                To start staking, you need to connect your Solana wallet, select a staking pool, enter the amount you wish to stake, and click the "Stake" button. Once the transaction is confirmed, you will start earning rewards.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-2">How are rewards calculated and distributed?</h3>
              <p className="text-text-secondary">
                Rewards are calculated based on your staked amount, the APY rate, and staking duration. On the NEXUSfi platform, rewards are calculated daily and automatically distributed to your wallet weekly. You can also manually claim accumulated rewards at any time.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Is there a lock-up period?</h3>
              <p className="text-text-secondary">
                This depends on the staking pool you choose. Some pools have no lock-up period, allowing you to withdraw funds at any time, while others may have specific lock-up periods in exchange for higher yields. The lock-up period is indicated in the details of each staking pool.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Are there risks to staking?</h3>
              <p className="text-text-secondary">
                While staking is generally considered a lower-risk investment strategy than trading, there are still some risks involved, such as smart contract risk, market volatility risk, etc. NEXUSfi takes multiple security measures to protect user assets, but users are advised to understand the associated risks before investing.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 