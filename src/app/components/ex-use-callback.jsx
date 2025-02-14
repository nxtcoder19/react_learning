"use client"
import { useCallback, useState } from "react";

// const { useCallback } = require("react");

const ChildComponent = ({ onClick }) => {
    console.log("Child rendered!");
    return <button className="text-black" onClick={onClick}>Click Me</button>;
};

const WithoutUseCallback = () => {
    const [count, setCount] = useState(0);

    // This function is recreated on every render
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div>
            <h2 className="text-black">Count: {count}</h2>
            <button className="text-black" onClick={() => setCount(count + 1)}>Increment</button>
            <ChildComponent onClick={handleClick} />
        </div>
    );
};

const WithUseCallback = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button clicked!");
    }, [])

    return (
        <div>
            <h2 className="text-black">Count: {count}</h2>
            <button className="text-black" onClick={() => setCount(count + 1)}>Increment</button>
            <ChildComponent onClick={handleClick} />
        </div>
    );
}

export const CallbackComponent = () => {
    return (
        <div>
            <h1 className="text-black">Callback Component</h1>
            {/* <WithoutUseCallback /> */}
            <WithUseCallback />
        </div>
    );
};

/*
useCallback is a React Hook that memoizes a function, preventing it from being recreated on every render.
It helps optimize performance by ensuring functions are not unnecessarily redefined.
*/