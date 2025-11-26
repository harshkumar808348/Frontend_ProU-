
import React from 'react';

const QuickStats = ({ userCount }) => (
  <div className="hidden xl:flex items-center space-x-6">
    <div className="text-right">
      <div className="text-sm text-gray-400">Online</div>
      <div className="text-white font-semibold flex items-center">
        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
        24/7
      </div>
    </div>
    <div className="h-6 w-px bg-gray-700"></div>
    <div className="text-right">
      <div className="text-sm text-gray-400">Users</div>
      <div className="text-white font-semibold">{userCount}</div>
    </div>
  </div>
);

export default QuickStats;