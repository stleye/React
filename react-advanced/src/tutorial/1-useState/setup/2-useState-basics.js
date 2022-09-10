import React, { useState } from 'react';

// useState is a function that we get from react.
// once we invoke the function we would need to pass a default value, wathever we want (string, boolean, etc)
// once we invoke it we get an array with 2 values, we use array destructuring were we get that particular value and 
// a function that controls that value, and each and every time we invoke that function, whatever value we pass in
// now will be that new state value

const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world')
    } else {
      setText('random title')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
