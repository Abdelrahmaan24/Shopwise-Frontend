import React from 'react'

const Footer_login = () => {
    return (
        <div class ="bg-[#FF324D] w-full h-[150px] flex items-center justify-around">
            <h1 class ="text-[#ffffff] font-bold text-[28px]">Subscribe Our Newsletter</h1>
            <div class ="flex">
                <input placeholder='Enter Email Address' class= "px-4 outline-none border-none text-[#000000] w-[395px] h-[50px] bg-[#ffffff]"></input>
                <a href="#" class ="hover:outline w-[150px] h-[50px] bg-[#212529] flex items-center justify-center hover:bg-[#424649] transition-all duration-300">Subscribe</a>
            </div>
        </div>
    )
}

export default Footer_login
