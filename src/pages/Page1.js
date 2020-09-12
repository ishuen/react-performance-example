import React, { useState } from 'react';

export default function Page1() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);
  const addOne = heavyAddFunction(num);
  const themeStyle = {
    backgroundColor: dark ? 'grey' : 'white'
  }
  function heavyAddFunction(num) {
    for (let i = 0; i < 1000000000; i++){}
    return num + 1; 
  }
  return (
    <>
      <h2>Slow Example 2</h2>
      <input
        type="number"
        value={num}
        onChange={e => setNum(parseInt(e.target.value))} />
      <button onClick={() => setDark(prev => !prev)}> Change Background </button>
      <div style={themeStyle}> + 1 = {addOne} </div>
    </>
  );
}