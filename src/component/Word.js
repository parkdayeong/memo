import React, { useState } from 'react';

const Word = (props) => {
  const [word, setWord] = useState(props.word);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm('삭제 하시겠습니까?')) {
      console.log('삭제진행');
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }

  if (word.id === 0) {
    return null;
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
          <button onClick={del} className='btn_del'>
            삭제
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Word;
