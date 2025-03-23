import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge classnames, combining clsx and tailwind-merge to solve Tailwind classname conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency value
 * @param value Value to format
 * @param currencyCode Currency code, default USD
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, currencyCode = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Format percentage
 * @param value Value to format, e.g., 0.15 represents 15%
 * @param minimumFractionDigits Minimum number of decimal places
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number, minimumFractionDigits = 2): string {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits,
    maximumFractionDigits: 2,
    signDisplay: 'auto',
  }).format(value);
}

/**
 * Truncate string
 * @param str String to truncate
 * @param length Target length
 * @returns Truncated string, with ellipsis at the end if too long
 */
export function truncateString(str: string, length = 15): string {
  if (str.length <= length) return str;
  return str.substring(0, length) + '...';
}

/**
 * Truncate wallet address
 * @param address Complete wallet address
 * @param startChars Number of characters to keep at the beginning
 * @param endChars Number of characters to keep at the end
 * @returns Truncated address
 */
export function truncateAddress(address: string, startChars = 4, endChars = 4): string {
  if (!address) return '';
  
  const start = address.slice(0, startChars);
  const end = address.slice(-endChars);
  
  return `${start}...${end}`;
}

/**
 * Format date
 * @param date Date object or timestamp string
 * @param options Formatting options
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
}

/**
 * Get relative time description (how long ago)
 * @param date Date object or timestamp string
 * @returns Relative time description
 */
export function getRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  
  // Define time intervals
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };
  
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  if (seconds < 0) {
    return 'in the future';
  }
  
  if (seconds < 30) {
    return 'just now';
  }
  
  let counter;
  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    counter = Math.floor(seconds / secondsInUnit);
    
    if (counter > 0) {
      return `${counter} ${unit}${counter === 1 ? '' : 's'} ago`;
    }
  }
  
  return 'just now';
}

/**
 * Debounces a function
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

/**
 * Generates a random ID
 */
export function generateId(length = 8): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return result;
}

/**
 * Calculates Sharpe Ratio
 * @param returns Array of percentage returns (e.g., 0.05 for 5%)
 * @param riskFreeRate Risk-free rate (e.g., 0.02 for 2%)
 * @returns Sharpe ratio value
 */
export function calculateSharpeRatio(returns: number[], riskFreeRate = 0.02): number {
  if (returns.length === 0) return 0;
  
  // Calculate average return
  const avgReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length;
  
  // Calculate standard deviation
  const squaredDiffs = returns.map(r => Math.pow(r - avgReturn, 2));
  const variance = squaredDiffs.reduce((sum, sq) => sum + sq, 0) / returns.length;
  const stdDev = Math.sqrt(variance);
  
  // Calculate Sharpe ratio
  return stdDev === 0 ? 0 : (avgReturn - riskFreeRate) / stdDev;
}

/**
 * Calculates maximum drawdown
 * @param values Array of portfolio values
 * @returns Maximum drawdown as a decimal
 */
export function calculateMaxDrawdown(values: number[]): number {
  if (values.length < 2) return 0;
  
  let maxDrawdown = 0;
  let peak = values[0];
  
  for (let i = 1; i < values.length; i++) {
    if (values[i] > peak) {
      peak = values[i];
    } else {
      const drawdown = (peak - values[i]) / peak;
      maxDrawdown = Math.max(maxDrawdown, drawdown);
    }
  }
  
  return maxDrawdown;
}

/**
 * Calculates Compound Annual Growth Rate (CAGR)
 * @param startValue Initial investment
 * @param endValue Final value
 * @param years Number of years
 * @returns CAGR as a decimal
 */
export function calculateCAGR(startValue: number, endValue: number, years: number): number {
  if (startValue <= 0 || years <= 0) return 0;
  return Math.pow(endValue / startValue, 1 / years) - 1;
}

/**
 * Calculates portfolio volatility
 * @param returns Array of period returns
 * @param periodsPerYear Number of periods in a year (e.g., 252 for daily)
 * @returns Annualized volatility
 */
export function calculateVolatility(returns: number[], periodsPerYear = 252): number {
  if (returns.length < 2) return 0;
  
  // Calculate average return
  const avgReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length;
  
  // Calculate variance
  const variance = returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length;
  
  // Calculate standard deviation and annualize
  return Math.sqrt(variance) * Math.sqrt(periodsPerYear);
}

/**
 * Converts token amount to USD value
 * @param amount Token amount
 * @param price Token price in USD
 * @param decimals Token decimals
 * @returns USD value
 */
export function tokenToUSD(amount: number, price: number, decimals = 9): number {
  return amount * price / Math.pow(10, decimals);
}

/**
 * Converts USD value to token amount
 * @param usdValue USD value
 * @param price Token price in USD
 * @param decimals Token decimals
 * @returns Token amount
 */
export function usdToToken(usdValue: number, price: number, decimals = 9): number {
  if (price <= 0) return 0;
  return (usdValue * Math.pow(10, decimals)) / price;
}

/**
 * Deep clones an object
 * @param obj Object to clone
 * @returns Cloned object
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Throttles a function
 * @param func Function to throttle
 * @param limit Limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number = 0;
  
  return function(...args: Parameters<T>) {
    const context = this;
    const now = Date.now();
    
    if (now - lastRan >= limit) {
      func.apply(context, args);
      lastRan = now;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        func.apply(context, args);
        lastRan = Date.now();
      }, limit - (now - lastRan));
    }
  };
}

/**
 * Calculates optimal portfolio allocation based on risk profile
 * @param riskProfile Risk profile string
 * @returns Object containing asset allocations
 */
export function getOptimalAllocation(riskProfile: string): Record<string, number> {
  const allocations = {
    veryLow: {
      stablecoin: 0.70,
      bluechip: 0.25,
      altcoin: 0.05,
      defi: 0.00,
    },
    low: {
      stablecoin: 0.50,
      bluechip: 0.35,
      altcoin: 0.10,
      defi: 0.05,
    },
    medium: {
      stablecoin: 0.30,
      bluechip: 0.40,
      altcoin: 0.20,
      defi: 0.10,
    },
    high: {
      stablecoin: 0.15,
      bluechip: 0.35,
      altcoin: 0.30,
      defi: 0.20,
    },
    veryHigh: {
      stablecoin: 0.05,
      bluechip: 0.20,
      altcoin: 0.45,
      defi: 0.30,
    },
  };
  
  return allocations[riskProfile as keyof typeof allocations] || allocations.medium;
}

/**
 * Calculate portfolio diversification score
 * @param allocations Object containing asset allocations
 * @returns Diversification score (0-100)
 */
export function calculateDiversificationScore(allocations: Record<string, number>): number {
  if (!allocations || Object.keys(allocations).length === 0) return 0;
  
  // Calculate Herfindahl-Hirschman Index (HHI)
  const hhi = Object.values(allocations).reduce((sum, allocation) => sum + Math.pow(allocation, 2), 0);
  
  // Normalize to 0-100 scale (where 0 is completely concentrated, 100 is perfectly diversified)
  const n = Object.keys(allocations).length;
  const normalizedHHI = (1 - hhi) / (1 - 1/n);
  
  return Math.round(normalizedHHI * 100);
}

/**
 * Check if the browser supports Web3
 * @returns Boolean indicating browser Web3 support
 */
export function isWeb3Supported(): boolean {
  return typeof window !== 'undefined' && 
         typeof window.ethereum !== 'undefined';
} 