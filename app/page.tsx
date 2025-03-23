'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { MainNav } from '@/components/layout/MainNav'; 
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Reimagine Your Crypto Asset Management
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                NEXUSfi leverages advanced AI algorithms and Solana's high-performance blockchain to provide institutional-grade investment strategies for everyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/dashboard" passHref>
                  <Button 
                    size="lg" 
                    variant="default"
                    className="font-semibold"
                  >
                    Launch App
                  </Button>
                </Link>
                <Link href="/strategies" passHref>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-semibold"
                  >
                    Explore Strategies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Functions */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Powerful Features, Simple Experience</h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                The NEXUSfi platform provides a powerful set of tools to help you easily manage and optimize your crypto asset investments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 10L12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">AI-Driven Strategy Selection</h3>
                <p className="text-text-secondary">
                  Match your risk preferences and investment goals with optimal strategies through artificial intelligence algorithms for smart investment decisions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Automated Portfolio Management</h3>
                <p className="text-text-secondary">
                  Continuously monitor and rebalance your portfolio to maintain optimal performance and hedge against market volatility.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Risk Assessment Tools</h3>
                <p className="text-text-secondary">
                  Comprehensive risk analysis system with adjustable parameters to help you understand and control investment risks.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M10 20.5C10 20.5 8.5 19.5 8.5 18.5C8.5 17.5 9.5 16.5 10.5 16.5C11.5 16.5 12 17.5 12 18.5C12 19.5 10 20.5 10 20.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 20.5C18 20.5 16.5 19.5 16.5 18.5C16.5 17.5 17.5 16.5 18.5 16.5C19.5 16.5 20 17.5 20 18.5C20 19.5 18 20.5 18 20.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 20.5C4 20.5 2.5 19.5 2.5 18.5C2.5 17.5 3.5 16.5 4.5 16.5C5.5 16.5 6 17.5 6 18.5C6 19.5 4 20.5 4 20.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 9H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Real-time Analytics</h3>
                <p className="text-text-secondary">
                  Comprehensive performance metrics and market insights to keep you informed about your portfolio status and market trends.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Investment Strategy Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Choose the Investment Strategy That Fits You Best</h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                NEXUSfi offers a variety of carefully designed investment strategies to meet the needs of different risk preferences and investment goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-card overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">Yield Optimizer</h3>
                      <p className="text-text-secondary mt-1">Focus on obtaining sustainable returns from stablecoin trading pairs and lending protocols</p>
                    </div>
                    <div className="bg-primary/10 rounded-lg px-4 py-2 text-center">
                      <div className="text-sm text-text-secondary">Target APY</div>
                      <div className="text-2xl font-bold text-primary">8.5%</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-text-secondary mb-1">Risk</div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                        <span className="font-medium text-green-500">Low</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary mb-1">Rebalancing</div>
                      <div className="font-medium">Daily</div>
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary mb-1">Tokens</div>
                      <div className="font-medium">USDC, SOL</div>
                    </div>
                  </div>
                  
                  <Link href="/strategies/yield-optimizer" passHref>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-card overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">Growth Portfolio</h3>
                      <p className="text-text-secondary mt-1">Balanced allocation of large to mid-cap crypto assets, focused on medium to long-term growth</p>
                    </div>
                    <div className="bg-primary/10 rounded-lg px-4 py-2 text-center">
                      <div className="text-sm text-text-secondary">Target APY</div>
                      <div className="text-2xl font-bold text-primary">15.2%</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-text-secondary mb-1">Risk</div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                        <span className="font-medium text-yellow-500">Medium</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary mb-1">Rebalancing</div>
                      <div className="font-medium">Weekly</div>
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary mb-1">Tokens</div>
                      <div className="font-medium">SOL, ETH, BTC</div>
                    </div>
                  </div>
                  
                  <Link href="/strategies/growth-portfolio" passHref>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-card overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">Alpha Hunter</h3>
                      <p className="text-text-secondary mt-1">Actively seeks alpha returns by leveraging market asymmetric information and arbitrage opportunities</p>
                    </div>
                    <div className="bg-primary/10 rounded-lg px-4 py-2 text-center">
                      <div className="text-sm text-text-secondary">Target APY</div>
                      <div className="text-2xl font-bold text-primary">32.5%</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-text-secondary mb-1">Risk</div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                        <span className="font-medium text-red-500">High</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary mb-1">Rebalancing</div>
                      <div className="font-medium">Real-time</div>
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary mb-1">Tokens</div>
                      <div className="font-medium">SOL, RAY, ORCA</div>
                    </div>
                  </div>
                  
                  <Link href="/strategies/alpha-seeker" passHref>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-card overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">AI Hedge Strategy</h3>
                      <p className="text-text-secondary mt-1">Analyze market trends through machine learning to pursue stable returns in various market conditions</p>
                    </div>
                    <div className="bg-primary/10 rounded-lg px-4 py-2 text-center">
                      <div className="text-sm text-text-secondary">Target APY</div>
                      <div className="text-2xl font-bold text-primary">25.8%</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-text-secondary mb-1">Risk</div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                        <span className="font-medium text-orange-500">Medium-High</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary mb-1">Rebalancing</div>
                      <div className="font-medium">Hourly</div>
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary mb-1">Tokens</div>
                      <div className="font-medium">SOL, USDC, ETH</div>
                    </div>
                  </div>
                  
                  <Link href="/strategies/ai-hedge" passHref>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link href="/strategies" passHref>
                <Button variant="default" size="lg">View All Strategies</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Transforming Your Crypto Investment Approach</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join NEXUSfi, experience the AI-driven crypto asset management platform, optimize your investment portfolio, and achieve your investment goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/dashboard" passHref>
                <Button 
                  size="lg" 
                  variant="default"
                  className="bg-white text-primary hover:bg-blue-50 font-semibold"
                >
                  Launch App
                </Button>
              </Link>
              <Link href="/strategies" passHref>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 