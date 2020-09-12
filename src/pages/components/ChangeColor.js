import React, { useState } from 'react';
import TextComponent from './TextComponent';
import TextComponent2 from './TextComponent2';
import TextComponent3 from './TextComponent3';

const inputObject = {str: "sample string2"};
export default function ChangeColor(props) {
  const [dark, setDark] = useState(false);
  const themeStyle = {
    backgroundColor: dark ? 'grey' : 'white'
  };

  return (
    <>
      <button onClick={() => setDark(prev => !prev)}> Change Background </button>
      <div style={themeStyle}>
        <TextComponent inputObject={props.inputObject} />
        <TextComponent2 inputObject={inputObject} />
        <TextComponent3 inputObject={{str: "sample string3"}}/>
      </div>
    </>
  );
}