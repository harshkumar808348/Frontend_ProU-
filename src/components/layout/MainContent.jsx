
import React from 'react';
import ContentControls from './ContentControls';
import ContentSections from './ContentSections';

const MainContent = ({ activeTab, searchTerm, onSearchChange, onTabChange, filteredData }) => {
  return (
    <main className="container mx-auto px-6 py-8">
      <ContentControls
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
      
      <ContentSections
        activeTab={activeTab}
        filteredData={filteredData}
      />
    </main>
  );
};

export default MainContent;