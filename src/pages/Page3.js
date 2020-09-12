import React from 'react';
import ChangeColor from './components/ChangeColor';

export default function Page3() {
  return (
    <>
      <h2>Example 1</h2>
      <ChangeColor inputObject={{str: "sample string1"}}/>
    </>
  );
}