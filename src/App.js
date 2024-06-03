import React from 'react';
import Headers from './component/Header';

import DayList from './component/DayList';
import Day from './component/Day';

const App = () => {
  return (
    <div className='App'>
      <Headers />
      <DayList />
      <Day />
    </div>
  );
};

export default App;
