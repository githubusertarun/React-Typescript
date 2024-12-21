import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQPage from './components/FAQPage';
import FAQList from './components/FAQList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FAQPage />} />
        <Route path="/faq" element={<FAQList />} />
      </Routes>
    </Router>
  );
};

export default App;
