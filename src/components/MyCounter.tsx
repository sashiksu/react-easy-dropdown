import React, { useState } from "react";

type Props = {
  value?: number;
};

const MyCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  const onMinus = () => {
    setCounter((prev) => prev - 1);
  };

  const onPlus = () => {
    setCounter((prev) => prev + 1);
  };
  const isYellow = 1;
  return (
    <>
      <h1 style={{ backgroundColor: isYellow ? "aqua" : "blue" }}>Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </>
  );
};

export default MyCounter;
