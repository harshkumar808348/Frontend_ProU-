
import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNavigation from './HeaderNavigation';
import HeaderActions from './HeaderActions';

const Header = ({ activeTab, onTabChange, userCount }) => {
  return (
    <header className="bg-black border-b border-gray-800 backdrop-blur-sm bg-black/95">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <HeaderLogo />
            <HeaderNavigation 
              activeTab={activeTab} 
              onTabChange={onTabChange} 
            />
          </div>
          
          <HeaderActions userCount={userCount} />
        </div>
      </div>
    </header>
  );
};

export default Header;