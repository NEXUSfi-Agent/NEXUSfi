"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { StrategyCard } from '@/components/strategy/StrategyCard'
import { Strategy } from '@/types/strategy'

// Fetch strategy list from data service
const getStrategies = async (): Promise<Strategy[]> => {
  // Simulate API call
  return mockStrategies
}

export default function StrategiesPage() {
  const [strategies, setStrategies] = useState<Strategy[]>([])
  
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-text-primary mb-2">Investment Strategies</h1>
      <p className="text-text-secondary mb-8">
        Browse our investment strategies to find options that best match your risk preference and investment goals. You can also create custom strategies.
      </p>
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-text-primary">Available Strategies</h2>
        <Link href="/strategies/create">
          <Button variant="default">Create Custom Strategy</Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategies.length > 0 ? (
          strategies.map((strategy) => (
            <StrategyCard key={strategy.id} strategy={strategy} />
          ))
        ) : (
          <React.Fragment>
            {mockStrategies.map((strategy) => (
              <StrategyCard key={strategy.id} strategy={strategy} />
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

// Mock data for development
const mockStrategies: Strategy[] = [
  {
    id: '1',
    name: 'Yield Optimizer',
    description: 'Focuses on generating stable yields through staking, lending, and liquidity provision.',
    riskLevel: 'Low',
    targetApy: '8-12%',
    rebalancingFrequency: 'Daily',
    assets: ['USDC', 'SOL', 'ETH'],
    createdAt: new Date().toISOString(),
    creator: 'NEXUSfi',
    tvl: 2450000,
    users: 347,
    performance: {
      daily: 0.05,
      weekly: 0.32,
      monthly: 1.2,
      allTime: 8.5
    }
  },
  {
    id: '2', 
    name: 'Growth Portfolio',
    description: 'Balanced allocation across major tokens with strong fundamentals for long-term growth.',
    riskLevel: 'Medium',
    targetApy: '15-20%',
    rebalancingFrequency: 'Weekly',
    assets: ['SOL', 'ETH', 'BTC', 'USDC'],
    createdAt: new Date().toISOString(),
    creator: 'NEXUSfi',
    tvl: 5280000,
    users: 892,
    performance: {
      daily: 0.12,
      weekly: 0.85,
      monthly: 3.2,
      allTime: 15.7
    }
  },
  {
    id: '3',
    name: 'Alpha Hunter',
    description: 'Actively seeks emerging opportunities in the Solana ecosystem for higher returns.',
    riskLevel: 'High',
    targetApy: '25-40%',
    rebalancingFrequency: 'Daily',
    assets: ['SOL', 'JTO', 'BONK', 'PYTH'],
    createdAt: new Date().toISOString(),
    creator: 'NEXUSfi',
    tvl: 1850000,
    users: 412,
    performance: {
      daily: 0.35,
      weekly: 2.4,
      monthly: 7.8,
      allTime: 32.5
    }
  },
  {
    id: '4',
    name: 'AI Hedge Strategy',
    description: 'Machine learning algorithms analyze market trends for stable returns in various conditions.',
    riskLevel: 'Medium-High',
    targetApy: '20-30%',
    rebalancingFrequency: 'Hourly',
    assets: ['SOL', 'USDC', 'ETH', 'BTC'],
    createdAt: new Date().toISOString(),
    creator: 'NEXUSfi',
    tvl: 3720000,
    users: 268,
    performance: {
      daily: 0.18,
      weekly: 1.25,
      monthly: 4.8,
      allTime: 22.3
    }
  }
] 