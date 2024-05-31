import Day from './component/Day';
import DayList from './component/DayList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import useFetch from './hooks/useFetch';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />
          <Route element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
