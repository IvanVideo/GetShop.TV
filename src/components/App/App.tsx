import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Preview from '../Preview/Preview';
import Page1 from '../Page1/Page1';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Preview />} />
        <Route path='/page1' element={<Page1 />} />
      </Routes>
    </div>
  );
}

export default App;
