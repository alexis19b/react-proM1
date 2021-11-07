import { useCounter } from '../hooks/useCounter';

const CounterHook = () => {
  
  const { counter, elementeToAnimate, handleClick } = useCounter({
    maxCount:15
  });

  return (
    <>
      <h1>Counter Hook: </h1>
      <h2 ref={elementeToAnimate}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterHook;
