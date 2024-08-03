import { useState } from 'react';

const useCount = () => {
  const [count, setCount] = useState(0);

  const e = () => {
    setCount(next => next + 1);
  }

  return { count, e };
}

export default useCount;
