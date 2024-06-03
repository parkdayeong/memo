import React from 'react';
import dummy from '../db/data.json';

const Day = () => {
  const day = 1;
  const wordList = dummy.words.filter((word) => {
    return word.day === day;
  });
  // console.log(wordList);
  return (
    <>
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
