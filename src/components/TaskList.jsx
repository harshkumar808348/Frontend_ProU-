import React from 'react';

const TaskList = ({ tasks }) => (
  <div className="space-y-4">
    {tasks.map(task => (
      <div key={task.id} className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-6 hover:border-gray-700 transition-colors">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white">{task.title}</h4>
            <p className="text-gray-400 text-sm">Assigned to: {task.assignee}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              task.status === 'completed' ? 'bg-green-900 text-green-300' :
              task.status === 'in-progress' ? 'bg-yellow-900 text-yellow-300' :
              'bg-gray-800 text-gray-300'
            }`}>
              {task.status}
            </span>
            <span className="text-gray-400 text-sm">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </span>
          </div>
          
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
              Edit
            </button>
            <button className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg hover:bg-gray-700 transition-colors">
              View
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default TaskList;