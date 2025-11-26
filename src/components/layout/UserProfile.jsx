// components/layout/UserProfile.jsx
import React from 'react';

const UserProfile = () => (
  <div className="flex items-center space-x-3 pl-2 border-l border-gray-800">
    <div className="text-right hidden sm:block">
      <div className="text-sm font-medium text-white">ProU </div>
      <div className="text-xs text-gray-400">Administrator</div>
    </div>
    <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center border border-gray-700 shadow-sm">
      <span className="text-sm font-medium text-gray-300">PU</span>
    </div>
  </div>
);

export default UserProfile;