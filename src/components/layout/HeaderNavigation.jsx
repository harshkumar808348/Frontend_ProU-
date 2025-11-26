
import React from 'react';

const HeaderNavigation = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'users', label: 'Users' },
    { id: 'products', label: 'Products' },
    { id: 'tasks', label: 'Tasks' }
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-1 ml-8">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === item.id 
              ? 'bg-gray-800 text-white shadow-sm' 
              : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default HeaderNavigation;