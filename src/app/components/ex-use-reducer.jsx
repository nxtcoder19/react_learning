"use client"
import { useReducer, useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2 className="text-black">Count: {count}</h2>
            <button className="text-black" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="text-black" onClick={() => setCount(count - 1)}>Increment</button>
        </div>
    )
}

const Reducer = () => {
    const initialCount = { count: 0 }

    const reducer = (state, action) => {
        switch (action.type) {
            case "increament":
                return { count: state.count + 1 }
            case "decrement":
                return { count: state.count - 1 }
            case "reset":
                return initialCount
            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer, initialCount)

    return (
        <div>
            <h2 className="text-black">Count: {count.count}</h2>
            <button className="text-black" onClick={() => dispatch({ type: "increament" })}>Increment</button>
            <button className="text-black" onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button className="text-black" onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export const ReducerComponent = () => {
    return (
        <div>
            <h1 className="text-black">Reducer Component</h1>
            <Count />
            <Reducer />
        </div>
    )
}

/*
useReducer is a React Hook that is used for managing complex state logic in components. 
It is an alternative to useState but is more suitable when state transitions depend on the previous state.
*/

