'use client';

/**
 * This file contains utility functions related to wallet interactions
 * In a real project, this should use an actual wallet connection library like @solana/wallet-adapter
 * Here is provided a simulated implementation
 */

import { WalletStatus } from '@/types';

// Simulate wallet state
let walletState = {
  connected: false,
  connecting: false,
  address: '',
  publicKey: '',
  balance: 0
};

// Safe access to localStorage
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
      }
    } catch (e) {
      console.error('Error accessing localStorage:', e);
    }
    return null;
  },
  
  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error('Error setting localStorage:', e);
    }
  },
  
  removeItem: (key: string): void => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
      }
    } catch (e) {
      console.error('Error removing from localStorage:', e);
    }
  }
};

// Check if wallet is connected
export const isConnected = async (): Promise<boolean> => {
  // Simulate getting connection status from local storage
  const savedState = safeLocalStorage.getItem('walletState');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      walletState = parsed;
      return parsed.connected;
    } catch (e) {
      console.error('Error parsing wallet state:', e);
    }
  }
  return walletState.connected;
};

// Connect wallet
export const connect = async (): Promise<string> => {
  // Simulate wallet connection process
  return new Promise((resolve, reject) => {
    try {
      // Generate a simulated Solana address
      const randomKey = Array.from(
        { length: 32 },
        () => Math.floor(Math.random() * 16).toString(16)
      ).join('');
      
      const publicKey = `So1ana${randomKey.substring(0, 32)}`;
      
      // Update wallet state
      walletState = {
        connected: true,
        connecting: false,
        address: publicKey,
        publicKey,
        balance: Math.random() * 10 + 0.5
      };
      
      // Save to local storage
      safeLocalStorage.setItem('walletState', JSON.stringify(walletState));
      
      setTimeout(() => {
        resolve(publicKey);
      }, 500); // Add delay to simulate real connection process
    } catch (error) {
      reject(new Error('Wallet connection failed'));
    }
  });
};

// Disconnect wallet
export const disconnect = async (): Promise<void> => {
  return new Promise((resolve) => {
    // Reset wallet state
    walletState = {
      connected: false,
      connecting: false,
      address: '',
      publicKey: '',
      balance: 0
    };
    
    // Remove from local storage
    safeLocalStorage.removeItem('walletState');
    
    setTimeout(resolve, 300); // Add brief delay
  });
};

// Get public key
export const getPublicKey = async (): Promise<string> => {
  if (!walletState.connected) {
    throw new Error('Wallet not connected');
  }
  return walletState.publicKey;
};

// Get balance
export const getBalance = async (): Promise<number> => {
  if (!walletState.connected) {
    throw new Error('Wallet not connected');
  }
  return walletState.balance;
};

// Send transaction (simulated)
export const sendTransaction = async (
  destination: string,
  amount: number
): Promise<string> => {
  if (!walletState.connected) {
    throw new Error('Wallet not connected');
  }
  
  if (amount <= 0) {
    throw new Error('Amount must be greater than 0');
  }
  
  if (amount > walletState.balance) {
    throw new Error('Insufficient balance');
  }
  
  // Simulate transaction processing
  return new Promise((resolve) => {
    // Generate simulated transaction hash
    const txHash = Array.from(
      { length: 64 },
      () => Math.floor(Math.random() * 16).toString(16)
    ).join('');
    
    // Update balance
    walletState.balance -= amount;
    safeLocalStorage.setItem('walletState', JSON.stringify(walletState));
    
    // Simulate network delay
    setTimeout(() => {
      resolve(txHash);
    }, 1000);
  });
};

export const signTransaction = async (): Promise<string> => {
  if (!walletState.connected) {
    throw new Error('Wallet not connected');
  }
  
  // Generate simulated signature
  const signature = Array.from(
    { length: 64 },
    () => Math.floor(Math.random() * 16).toString(16)
  ).join('');
  
  return signature;
};

export const signMessage = async (message: string): Promise<string> => {
  if (!walletState.connected) {
    throw new Error('Wallet not connected');
  }
  
  // Generate simulated signature for the message
  const signature = Array.from(
    { length: 64 },
    () => Math.floor(Math.random() * 16).toString(16)
  ).join('');
  
  return signature;
}; 