import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Word from './Word';

const Day = () => {
  const day = useParams().day;

  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setWords(data);
      });
  }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        {words.map((word) => {
          return <Word word={word} key={word.id} />;
        })}
      </table>
    </>
  );
};

export default Day;
