'use client';

import React from 'react';
import { Strategy, RiskProfile } from '@/types';
import { StrategyCard } from './StrategyCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface StrategyGridProps {
  strategies: Strategy[];
  className?: string;
}

export function StrategyGrid({ strategies, className }: StrategyGridProps) {
  const [filters, setFilters] = React.useState({
    risk: [] as RiskProfile[],
    minApy: 0,
    maxApy: 100
  });
  
  const [sortBy, setSortBy] = React.useState<'apy' | 'risk' | 'tvl'>('apy');
  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('desc');
  
  // Toggle risk filter
  const toggleRiskFilter = (risk: RiskProfile) => {
    setFilters(prev => {
      const isAlreadySelected = prev.risk.includes(risk);
      if (isAlreadySelected) {
        return { ...prev, risk: prev.risk.filter(r => r !== risk) };
      } else {
        return { ...prev, risk: [...prev.risk, risk] };
      }
    });
  };
  
  // Handle APY range change
  const handleApyChange = (type: 'min' | 'max', value: number) => {
    setFilters(prev => ({
      ...prev,
      [type === 'min' ? 'minApy' : 'maxApy']: value
    }));
  };
  
  // Handle sort change
  const handleSortChange = (sortType: 'apy' | 'risk' | 'tvl') => {
    if (sortBy === sortType) {
      // If already sorting by this type, toggle sort order
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      // Otherwise change sort type and set default sort order
      setSortBy(sortType);
      setSortOrder(sortType === 'risk' ? 'asc' : 'desc');
    }
  };
  
  // Get risk rating value (for sorting)
  const getRiskValue = (risk: RiskProfile): number => {
    switch (risk) {
      case RiskProfile.Low: return 1;
      case RiskProfile.Medium: return 2;
      case RiskProfile.MediumHigh: return 3;
      case RiskProfile.High: return 4;
      default: return 0;
    }
  };
  
  // Filter and sort strategies
  const filteredAndSortedStrategies = strategies
    .filter(strategy => 
      // If no risk filter is selected, display all risk levels
      (filters.risk.length === 0 || filters.risk.includes(strategy.risk)) && 
      // APY range filter
      strategy.apy >= filters.minApy && 
      strategy.apy <= filters.maxApy
    )
    .sort((a, b) => {
      // Sort based on sort type and order
      if (sortBy === 'apy') {
        return sortOrder === 'asc' ? a.apy - b.apy : b.apy - a.apy;
      } else if (sortBy === 'risk') {
        return sortOrder === 'asc' 
          ? getRiskValue(a.risk) - getRiskValue(b.risk) 
          : getRiskValue(b.risk) - getRiskValue(a.risk);
      } else if (sortBy === 'tvl') {
        const aTvl = a.tvl || 0;
        const bTvl = b.tvl || 0;
        return sortOrder === 'asc' ? aTvl - bTvl : bTvl - aTvl;
      }
      return 0;
    });

  return (
    <div className={className}>
      {/* Filter and sort controls */}
      <div className="mb-6 bg-gray-50 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-text-secondary mb-2">Risk Level</h3>
            <div className="flex flex-wrap gap-2">
              {Object.values(RiskProfile).map(risk => (
                <button
                  key={risk}
                  onClick={() => toggleRiskFilter(risk)}
                  className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                    filters.risk.includes(risk) 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white text-text-secondary border-gray-200 hover:border-primary'
                  }`}
                >
                  {risk}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-sm font-medium text-text-secondary mb-2">Annual Yield (APY)</h3>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                value={filters.minApy}
                onChange={(e) => handleApyChange('min', parseInt(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm text-text-secondary w-24 text-right">
                {filters.minApy}% - {filters.maxApy}%
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={filters.maxApy}
                onChange={(e) => handleApyChange('max', parseInt(e.target.value))}
                className="flex-1"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-sm font-medium text-text-secondary mb-2">Sort by</h3>
            <div className="flex gap-2">
              <button
                onClick={() => handleSortChange('apy')}
                className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                  sortBy === 'apy' 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-text-secondary border-gray-200 hover:border-primary'
                }`}
              >
                Yield {sortBy === 'apy' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
              <button
                onClick={() => handleSortChange('risk')}
                className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                  sortBy === 'risk' 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-text-secondary border-gray-200 hover:border-primary'
                }`}
              >
                Risk {sortBy === 'risk' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
              <button
                onClick={() => handleSortChange('tvl')}
                className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                  sortBy === 'tvl' 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-text-secondary border-gray-200 hover:border-primary'
                }`}
              >
                Total Locked {sortBy === 'tvl' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Result count and create button */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-text-secondary">
          Showing <span className="font-medium">{filteredAndSortedStrategies.length}</span> strategies (out of {strategies.length})
        </p>
        <Link href="/strategies/create" passHref>
          <Button 
            variant="default" 
            size="md"
            className="flex items-center gap-2"
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path 
                d="M12 5V19M5 12H19" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Create Custom Strategy
          </Button>
        </Link>
      </div>
      
      {/* Strategy grid */}
      {filteredAndSortedStrategies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedStrategies.map((strategy) => (
            <StrategyCard key={strategy.id} strategy={strategy} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-text-primary mb-2">No matching strategies found</h3>
          <p className="text-text-secondary mb-6">Try adjusting your filter settings to see more strategies</p>
          <Button 
            variant="outline"
            onClick={() => setFilters({ risk: [], minApy: 0, maxApy: 100 })}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
} 