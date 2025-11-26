
import { useState, useEffect, useMemo } from 'react';
import mockData from '../Data/mockData.json';

export const useData = (searchTerm) => {
  const [data, setData] = useState(mockData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredData = useMemo(() => {
    const filterItems = (items, fields) => {
      return items.filter(item => 
        fields.some(field => 
          item[field]?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    };

    return {
      users: filterItems(data.users, ['name', 'role']),
      products: filterItems(data.products, ['name', 'category']),
      tasks: filterItems(data.tasks, ['title', 'assignee'])
    };
  }, [data, searchTerm]);

  return { data, loading, filteredData };
};