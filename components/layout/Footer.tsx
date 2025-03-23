import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
  variant?: 'default' | 'minimal';
}

export function Footer({ className, variant = 'default' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  if (variant === 'minimal') {
    return (
      <footer className={cn("bg-gray-900 text-white py-6", className)}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src="/logo.svg" alt="NEXUSfi" width={24} height={24} />
              <span className="ml-2 text-sm font-bold">NEXUSfi</span>
            </div>
            <p className="text-gray-400 text-xs">
              &copy; {currentYear} NEXUSfi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  return (
    <footer className={cn("bg-gray-900 text-white py-12", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/logo.svg" alt="NEXUSfi" width={40} height={40} />
              <span className="ml-2 text-xl font-bold">NEXUSfi</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-driven decentralized investment platform for the next generation of Solana investors.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/NEXUSfi_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="https://github.com/NEXUSfi-Agent" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href="/strategies" className="text-gray-400 hover:text-white">Investment Strategies</Link>
              </li>
              <li>
                <Link href="/analytics" className="text-gray-400 hover:text-white">Analytics</Link>
              </li>
              <li>
                <Link href="/staking" className="text-gray-400 hover:text-white">Staking</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white">Documentation</Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-400 hover:text-white">API</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-white">Community</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white">Team</Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-400 hover:text-white">Investor Relations</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} NEXUSfi. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
            <Link href="/security" className="text-gray-400 hover:text-white text-sm">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 