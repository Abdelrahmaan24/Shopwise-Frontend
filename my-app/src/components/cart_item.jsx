import Plus_mins from '@/atoms/plus_mins';
import React from 'react'

const Cart_item = () => {
    return (
        <div class ="flex w-[1120px] h-[127px] border-b items-center">
            <div>
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" class="pl-10 w-[110px] h-[115px]"/>
            </div>
            <p class ="text-black pl-[90px]">Blue Dress For Woman</p>
            <p class ="text-black font-semibold pl-[180px] pr-[70px]">$45.00</p>
            <div class ="">
                <Plus_mins />
            </div>
            <p class ="text-black font-semibold pl-[65px] pr-[85px]">$90.00</p>
            <div class = "w-[30px] h-[30px] hover:text-white hover:bg-[#FF324D] hover:rounded-full flex items-center justify-center">
                <button class ="">
                    <svg width="20" aria-hidden="true" fill="none" class ="size-3 hover:text-white" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="0" x2="20" y2="20" stroke="black" stroke-width="2"/>
                        <line x1="0" y1="20" x2="20" y2="0" stroke="black" stroke-width="2"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Cart_item
