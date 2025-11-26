import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => (
  <div className="relative flex-1 max-w-md">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full pl-4 pr-10 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
    />
    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      🔍
    </div>
  </div>
);

export default SearchBar;