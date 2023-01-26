import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random title')

  const handleClick = () => {
    return (text === 'random title' ? setText('hello world') : setText('random title'))
  }
  return (
    <>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>Change Title</button>
    </>
  );
};

export default UseStateBasics;
