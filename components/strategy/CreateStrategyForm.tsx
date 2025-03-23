'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { RiskProfile, RebalancingFrequency } from '@/types';

export function CreateStrategyForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    description: '',
    risk: RiskProfile.Medium,
    targetAPY: 15,
    rebalancing: RebalancingFrequency.Weekly,
    tokens: [] as string[],
    minimumInvestment: 500,
  });

  const [tokenInput, setTokenInput] = React.useState('');
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Available token list
  const availableTokens = ['SOL', 'USDC', 'ETH', 'BTC', 'ORCA', 'RAY', 'SRM', 'MNGO'];

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle token addition
  const handleAddToken = () => {
    if (tokenInput && !formData.tokens.includes(tokenInput)) {
      setFormData(prev => ({
        ...prev,
        tokens: [...prev.tokens, tokenInput]
      }));
      setTokenInput('');
    }
  };

  // Handle token removal
  const handleRemoveToken = (token: string) => {
    setFormData(prev => ({
      ...prev,
      tokens: prev.tokens.filter(t => t !== token)
    }));
  };

  // Handle token selection
  const handleSelectToken = (token: string) => {
    if (!formData.tokens.includes(token)) {
      setFormData(prev => ({
        ...prev,
        tokens: [...prev.tokens, token]
      }));
    } else {
      handleRemoveToken(token);
    }
  };

  // Handle submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success! In a real app, we would redirect or show a success message
    setIsSubmitting(false);
    
    console.log('Strategy data submitted:', formData);
    // Reset form or redirect
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader
        title="Create Custom Investment Strategy"
        subtitle="Customize your investment portfolio parameters, and our AI will help optimize asset allocation"
      />
      
      <CardContent>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Strategy Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder="Name your strategy"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Strategy Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  rows={3}
                  placeholder="Describe the goals and characteristics of your investment strategy"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Risk Level <span className="text-red-500">*</span>
                </label>
                <select
                  name="risk"
                  value={formData.risk}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                >
                  <option value={RiskProfile.Low}>Low Risk</option>
                  <option value={RiskProfile.Medium}>Medium Risk</option>
                  <option value={RiskProfile.MediumHigh}>Medium-High Risk</option>
                  <option value={RiskProfile.High}>High Risk</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Target Annual Yield (%) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="targetAPY"
                  value={formData.targetAPY}
                  onChange={handleChange}
                  required
                  min="1"
                  max="100"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                />
                <p className="text-xs text-text-secondary mt-1">
                  Note: Higher yields are typically associated with higher risks
                </p>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  type="button" 
                  onClick={() => setStep(2)}
                  disabled={!formData.name || !formData.description}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Rebalancing Frequency <span className="text-red-500">*</span>
                </label>
                <select
                  name="rebalancing"
                  value={formData.rebalancing}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                >
                  <option value={RebalancingFrequency.Daily}>Daily</option>
                  <option value={RebalancingFrequency.Weekly}>Weekly</option>
                  <option value={RebalancingFrequency.Hourly}>Hourly</option>
                  <option value={RebalancingFrequency.RealTime}>Real-time</option>
                </select>
                <p className="text-xs text-text-secondary mt-1">
                  More frequent rebalancing may result in higher transaction fees
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Minimum Investment (USDC) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="minimumInvestment"
                  value={formData.minimumInvestment}
                  onChange={handleChange}
                  required
                  min="10"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Included Tokens <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value.toUpperCase())}
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                    placeholder="Enter token symbol (e.g. SOL)"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleAddToken}
                    disabled={!tokenInput || formData.tokens.includes(tokenInput)}
                  >
                    Add
                  </Button>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-text-secondary mb-2">Select common tokens:</p>
                  <div className="flex flex-wrap gap-2">
                    {availableTokens.map(token => (
                      <button
                        key={token}
                        type="button"
                        onClick={() => handleSelectToken(token)}
                        className={`px-2 py-1 text-xs rounded-full ${
                          formData.tokens.includes(token) 
                            ? 'bg-primary/20 text-primary cursor-not-allowed' 
                            : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                        }`}
                        disabled={formData.tokens.includes(token)}
                      >
                        {token}
                      </button>
                    ))}
                  </div>
                </div>
                
                {formData.tokens.length > 0 && (
                  <div>
                    <p className="text-sm text-text-secondary mb-2">Selected tokens:</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.tokens.map(token => (
                        <div key={token} className="bg-primary text-white px-2 py-1 rounded-full text-xs flex items-center">
                          {token}
                          <button 
                            type="button" 
                            onClick={() => handleRemoveToken(token)}
                            className="ml-1 text-white/80 hover:text-white"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {formData.tokens.length === 0 && (
                  <p className="text-sm text-red-500">Please select at least one token</p>
                )}
              </div>
              
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setStep(1)}
                >
                  Previous
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting || formData.tokens.length === 0}
                  isLoading={isSubmitting}
                >
                  Create Strategy
                </Button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
} 