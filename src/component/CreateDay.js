import React from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const CreateDay = () => {
  const days = useFetch('http://localhost:3001/days');
  // console.log(days);
  const history = useNavigate();

  function addDay(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/days/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        alert('생성이 완료되었습니다.');
        // window.location.href = `http://localhost:3000/day/${dayRef.current.value}`;
        history(`/`);
      }
    });
  }
  return (
    <div>
      <h3>현재일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
};

export default CreateDay;
