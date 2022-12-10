import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prevState) => prevState + 1);

  const decrement = () => setCount((prevState) => prevState - 1);

  return {
    count,
    increment,
    decrement,
    setCount,
  };
};

export default useCounter;
