import { useState } from "react";

export function MyButton({ text }) {

  let [counter, setCounter] = useState(0); // use * => Hook REACT

  function handleClick() {
    console.log('button clicked');
    setCounter(counter + 1);
  }

  return (
    <>
      <div>Click : {counter} times</div>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}