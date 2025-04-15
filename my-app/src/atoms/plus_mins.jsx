"use client";
import React, { useState } from 'react';

const Plus_mins = () => {
    const [counter, setCounter] = useState(1);

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const decrement = () => {
        setCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : 1));
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setCounter(value);
        }
    };

    
    return (
        <div className="bg-white flex gap-5 items-center justify-center">
            <button onClick={decrement} className="text-black bg-[#b1b5be] h-8 w-8 rounded-full">-</button>
            <input
                type="text"
                className="text-black border text-center"
                value={counter}
                readOnly=""
                size={counter.toString().length}
                onChange={handleChange} 
            />
            <button onClick={increment} className="text-black bg-[#989da3] h-8 w-8 rounded-full">+</button>
        </div>
    );
};

export default Plus_mins;
