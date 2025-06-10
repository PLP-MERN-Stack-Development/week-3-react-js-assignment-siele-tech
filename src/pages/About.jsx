import React from 'react';
import Card from '../components/Card';

const About = () => {
  return (
    <div className="space-y-8">
      <Card>
        <h1 className="text-3xl font-bold mb-4">About This Project</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This project was created as part of the PLP MERN Stack Development course, specifically for Week 3's
          React.js and Tailwind CSS assignment. It demonstrates various React concepts and modern web development
          practices.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6">
          <li>React.js for building the user interface</li>
          <li>Tailwind CSS for styling</li>
          <li>React Router for navigation</li>
          <li>Local Storage for data persistence</li>
          <li>JSONPlaceholder API for data fetching</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Task management with CRUD operations</li>
          <li>Dark/Light mode theme switching</li>
          <li>Responsive design for all devices</li>
          <li>API integration with loading states</li>
          <li>Search functionality</li>
          <li>Pagination for API data</li>
        </ul>
      </Card>
    </div>
  );
};

export default About; 