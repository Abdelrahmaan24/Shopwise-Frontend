import React from 'react'

const Cart_checkout = () => {
    return (
        <div class ="h-[461px] bg-white w-full flex justify-center">
            <div class ="w-[1120px] flex flex-col ">
                <p class = "Cart_svg relative ml-[560px] pb-[50px]">
                    <svg class="w-8 h-8 text-[#D9D9D9] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                    </svg>  
                </p>
                <div class= "flex pl-[20px] gap-5">
                    <div class= "flex flex-col gap-5">
                        <p class ="text-black font-bold text-[14px]">Calculate Shipping</p>
                        <input
                            placeholder='Choose a option...'
                            className="text-[#000000] px-4 outline-none w-[530px] border py-3 rounded-md input-field"
                            type="text"
                        />
                        <input
                            placeholder='State / Country'
                            className="text-[#000000] px-4 outline-none w-[270px] border py-3 rounded-md input-field"
                            type="text"
                        />
                        <input
                            placeholder='PostCode / ZIP'
                            className="text-[#000000] px-4 outline-none w-[270px] border py-3 rounded-md input-field"
                            type="text"
                        />
                        <a className='button_five text-[#ffffff] bg-[#FFffff] flex items-center justify-center overflow-hidden border rounded-md border-[#333333] w-[182px] h-[50px]'>
                            Update Totals
                        </a>                    
                    </div>
                    <div class ="w-[544px] h-[270px] border flex flex-col pt-[30px] pl-[22px] gap-3">
                        <p class ="text-black font-bold">cart total</p>
                        <div class= "flex w-[500px] pb-[5px] gap-[150px] pt-[10px] border-b">
                            <p class= "text-black">Cart Subtotal</p>
                            <p class= "text-black">$349.00</p>
                        </div>
                        <div class= "flex w-[500px] pb-[5px] gap-[185px] border-b">
                            <p class= "text-black">Shipping</p>
                            <p class= "text-black">Free Shipping</p>
                        </div>
                        <div class= "flex w-[500px] pb-[5px] gap-[212px] border-b">
                            <p class= "text-black">Total</p>
                            <p class= "text-black font-bold">$349.00</p>
                        </div>
                        <a className='button_four text-[#ffffff] bg-[#FFffff] flex items-center justify-center overflow-hidden border rounded-md border-[#FF324D] w-[243px] h-[50px]'>
                            Proceed To CheckOut 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart_checkout
