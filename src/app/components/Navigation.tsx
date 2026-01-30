import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Target, Map, FileText, MessageCircle, TrendingUp } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Home' },
    { path: '/skill-gap', icon: Target, label: 'Skills' },
    { path: '/roadmap', icon: Map, label: 'Roadmap' },
    { path: '/resume', icon: FileText, label: 'Resume' },
    { path: '/coach', icon: MessageCircle, label: 'Coach' },
    { path: '/progress', icon: TrendingUp, label: 'Progress' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-indigo-100 md:top-0 md:bottom-auto md:border-b md:border-t-0 z-50 shadow-sm">
      <div className="max-w-md mx-auto md:max-w-7xl">
        <div className="flex justify-around items-center px-4 py-3 md:py-4">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                location.pathname === path
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-500 hover:text-indigo-500 hover:bg-indigo-50/50'
              }`}
            >
              <Icon size={20} className="md:w-5 md:h-5" />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
