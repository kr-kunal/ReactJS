import React, { useState, useEffect } from "react";

function Counter() {
    const [countUp, setCountUp] = useState(0);
    const [countDown, setCountDown] = useState(50);

    useEffect(() =>{
        console.log('useEffect Call');
    }, [countUp])

    return (
        <div className="container mt-4">
            <h2>Count Up : {countUp}</h2>
            <button
                className="btn btn-md btn-primary mt-3"
                onClick={() => setCountUp( countUp + 1)}
            >
                Increment
            </button>
            <h2>Count Down : {countDown}</h2>
            <button
                className="btn btn-md btn-primary mt-3"
                onClick={() => setCountDown(countDown - 1)}
            >
                Decrement
            </button>
        </div>
    );
}

export default Counter;
