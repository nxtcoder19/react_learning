"use client"
import { useRef, useState } from "react";

const ControlledComponent = () => {
    const [text, setText] = useState("");

    return (
        <div>
            <input className="text-black"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p className="text-black">Entered text: {text}</p>
        </div>
    )
}

const UnControlledComponent = () => {
    const inputRef = useRef(null)

    const handleSubmit = () => {
        alert(`Entered Text: ${inputRef.current.value}`)
    }

    return (
        <div>
            <input className="text-black" type="text" ref={inputRef} /> {/* DOM manages the value */}
            <button className="text-black" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export const ControlledAndUnControlledComponent = () => {
    return (
        <div>
            {/* <ControlledComponent /> */}
            <UnControlledComponent />
        </div>
    )
}

/*
In React, form elements (like <input>, <textarea>, and <select>) can be handled in two ways:

Controlled Components (React fully manages state)
Uncontrolled Components (DOM manages state)


*/