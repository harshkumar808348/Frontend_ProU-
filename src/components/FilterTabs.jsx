import React from 'react';

const FilterTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'products', label: 'Products', icon: '🛍️' },
    { id: 'tasks', label: 'Tasks', icon: '✅' }
  ];

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 p-1 inline-flex">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
            activeTab === tab.id 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          <span>{tab.icon}</span>
          <span className="font-medium">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;