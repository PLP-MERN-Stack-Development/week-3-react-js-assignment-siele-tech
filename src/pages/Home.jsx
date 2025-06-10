import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="space-y-8">
      <Card>
        <h1 className="text-3xl font-bold mb-4">Welcome to PLP Task Manager</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A modern task management application built with React and Tailwind CSS. This project demonstrates
          the implementation of various React concepts and best practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Task Management</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create, complete, and organize your tasks with ease. Features include task filtering,
              local storage persistence, and a clean interface.
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">API Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore posts from JSONPlaceholder API with search functionality and pagination.
              Demonstrates proper API integration and data handling.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home; 