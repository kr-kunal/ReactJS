import React, { useState, useEffect } from "react";
import { Btn } from "../StylesElement/Button";


function Counter() {
    const [countUp, setCountUp] = useState(0);
    const [countDown, setCountDown] = useState(50);

    useEffect(() => {
        console.log('useEffect Call');
    }, [countUp])

    return (
        <div className="container mt-4">
            <h2>Count Up : {countUp}</h2>
            <Btn
                className=""
                onClick={() => setCountUp(countUp + 1)}
            >
                Increment
            </Btn>
            <h2>Count Down : {countDown}</h2>
            <Btn varient="down"
                className=""
                onClick={() => setCountDown(countDown - 1)}
            >
                Decrement
            </Btn>

        </div>
    );
}

export default Counter;
