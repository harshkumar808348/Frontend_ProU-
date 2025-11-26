
import React from 'react';
import UserCard from '../UserCard';

const UsersSection = ({ users }) => (
  <section>
    <h2 className="text-2xl font-bold text-white mb-6">
      Team Members ({users.length})
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  </section>
);

export default UsersSection;