"use client"

import { useEffect, useRef, useState } from "react"

const Counter = ({endVal, incVal, speed}) => {

    const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const counterFunction = () => {
    if (isVisible && count < endVal) {
        const interval = setInterval(() => {
          setCount((prevCount) => {
            if (prevCount >= endVal) {
              clearInterval(interval);
              return prevCount;
            }
            return prevCount + incVal; // Increment value, adjust speed as needed
          });
        }, speed); // Speed of the counter
  
        return () => clearInterval(interval);
      }
  }

  // Visibility check using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Counter function that runs only when the section is visible
  useEffect(() => {
    counterFunction()
  }, [isVisible, count]);

  return (
        <div ref={counterRef}>
            <h1 
                className="`text-5xl text-white normal-nums"
            >{count}+</h1>
        </div>
  )
}

export default Counter