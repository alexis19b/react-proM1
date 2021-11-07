import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from "gsap";

export const useCounter = ({maxCount=10}) => {

    const [counter, setCounter] = useState(5);
    const elementeToAnimate = useRef<HTMLHeadingElement>(null);
    const tl = useRef(gsap.timeline());
  
    const handleClick = () => {
      setCounter((prev) => Math.min(prev + 1, maxCount));
    };

    useLayoutEffect(() => {
       
        if(!elementeToAnimate.current) return;
        tl.current.to(elementeToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" })
        .to(elementeToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out'})
        .pause();
        
    }, [])
  
    useEffect(() => {
      tl.current.play(0);     
    }, [counter]);

    return{
        elementeToAnimate,
        handleClick,
        counter,
    }

}