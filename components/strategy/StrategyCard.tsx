'use client';

import React from 'react';
import Link from 'next/link';
import { formatPercentage } from '@/lib/utils';
import { Strategy, RiskProfile } from '@/types';

interface StrategyCardProps {
  strategy: Strategy;
  className?: string;
}

export function StrategyCard({ strategy, className }: StrategyCardProps) {
  // Get risk rating color
  const getRiskColor = (risk: RiskProfile | string) => {
    switch (risk) {
      case RiskProfile.Low:
        return 'text-green-500';
      case RiskProfile.Medium:
        return 'text-yellow-500';
      case RiskProfile.MediumHigh:
        return 'text-orange-500';
      case RiskProfile.High:
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <Link 
      href={`/strategies/${strategy.id}`}
      className={`block bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-shadow ${className || ''}`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-text-primary">{strategy.name}</h3>
            <p className="text-text-secondary mt-1">{strategy.description}</p>
          </div>
          <div className="bg-primary/10 rounded-lg px-4 py-2 text-center">
            <div className="text-sm text-text-secondary">Annual Yield</div>
            <div className="text-2xl font-bold text-primary">{strategy.apy}%</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <div className="text-xs text-text-secondary mb-1">Risk</div>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full bg-${getRiskColor(strategy.risk).split('-')[1]} mr-2`}></span>
              <span className={`font-medium ${getRiskColor(strategy.risk)}`}>{strategy.risk}</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-text-secondary mb-1">Rebalancing</div>
            <div className="font-medium">{strategy.rebalancing}</div>
          </div>
          <div>
            <div className="text-xs text-text-secondary mb-1">Total TVL</div>
            <div className="font-medium">${strategy.tvl ? (strategy.tvl / 1000000).toFixed(1) : '0'}M</div>
          </div>
        </div>
        
        <div>
          <div className="text-xs text-text-secondary mb-2">Supported Tokens</div>
          <div className="flex flex-wrap gap-2">
            {strategy.tokens && strategy.tokens.map((token) => (
              <span key={token} className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                {token}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-100 px-6 py-3 flex justify-between items-center bg-gray-50">
        {strategy.performance && (
          <div className="flex items-center space-x-4">
            {strategy.performance.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-text-secondary">{item.period}</div>
                <div className={`text-xs font-medium ${item.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {item.value > 0 ? '+' : ''}{formatPercentage(item.value)}
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-primary font-medium flex items-center">
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
} 