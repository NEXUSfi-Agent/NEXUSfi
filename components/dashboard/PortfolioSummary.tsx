'use client';

import React from 'react';
import { formatCurrency, formatPercentage } from '@/lib/utils';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import type { Portfolio } from '@/types';

interface PortfolioSummaryProps {
  portfolio: Portfolio;
  className?: string;
}

export function PortfolioSummary({ portfolio, className }: PortfolioSummaryProps) {
  // Calculate additional statistics
  const totalReturn = portfolio.totalValue - portfolio.invested;
  const returnPercentage = totalReturn / portfolio.invested;
  const bestPerformer = [...portfolio.assets].sort((a, b) => (b.priceChange24h || b.change24h) - (a.priceChange24h || a.change24h))[0];

  return (
    <Card className={className}>
      <CardHeader
        title="Portfolio Overview"
        subtitle={`Last updated: ${new Date(portfolio.lastRebalanced || portfolio.createdAt).toLocaleString('en-US')}`}
      />
      
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div>
            <div className="text-sm text-text-secondary mb-1">Total Value</div>
            <div className="text-2xl font-bold">{formatCurrency(portfolio.totalValue)}</div>
          </div>
          
          <div>
            <div className="text-sm text-text-secondary mb-1">Profit/Loss</div>
            <div className={`text-2xl font-bold ${totalReturn >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {totalReturn > 0 ? '+' : ''}
              {formatCurrency(totalReturn)}
              <span className="text-sm ml-1">
                ({returnPercentage > 0 ? '+' : ''}{formatPercentage(returnPercentage)})
              </span>
            </div>
          </div>
          
          <div>
            <div className="text-sm text-text-secondary mb-1">Number of Assets</div>
            <div className="text-2xl font-bold">{portfolio.assets.length}</div>
          </div>
          
          <div>
            <div className="text-sm text-text-secondary mb-1">Best Performer</div>
            <div className="text-2xl font-bold text-green-500">
              {bestPerformer?.symbol} ({formatPercentage((bestPerformer?.priceChange24h || bestPerformer?.change24h) || 0)})
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-text-primary mb-3">Asset Allocation</h3>
          <div className="space-y-3">
            {portfolio.assets.map((asset) => (
              <div key={asset.symbol} className="flex items-center">
                <div className="w-24 text-sm font-medium">{asset.symbol}</div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(asset.value / portfolio.totalValue) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-24 text-right text-sm">
                  {formatPercentage(asset.value / portfolio.totalValue)}
                </div>
                <div className="w-24 text-right text-sm">
                  {formatCurrency(asset.value)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 