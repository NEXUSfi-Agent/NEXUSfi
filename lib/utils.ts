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