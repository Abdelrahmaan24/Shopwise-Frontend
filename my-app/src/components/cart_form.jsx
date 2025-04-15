"use client"
import React from 'react'
import Plus_mins from '@/atoms/plus_mins';
import Cart_item from './cart_item'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItem} from '@/redux/cart/cartSlice'

const Cart_form = () => {
    const dispatch = useDispatch()
    const { cartItems, amount, total } = useSelector((state) => state.cart)
    return (
        amount === 0 ?
            <div className="pt-[100px] pb-[60px] h-auto flex flex-col w-full bg-white items-center">
                <div className="flex w-[1120px] justify-center items-center h-[35px]">
                    <h1 className="text-[40px] font-bold text-black">no items founded</h1>
                </div>  
            </div>
        :
        <div className="pt-[100px] pb-[60px] h-auto flex flex-col w-full bg-white items-center">
            <div className="flex w-[1120px] h-[40px] gap-[70px] border-b">
                <p className="font-bold text-black pl-[200px]">Product</p>
                <p className="font-bold text-black pl-[225px]">Price</p>
                <p className="font-bold text-black pl-[50px]">Quantity</p>
                <p className="font-semibold text-black pl-[50px]">Total</p>
                <p className="font-bold text-black pl-[0px]">Remove</p>
            </div>  
            {
                cartItems.map((item) => {
                    return (
                        <div class ="flex w-[1120px] h-[127px] border-b items-center">
                            <div>
                                <img src={item.image} alt="" class="pl-10 w-[110px] h-[115px]"/>
                            </div>
                            <p class ="text-black pl-[90px]">{item.title.split(' ').slice(0, 3).join(' ')}</p>
                            <p class ="text-black font-semibold pl-[180px] pr-[70px]">{item.price}</p>
                            <div class ="">
                                <Plus_mins />
                            </div>
                            <p class ="text-black font-semibold pl-[65px] pr-[85px]">{item.price}</p>
                            <div class = "w-[30px] h-[30px] hover:text-white hover:bg-[#FF324D] hover:rounded-full flex items-center justify-center">
                                <button class ="" onClick={() => dispatch(removeItem(item.id))}>
                                    <svg width="20" aria-hidden="true" fill="none" class ="size-3 hover:text-white" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0" y1="0" x2="20" y2="20" stroke="black" stroke-width="2"/>
                                        <line x1="0" y1="20" x2="20" y2="0" stroke="black" stroke-width="2"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            <div className="flex justify-between gap-[580px] items-center border-b pb-2">
                <div className="flex pt-3">
                    <input placeholder='Enter Coupon Code..' type="text" className="text-[#000000] px-4 outline-none w-[219px] border py-3 rounded-tl-md rounded-bl-md input-field" />
                    <a className='button_four text-[#ffffff] bg-[#FFffff] flex items-center justify-center overflow-hidden border rounded-tr-md rounded-br-md border-[#FF324D] w-[150px] h-[50px]'>
                        Apply Coupon
                    </a>
                </div>
                <button onClick={() => dispatch(clearCart())} className="button_two text-[14px] w-[135px] text-[#333333] flex h-[35px] pb-[19px] pt-[19px] mt-4 justify-center items-center border rounded-md border-[#333333]">Clear Cart</button>
            </div>
        </div>
    )
}

export default Cart_form
