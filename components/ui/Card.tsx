'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from '@/types';

export function Card({
  className,
  bordered = true,
  elevated = false,
  padding = 'md',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl overflow-hidden',
        bordered && 'border border-gray-200',
        elevated && 'shadow-card',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  title,
  subtitle,
  action,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={cn(
        'px-6 py-4 border-b border-gray-100',
        className
      )}
      {...props}
    >
      {children || (
        <>
          <div className="flex items-start justify-between">
            <div>
              {title && (
                <h3 className="text-xl font-semibold text-text-primary">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="mt-1 text-sm text-text-secondary">
                  {subtitle}
                </p>
              )}
            </div>
            {action && (
              <div className="ml-4">{action}</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: CardContentProps) {
  return (
    <div
      className={cn(
        'px-6 py-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: CardFooterProps) {
  return (
    <div
      className={cn(
        'px-6 py-4 border-t border-gray-100 bg-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 