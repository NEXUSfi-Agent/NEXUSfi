'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { connect, disconnect, isConnected, getPublicKey } from '@/lib/wallet';
import { truncateAddress } from '@/lib/utils';

interface WalletConnectButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
  showAddress?: boolean;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

export function WalletConnectButton({
  className,
  size = 'md',
  variant = 'primary',
  showAddress = true,
  onConnect,
  onDisconnect,
}: WalletConnectButtonProps) {
  const [connected, setConnected] = React.useState(false);
  const [address, setAddress] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // Check if wallet is already connected on component mount
    const checkConnection = async () => {
      const connected = await isConnected();
      setConnected(connected);
      
      if (connected) {
        const publicKey = await getPublicKey();
        setAddress(publicKey?.toString() || null);
      }
    };
    
    checkConnection();
  }, []);

  const handleConnect = async () => {
    try {
      setLoading(true);
      await connect();
      setConnected(true);
      const publicKey = await getPublicKey();
      setAddress(publicKey?.toString() || null);
      onConnect?.();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      setLoading(true);
      await disconnect();
      setConnected(false);
      setAddress(null);
      onDisconnect?.();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    } finally {
      setLoading(false);
    }
  };

  // Determine button styles based on props
  const buttonStyles = cn(
    'rounded-md font-medium transition-colors flex items-center justify-center',
    {
      // Size variants
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2': size === 'md',
      'px-5 py-2.5 text-lg': size === 'lg',
      
      // Color variants
      'bg-primary text-white hover:bg-primary-dark': variant === 'primary' && !connected,
      'bg-green-500 text-white hover:bg-green-600': variant === 'primary' && connected,
      'bg-gray-200 text-text-primary hover:bg-gray-300': variant === 'secondary' && !connected,
      'bg-green-100 text-green-800 hover:bg-green-200': variant === 'secondary' && connected,
      'border border-primary text-primary hover:bg-primary/10': variant === 'outline' && !connected,
      'border border-green-500 text-green-600 hover:bg-green-50': variant === 'outline' && connected,
    },
    className
  );

  return (
    <button
      className={buttonStyles}
      onClick={connected ? handleDisconnect : handleConnect}
      disabled={loading}
    >
      {loading ? (
        <div className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {connected ? 'Disconnecting...' : 'Connecting...'}
        </div>
      ) : connected ? (
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          {showAddress && address ? truncateAddress(address) : 'Connected'}
        </div>
      ) : (
        'Connect Wallet'
      )}
    </button>
  );
} 