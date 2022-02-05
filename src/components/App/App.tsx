import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Preview from '../Preview/Preview';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/GetShop.TV' element={<Preview />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;