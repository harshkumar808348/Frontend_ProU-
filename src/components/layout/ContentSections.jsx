
import React from 'react';
import UsersSection from '../sections/UsersSection';
import ProductsSection from '../sections/ProductsSection';
import TasksSection from '../sections/TasksSection';

const ContentSections = ({ activeTab, filteredData }) => (
  <div className="space-y-8">
    {activeTab === 'users' && <UsersSection users={filteredData.users} />}
    {activeTab === 'products' && <ProductsSection products={filteredData.products} />}
    {activeTab === 'tasks' && <TasksSection tasks={filteredData.tasks} />}
  </div>
);

export default ContentSections;