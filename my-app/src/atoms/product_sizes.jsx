"use client";

import { useState } from "react";

const Sizes = () => {
    const [currentSize, setCurrentSize] = useState(null);

    const buttonClasses = (size) =>
        `${currentSize === size ? "bg-[#FF324D] text-white" : "bg-white text-[#687087] border-[#dedede]"} 
        w-[40px] h-[40px] border-2 shadow-md flex items-center justify-center text-sm`;

    return (
        <div className="flex gap-3 items-center pb-2">
            <p className="text-[#76818F]">Size</p>
            <button
                onClick={() => setCurrentSize("XS")}
                className={`${buttonClasses("XS")} text-[#76818F]`}>
                XS
            </button>
            <button
                onClick={() => setCurrentSize("S")}
                className={`${buttonClasses("S")} text-[#76818F]`}>
                S
            </button>
            <button
                onClick={() => setCurrentSize("M")}
                className={`${buttonClasses("M")} text-[#76818F]`}>
                M
            </button>
            <button
                onClick={() => setCurrentSize("L")}
                className={`${buttonClasses("L")} text-[#76818F]`}>
                L
            </button>
            <button
                onClick={() => setCurrentSize("XL")}
                className={`${buttonClasses("XL")} text-[#76818F]`}>
                XL
            </button>
        </div>
    );
};

export default Sizes;
