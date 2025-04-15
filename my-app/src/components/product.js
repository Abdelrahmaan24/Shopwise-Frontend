"use client"
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cart/cartSlice'

const Product = ({product}) => {
    const dispatch = useDispatch()
    return (
        <div class = "w-[260px] h-[397px] border product_div rounded-lg">
            <div class = "w-full h-[290px] relative">
                <img src={product.image} alt="photo" class="pl-[50px] pt-[30px] w-[200px]"/>
                <div class="div2_hover flex items-center justify-center opacity-0 gap-5 bg-[#000000] overflow-hidden absolute top-0 left-0 w-full h-full rounded-t-lg"></div>
                <div class = "dav flex absolute gap-2 top-[150PX] left-[57px]">
                    <div class="davdiv border rounded-full hover:bg-[#FF324D] border-none outline-none bg-[#ffffff] h-[45px] w-[45px] flex items-center justify-center">
                        <svg
                            class="w-6 h-6 svg_products size-4 text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3"
                            />
                        </svg>
                    </div>
                    <div class="   border-none outline-none hover:bg-[#FF324D] davdiv border rounded-full bg-[#ffffff] h-[45px] w-[45px] flex items-center justify-center">
                        <svg class="svg_products w-6 h-6 size-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <div class="  border-none outline-none hover:bg-[#FF324D] davdiv border rounded-full bg-[#ffffff] h-[45px] w-[45px] flex items-center justify-center">
                        <svg
                            class="svg_products w-6 size-4 h-6 text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                />
                        </svg>
                    </div>
                </div>
            </div>  
            <div class = "pt-2 border-[#EEEEEE] w-full h[110px] relative flex flex-col gap-3 items-center">
                <Link href={`/post/${product.id}`} class ="text-[#000000] font-medium text-[15px] hover:text-[#FF324D] duration-400" >{product.title.split(' ').slice(0, 3).join(' ')}</Link>
                <div class ="flex relative gap-2 ">
                    <p class ="text-[#FF324D] font-semibold">{product.price}</p>
                    <del class ="text-[#68789B] text-[14px] flex items-center">$95.00</del>
                </div>
                <p class ="text-[#68789B] text-[14px]">({product.rating.count})</p>
                <div class = "div2 absolute -bottom-8 opacity-0">
                    <button onClick={() => dispatch(addItem({product}))} className='button_four text-[#ffffff] bg-[#FFffff] flex items-center justify-center overflow-hidden border rounded-full border-[#FF324D] w-[192px] h-[50px]'>
                        <svg class="pr-addcart-svg w-6 h-6  text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/> </svg>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product