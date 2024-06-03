import React from 'react';
import Headers from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Headers />
        <Routes>
          <Route path='/' element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />
          <Route path='*' element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
