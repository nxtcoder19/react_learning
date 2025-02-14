"use client";
import { useMemo, useState } from "react";

const slowFunction = (num) => {
    console.log("Running slow function...");
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;
};

const WithoutUseMemo = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(2);

    const computedValue = slowFunction(number);

    return (
        <div>
            <h2 className="text-black">Computed Value: {computedValue}</h2>
            <button className="bg-black text-white px-4 py-2 rounded" onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
        </div>
    );
};

const WithUseMemo = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(2);

    // Memoizing the expensive computation
    const computedValue = useMemo(() => slowFunction(number), [number]);

    return (
        <div>
            <h2 className="text-black">Computed Value: {computedValue}</h2>
            <button className="bg-black text-white px-4 py-2 rounded" onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
        </div>
    );
};

export const MemoComponent = () => {
    return (
        <div>
            <h1>Memo Component</h1>
            {/* <WithoutUseMemo /> */}
            <WithUseMemo />
        </div>
    );
};

/*
useMemo is a React Hook that memoizes the result of a computation and only recalculates 
it when its dependencies change. It helps in optimizing performance by preventing unnecessary recalculations.
*/