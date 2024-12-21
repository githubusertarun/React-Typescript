import React, { useState } from 'react';
import { FAQ } from '../types/type';
import FAQItem from './FAQItem';
import { highlightText } from '../utils/HighlightText';
import faqData from '../data/faqData.json'; // Update the path if necessary

const FAQList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // TypeScript knows faqData is an array of FAQs
  const faqs: FAQ[] = faqData;

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-3xl bg-white p-6 mt-8 shadow-md rounded-lg mx-auto">
      {/* Search Bar */}
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search what you're looking for..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FAQ List */}
      <div>
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              searchTerm={searchTerm} 
              highlightText={highlightText} 
            />
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">No match found</p>
        )}
      </div>
    </div>
  );
};

export default FAQList;
