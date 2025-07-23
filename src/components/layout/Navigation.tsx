'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trackSocialMedia } from '@/lib/analytics';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'PAINTINGS', href: '/paintings' },
  { name: 'TATTOO', href: '/tattoo' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'ABOUT', href: '/about' },
  { name: 'INSTAGRAM', href: 'https://www.instagram.com/volkov.scvt', external: true },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-neutral-900 hover:text-neutral-600 transition-colors">
            <Image
              src="/images/volkov-profile.png"
              alt="Andrii Volkov"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <span>ANDRII VOLKOV</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium"
                  onClick={() => trackSocialMedia('Instagram')}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors text-sm font-medium"
                  onClick={() => {
                    setIsOpen(false);
                    trackSocialMedia('Instagram');
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}