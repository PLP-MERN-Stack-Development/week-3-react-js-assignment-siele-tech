import React from 'react';
import Card from '../components/Card';

const Terms = () => {
  return (
    <div className="space-y-8">
      <Card>
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            By accessing and using this application, you accept and agree to be bound by the 
            terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Use License</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This is a demonstration project created for educational purposes. You may use 
            this application for learning and testing purposes only.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Disclaimer</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This application is provided "as is" without any warranties, expressed or implied. 
            We make no representations or warranties of any kind, express or implied, about the 
            completeness, accuracy, reliability, suitability or availability of the application.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Terms; 