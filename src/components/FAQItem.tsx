import React, { useState, useEffect } from 'react';
import { FAQ } from '../types/type';

interface FAQItemProps {
  faq: FAQ;
  searchTerm: string;
  highlightText: (text: string, searchTerm: string) => React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, searchTerm, highlightText }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Automatically expand if searchTerm matches the answer
    if (searchTerm && faq.answer.toLowerCase().includes(searchTerm.toLowerCase())) {
      setExpanded(true);
    } else {
      // Collapse when searchTerm is cleared
      setExpanded(false);
    }
  }, [searchTerm, faq.answer]);

  return (
    <div className="border-b py-3">
      {/* Clickable question section */}
      <div
        className="flex justify-between items-center cursor-pointer hover:bg-gray-100"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Highlighted question */}
        <p className="text-lg font-medium">{highlightText(faq.question, searchTerm)}</p>
        <button
          className="text-blue-500 font-bold text-xl focus:outline-none"
          aria-label={expanded ? 'Collapse answer' : 'Expand answer'}
        >
          {expanded ? '-' : '+'}
        </button>
      </div>

      {/* Conditionally rendered answer */}
      {expanded && (
        <div className="mt-2 text-gray-700">
          <p>{highlightText(faq.answer, searchTerm)}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
