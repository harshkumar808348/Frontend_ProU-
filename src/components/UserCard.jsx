
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div className={`absolute bottom-1 right-1 w-3 h-3 rounded-full border-2 border-white ${
            user.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
          }`}></div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{user.name}</h3>
          <p className="text-blue-600 font-medium text-sm">{user.role}</p>
          <p className="text-gray-500 text-sm truncate">{user.email}</p>
          
          <div className="flex space-x-2 mt-3">
            <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Message
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors duration-200">
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;