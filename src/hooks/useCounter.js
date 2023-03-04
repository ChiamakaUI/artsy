import { useState } from "react";
const useCounter = (intialCount = 1) => {
  const [count, setCount] = useState(intialCount);

  const decreaseCount = () => {
    if (count === 1) return;
    setCount((prev) => prev - 1);
  };

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  return { count, increaseCount, decreaseCount };
};

export default useCounter;
