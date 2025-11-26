
import React from 'react';
import SearchBar from '../SearchBar';
import FilterTabs from '../FilterTabs';

const ContentControls = ({ searchTerm, onSearchChange, activeTab, onTabChange }) => (
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
    <SearchBar 
      searchTerm={searchTerm}
      onSearchChange={onSearchChange}
    />
    <FilterTabs 
      activeTab={activeTab}
      onTabChange={onTabChange}
    />
  </div>
);

export default ContentControls;