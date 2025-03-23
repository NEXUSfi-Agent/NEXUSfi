import React from 'react';
import { 
  getAllStrategies, 
  getStrategiesByRisk,
  getRecommendedStrategies
} from '@/services';
import { UserPreferences } from '@/types';

/**
 * This is an example page that demonstrates how to use the service layer
 * to access strategy data in a clean, maintainable way.
 */
export default function StrategyServiceExamplePage() {
  // Get all available strategies
  const allStrategies = getAllStrategies();
  
  // Get strategies filtered by risk profile
  const lowRiskStrategies = getStrategiesByRisk('low');
  
  // Example user preferences
  const userPreferences: UserPreferences = {
    riskTolerance: 'medium',
    investmentAmount: 1000,
    investmentHorizon: 'medium',
    preferredTokens: ['SOL', 'ETH', 'USDC'],
    prioritizeReturns: true,
    feeSensitivity: 'medium'
  };
  
  // Get recommended strategies based on user preferences
  const recommendedStrategies = getRecommendedStrategies(userPreferences);
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Strategy Service Example</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">All Strategies ({allStrategies.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allStrategies.map(strategy => (
            <div key={strategy.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">{strategy.name}</h3>
              <p className="text-gray-600 mb-3">{strategy.description}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-medium">Risk:</span> {strategy.risk}
                </div>
                <div>
                  <span className="font-medium">APY:</span> {strategy.apy}%
                </div>
                <div>
                  <span className="font-medium">Min Investment:</span> ${strategy.minimumInvestment}
                </div>
                <div>
                  <span className="font-medium">Rebalancing:</span> {strategy.rebalancing}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Low Risk Strategies ({lowRiskStrategies.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lowRiskStrategies.map(strategy => (
            <div key={strategy.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-2">{strategy.name}</h3>
              <p className="text-gray-600 mb-3">{strategy.description}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-medium">Risk:</span> {strategy.risk}
                </div>
                <div>
                  <span className="font-medium">APY:</span> {strategy.apy}%
                </div>
                <div>
                  <span className="font-medium">Min Investment:</span> ${strategy.minimumInvestment}
                </div>
                <div>
                  <span className="font-medium">Rebalancing:</span> {strategy.rebalancing}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recommended Strategies for User</h2>
        <div className="p-4 mb-6 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">User Preferences:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li><span className="font-medium">Risk Tolerance:</span> {userPreferences.riskTolerance}</li>
            <li><span className="font-medium">Investment Amount:</span> ${userPreferences.investmentAmount}</li>
            <li><span className="font-medium">Time Horizon:</span> {userPreferences.investmentHorizon}</li>
            <li><span className="font-medium">Preferred Tokens:</span> {userPreferences.preferredTokens.join(', ')}</li>
            <li><span className="font-medium">Prioritize Returns:</span> {userPreferences.prioritizeReturns ? 'Yes' : 'No'}</li>
            <li><span className="font-medium">Fee Sensitivity:</span> {userPreferences.feeSensitivity}</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedStrategies.map(strategy => (
            <div key={strategy.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-2">{strategy.name}</h3>
              <p className="text-gray-600 mb-3">{strategy.description}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-medium">Risk:</span> {strategy.risk}
                </div>
                <div>
                  <span className="font-medium">APY:</span> {strategy.apy}%
                </div>
                <div>
                  <span className="font-medium">Min Investment:</span> ${strategy.minimumInvestment}
                </div>
                <div>
                  <span className="font-medium">Rebalancing:</span> {strategy.rebalancing}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 