import React from 'react';
import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';

const Day = () => {
  const day = useParams().day;
  const wordList = dummy.words.filter((word) => {
    return word.day === Number(day);
  });

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        {wordList.map((word) => {
          return <Word word={word} key={word.id} />;
        })}
      </table>
    </>
  );
};

export default Day;
