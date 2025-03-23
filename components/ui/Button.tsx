import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  isFullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      isFullWidth = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none';
    
    // Size styles
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };
    
    // Variant styles
    const variantStyles = {
      primary: 'bg-primary hover:bg-primary-dark text-white focus:ring-primary',
      secondary: 'bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary',
      outline: 'border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50 focus:ring-gray-500',
      ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500',
      link: 'bg-transparent underline text-primary hover:text-primary-dark p-0 focus:ring-0',
    };
    
    // Width styles
    const widthStyles = isFullWidth ? 'w-full' : '';
    
    // Loading state
    const loadingState = isLoading ? (
      <span className="absolute inset-0 flex items-center justify-center">
        <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </span>
    ) : null;
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          widthStyles,
          isLoading && 'relative text-transparent transition-none hover:text-transparent',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {leftIcon && <span className={cn('mr-2', isLoading && 'opacity-0')}>{leftIcon}</span>}
        <span className={isLoading ? 'opacity-0' : ''}>{children}</span>
        {rightIcon && <span className={cn('ml-2', isLoading && 'opacity-0')}>{rightIcon}</span>}
        {loadingState}
      </button>
    );
  }
); 