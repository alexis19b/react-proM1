import { useState } from "react";

interface Props {
    initialValue?:number
}
interface CounterState {
    counter:number;
    clicks:number;
}

const CounterBy = ({initialValue= 5}: Props) => {

    const [{counter, clicks}, setCounter] =useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    });

    const handleClick = (value: number) => {
        setCounter(prev=>({
            counter: prev.counter + value,
            clicks: prev.clicks + 1
        }));
    }
    return (
        <>
           <h1>CounterBy: {counter}</h1> 
           <h1>Cliks: {clicks}</h1> 
           <button onClick={()=> handleClick(1)}>+1</button>
           <button onClick={()=>handleClick(5)}>+5</button>
        </>
    )
}

export default CounterBy;
