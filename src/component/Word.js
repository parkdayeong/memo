import React, { useState } from 'react';

const Word = ({ word }) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type='checkbox' checked={isDone} onChange={toggleDone}></input>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻{!isShow ? '보기' : '숨기기'}</button>
        <button className='btn_del'>삭제</button>
      </td>
    </tr>
  );
};

export default Word;