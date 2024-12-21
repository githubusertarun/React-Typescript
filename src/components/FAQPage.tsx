import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FAQList from './FAQList';

const FAQPage: React.FC = () => {
  const [showFAQs, setShowFAQs] = useState(false);
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleButtonClick = () => {
    setShowFAQs(true);
    navigate('/faq'); // Navigates to '/faq' route
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 justify-center">
      {/* Landing Section */}
      <h1 className="text-3xl font-bold mb-6">Learn More About Test Maker</h1>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        onClick={handleButtonClick}
      >
        Learn more about the test maker
      </button>

      {/* FAQ Section */}
      {showFAQs && <FAQList />}
    </div>
  );
};

export default FAQPage