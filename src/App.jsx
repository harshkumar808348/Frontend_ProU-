
import React, { useState, useEffect } from 'react';
import { useData } from './hooks/useData';
import Header from './components/layout/Header';
import MainContent from './components/layout/MainContent';
import LoadingSpinner from './components/ui/LoadingSpinner';

function App() {
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, filteredData } = useData(searchTerm);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        userCount={filteredData.users.length}
      />
      
      <MainContent
        activeTab={activeTab}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onTabChange={setActiveTab}
        filteredData={filteredData}
      />
    </div>
  );
}

export default App;