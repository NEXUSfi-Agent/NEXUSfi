'use client';

import React from 'react';
import { CreateStrategyForm } from '@/components/strategy/CreateStrategyForm';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { MainNav } from '@/components/layout/MainNav';
import { Footer } from '@/components/layout/Footer';
import { WalletStatus } from '@/types';
import * as walletService from '@/lib/wallet';

export default function CreateStrategyPage() {
  const [walletStatus, setWalletStatus] = React.useState<WalletStatus>('disconnected');
  
  // Check wallet connection status
  React.useEffect(() => {
    const checkWalletStatus = async () => {
      try {
        const isConnected = await walletService.isConnected();
        setWalletStatus(isConnected ? 'connected' : 'disconnected');
      } catch (error) {
        console.error('Error checking wallet status:', error);
        setWalletStatus('disconnected');
      }
    };
    
    checkWalletStatus();
  }, []);
  
  // Handle wallet connection
  const handleConnectWallet = async () => {
    try {
      setWalletStatus('connecting');
      
      // Connect wallet
      await walletService.connect();
      
      setWalletStatus('connected');
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setWalletStatus('disconnected');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Create Strategy</h1>
          <p className="text-text-secondary">
            Customize your investment strategy and leverage NEXUSfi's AI technology to optimize asset allocation
          </p>
        </div>
        
        {walletStatus !== 'connected' ? (
          <Card>
            <CardHeader
              title="Wallet Connection Required"
              subtitle="Please connect your wallet to create a custom strategy"
            />
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-text-secondary mb-6 text-center max-w-md">
                  Creating a custom strategy requires connecting your wallet to verify your identity and deploy the strategy.
                  Once connected, you'll be able to create and manage personalized investment strategies.
                </p>
                <button
                  onClick={handleConnectWallet}
                  disabled={walletStatus === 'connecting'}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-70"
                >
                  {walletStatus === 'connecting' ? 'Connecting...' : 'Connect Wallet'}
                </button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <CreateStrategyForm />
        )}
      </main>
      
      <Footer variant="minimal" />
    </div>
  );
} 