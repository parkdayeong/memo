import React, { useState } from 'react';

const Word = ({ word }) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    setIsDone(!isDone);
  }

  return (
    <tbody>
      <tr className={isDone ? 'off' : ''}>
        <td>
          <input type='checkbox' checked={isDone} onChange={toggleDone} />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <button onClick={toggleShow}>{isShow ? '숨기기' : '뜻보기'}</button>
          <button className='btn_del'>삭제</button>
        </td>
      </tr>
    </tbody>
  );
};

export default Word;
