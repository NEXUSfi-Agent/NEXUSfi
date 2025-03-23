'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { MainNav } from '@/components/layout/MainNav';
import { Footer } from '@/components/layout/Footer';
import { getStrategyById } from '@/lib/data';
import { RiskProfile } from '@/types';

interface Params {
  id: string;
  [key: string]: string | string[];
}

export default function StrategyDetailPage() {
  const params = useParams() as Params;
  const strategyId = params.id;
  const strategy = getStrategyById(strategyId);
  
  const [selectedTab, setSelectedTab] = React.useState<'overview' | 'performance' | 'allocation'>('overview');

  if (!strategy) {
    return (
      <div className="min-h-screen flex flex-col">
        <MainNav />
        <main className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary mb-4">Strategy Not Found</h1>
            <p className="text-text-secondary mb-6">Could not find strategy with ID {strategyId}</p>
            <Link href="/strategies" passHref>
              <Button variant="default">Back to Strategies</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const getRiskColor = (risk: RiskProfile) => {
    switch (risk) {
      case RiskProfile.Low:
        return 'bg-green-500';
      case RiskProfile.Medium:
        return 'bg-yellow-500';
      case RiskProfile.High:
        return 'bg-red-500';
      case RiskProfile.MediumHigh:
        return 'bg-orange-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getRiskText = (risk: RiskProfile) => {
    switch (risk) {
      case RiskProfile.Low:
        return 'Low';
      case RiskProfile.Medium:
        return 'Medium';
      case RiskProfile.High:
        return 'High';
      case RiskProfile.MediumHigh:
        return 'Medium-High';
      default:
        return 'Unknown';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Back link */}
          <Link 
            href="/strategies" 
            className="inline-flex items-center text-text-secondary hover:text-primary mb-6"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Strategies
          </Link>
          
          {/* Strategy title and overview */}
          <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">{strategy.name}</h1>
                  <p className="text-text-secondary mb-4">{strategy.description}</p>
                  
                  <div className="flex flex-wrap gap-6 mb-4">
                    <div>
                      <div className="text-sm text-text-secondary mb-1">Target Annual Yield</div>
                      <div className="text-2xl font-bold text-primary">{strategy.apy}%</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-text-secondary mb-1">Risk Level</div>
                      <div className="flex items-center">
                        <span className={`w-3 h-3 rounded-full ${getRiskColor(strategy.risk)} mr-2`}></span>
                        <span className="font-medium">{getRiskText(strategy.risk)}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-text-secondary mb-1">Rebalancing Frequency</div>
                      <div className="font-medium">{strategy.rebalancing}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-text-secondary mb-1">Total Value Locked</div>
                      <div className="font-medium">${strategy.tvl?.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-text-secondary mb-2">Supported Tokens</div>
                    <div className="flex flex-wrap gap-2">
                      {strategy.tokens && strategy.tokens.map(token => (
                        <span 
                          key={token}
                          className="bg-gray-100 text-text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {token}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:text-right flex flex-col gap-3">
                  <Button 
                    variant="default" 
                    size="lg"
                    className="min-w-[180px]"
                  >
                    Invest in This Strategy
                  </Button>
                  <Button 
                    variant="outline"
                    className="min-w-[180px]"
                  >
                    Add to Favorites
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Tab navigation */}
            <div className="border-t border-gray-200">
              <div className="flex">
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    selectedTab === 'overview'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-text-secondary hover:text-primary hover:border-b-2 hover:border-primary/30'
                  }`}
                  onClick={() => setSelectedTab('overview')}
                >
                  Strategy Overview
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    selectedTab === 'performance'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-text-secondary hover:text-primary hover:border-b-2 hover:border-primary/30'
                  }`}
                  onClick={() => setSelectedTab('performance')}
                >
                  Historical Performance
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    selectedTab === 'allocation'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-text-secondary hover:text-primary hover:border-b-2 hover:border-primary/30'
                  }`}
                  onClick={() => setSelectedTab('allocation')}
                >
                  Asset Allocation
                </button>
              </div>
            </div>
          </div>
          
          {/* Tab content */}
          <div className="mb-10">
            {selectedTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold">Strategy Features</h2>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex">
                        <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <h3 className="font-medium">Risk Management</h3>
                          <p className="text-text-secondary text-sm mt-1">
                            Strategy employs diversified investment approach to reduce single-asset risk exposure.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <h3 className="font-medium">Automatic Rebalancing</h3>
                          <p className="text-text-secondary text-sm mt-1">
                            Automatically adjusts portfolio weights based on market conditions and target allocations.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <h3 className="font-medium">Smart Asset Selection</h3>
                          <p className="text-text-secondary text-sm mt-1">
                            Utilizes data analysis and market trend forecasting to select optimal asset combinations.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <h3 className="font-medium">Low Fees</h3>
                          <p className="text-text-secondary text-sm mt-1">
                            Transparent fee structure with no hidden costs, charging only a small management fee when yield is generated.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold">Investment Logic</h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary mb-4">
                      The {strategy.name} strategy aims to achieve stable returns while controlling risk through a carefully selected portfolio of crypto assets. This strategy leverages NEXUSfi's AI algorithms and quantitative models to actively monitor market trends and asset performance.
                    </p>
                    <p className="text-text-secondary mb-4">
                      This strategy is particularly suitable for investors {strategy.risk === RiskProfile.Low ? 'seeking stable returns with lower risk tolerance' : strategy.risk === RiskProfile.Medium ? 'looking to balance growth and risk' : 'pursuing high returns and able to tolerate higher volatility'}.
                    </p>
                    <p className="text-text-secondary">
                      Investors can easily invest in this strategy without manually managing assets or continuously monitoring the market. All rebalancing and asset adjustments are automatically executed by the NEXUSfi platform.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {selectedTab === 'performance' && (
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold">Historical Performance</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {strategy.performance?.map((item) => (
                        <div key={item.period} className="flex justify-between items-center">
                          <span className="text-text-secondary">{item.period}</span>
                          <span className={`font-medium ${item.value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {item.value >= 0 ? '+' : ''}{item.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold">Monthly Returns</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center">
                      <p className="text-text-secondary">Monthly returns chart will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {selectedTab === 'allocation' && (
              <div>
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold">Target Asset Allocation</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="h-64 flex items-center justify-center">
                          <p className="text-text-secondary">Asset allocation pie chart will be displayed here</p>
                        </div>
                      </div>
                      <div>
                        <ul className="space-y-3">
                          {strategy.tokens && strategy.tokens.map((token, index) => (
                            <li key={token} className="flex justify-between items-center border-b border-gray-100 pb-2">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center font-medium">
                                  {token.substring(0, 1)}
                                </div>
                                <span>{token}</span>
                              </div>
                              <span className="font-medium">{strategy.tokens && (100 / strategy.tokens.length).toFixed(1)}%</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-text-secondary text-sm mt-4">
                          The above allocation is for reference only. Actual asset allocation may vary based on market conditions and strategy adjustments.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
          
          {/* Related strategies */}
          <div>
            <h2 className="text-xl font-bold mb-6">Other Strategies You May Be Interested In</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Yield Optimizer</h3>
                  <p className="text-text-secondary text-sm mb-4">Focuses on generating sustainable yield from stablecoin trading pairs and lending protocols.</p>
                  <div className="flex justify-between mb-3">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                      <span className="text-sm">Low Risk</span>
                    </div>
                    <span className="text-sm font-medium">8.5% APY</span>
                  </div>
                  <Link href="/strategies/yield-optimizer" passHref>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Growth Portfolio</h3>
                  <p className="text-text-secondary text-sm mb-4">Balanced allocation of large to mid-cap crypto assets, focused on medium to long-term growth.</p>
                  <div className="flex justify-between mb-3">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                      <span className="text-sm">Medium Risk</span>
                    </div>
                    <span className="text-sm font-medium">15.2% APY</span>
                  </div>
                  <Link href="/strategies/growth-portfolio" passHref>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2">AI Hedge Strategy</h3>
                  <p className="text-text-secondary text-sm mb-4">Uses machine learning to analyze market trends and seeks consistent returns in various market environments.</p>
                  <div className="flex justify-between mb-3">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                      <span className="text-sm">Medium-High Risk</span>
                    </div>
                    <span className="text-sm font-medium">25.8% APY</span>
                  </div>
                  <Link href="/strategies/ai-hedge" passHref>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 