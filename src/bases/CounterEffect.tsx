import { useState, useEffect } from "react";

const MAXIMUN_COUNT = 10;

const CounterEffect = () => {

    const [counter, setCounter] =useState(8);

    const handleClick = () => {
        
        setCounter(prev=> Math.min( prev + 1, MAXIMUN_COUNT ) );
        
    }

    useEffect(() => {
     if(counter < 10 )return;
     console.log("valor maximo");
     
    }, [counter])

    return (
        <>
           <h1>CounterEffect: {counter}</h1> 
           <button onClick={handleClick}>+1</button>
        </>
    )
}

export default CounterEffect;
