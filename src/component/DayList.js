import React from 'react';
import dummy from '../db/data.json';
import { Link } from 'react-router-dom';

const DayList = () => {
  console.log(dummy);
  return (
    <ul className='list_day'>
      {dummy.days.map((day) => {
        return (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DayList;
