
import React from 'react';
import TaskList from '../TaskList';

const TasksSection = ({ tasks }) => (
  <section>
    <h2 className="text-2xl font-bold text-white mb-6">
      Tasks ({tasks.length})
    </h2>
    <TaskList tasks={tasks} />
  </section>
);

export default TasksSection;