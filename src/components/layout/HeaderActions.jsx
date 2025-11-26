
import React from 'react';
import QuickStats from './QuickStats';
import ActionButtons from './ActionButtons';
import UserProfile from './UserProfile';

const HeaderActions = ({ userCount }) => {
  return (
    <div className="flex items-center space-x-4">
      <QuickStats userCount={userCount} />
      <ActionButtons />
      <UserProfile />
    </div>
  );
};

export default HeaderActions;