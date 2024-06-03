import React from 'react';
import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';

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
          return (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Day;
