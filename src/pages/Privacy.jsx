import React from 'react';
import Card from '../components/Card';

const Privacy = () => {
  return (
    <div className="space-y-8">
      <Card>
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-2xl font-semibold mb-3">Data Collection</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This application stores your tasks locally in your browser's localStorage. 
            No data is sent to any external servers except when fetching posts from the 
            JSONPlaceholder API for demonstration purposes.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Data Usage</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your task data is used solely for the purpose of providing the task management 
            functionality. We do not share or sell your data to third parties.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This application uses cookies only for essential functionality, such as 
            maintaining your dark/light mode preference.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Privacy; 