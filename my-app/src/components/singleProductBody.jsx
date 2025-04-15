"use client"
import React from 'react'
import Plus_mins from "@/atoms/plus_mins";
import Sizes from "@/atoms/product_sizes";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addItem } from '@/redux/cart/cartSlice';

const SingleProductBody = ({ product }) => {
    
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <IoIosStar
                key={i}
                className="text-yellow-500" // Change this class to update styles
                style={{ margin: '0px 0px', fontSize: '15px' }} // Inline styles for customizations
            />
        );
    }       

    const dispatch = useDispatch();
    
    return (
        <>
            <div class ="flex items-center h-[175px] w-full bg-[#F7F8FB] text-[#000000] justify-around">
                <h2 class = "text-[28px] font-bold pr-[250px]">Single Product</h2>
                <div class= "flex">
                    <p class= "text-[14px] flex justify-center items-center hover:text-[#FF324D] transition-all duration-300 gap-2">
                        Home  
                        <svg class="h-2 text-[#575A5E] mr-2 w-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                    </p>
                    <p class= "text-[14px] flex justify-center items-center gap-2 hover:text-[#FF324D] transition-all duration-300">Pages
                    <svg class="h-2 text-[#575A5E] w-2 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                    </p>
                    <p class= "text-[14px] text-[#575A5E] flex justify-center items-center gap-2 ">Single Product
                    </p>
                </div>
            </div>
            <div class ="h-[800px] bg-[#ffffff] w-full">    
                <div class = "flex h-[600px] py-[100px] justify-center gap-6">
                    <div class ="border-2  h-[602px] flex w-[544px] items-center justify-center">
                        <img src={product.image} alt="photo" class="h-[450px] w-[450px]"/>
                    </div>
    
                    <div class ="flex flex-col h-[600px] w-[544px] gap-3">
                        <h1 class ="text-[#000000] font-medium text-[23px] hover:text-[#FF324D] transition-all duration-300">{product.title.split(' ').slice(0, 4).join(' ')}</h1>
                        <div class = "flex justify-between items-center">
                            <div class ="flex gap-2 items-center">
                                <p class ="text-[#FF324D] font-bold text-[25px]">{`$${product.price}`}</p>
                                <del class ="text-[13px] text-[#76818F]">$999.25</del>
                                <p class ="text-[#388E55] text-[13px]">35% Off</p>   
                            </div>
                            <div class ="flex gap-3">
                                <div class ="flex gap-0 items-center">
                                    {stars}
                                </div>
                                <p class ="text-[#76818F] text-[14px]">{`(${product.rating.rate})`}</p>
                            </div>
                        </div>
                        <div class ="text-[#76818F] text-[15px]">{product.description.split(' ').slice(0, 20).join(' ')}</div>
                        <div class = "flex flex-col py-2 gap-2">
                            <p className="text-[14px] text-black font-normal flex items-center gap-2"> <svg class="w-[16px] h-[16px] text-[#FF324D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"/></svg>
                                1 Year AL Jazeera Brand Warranty</p>
                            <p className="text-[14px] text-black font-normal flex items-center gap-2"> <svg class="w-[16px] h-[16px] text-[#FF324D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/></svg>
                                30 Day Return Policy</p>
                            <p className="text-[14px] text-black font-normal flex items-center gap-2"> <svg class="w-[16px] h-[16px] text-[#FF324D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/></svg>
                                Cash on Delivery available</p>   
                        </div>
                        <div class ="flex items-center gap-4">
                            <p class = "text-[#76818F]">Color</p>
                            <p class ="w-[15px] h-[15px] rounded-full bg-[#87554B] "></p>
                            <p class ="w-[15px] h-[15px] rounded-full bg-[#333333] "></p>
                            <p class ="w-[15px] h-[15px] rounded-full bg-[#FF324D] "></p>
                        </div>
                        <Sizes />
                        <div class ="flex items-center gap-4 border-y p-4">
                            <Plus_mins />
                            <button onClick={() => dispatch(addItem({product}))} className='button_four text-[#ffffff] bg-[#FFffff] flex items-center justify-center overflow-hidden border rounded-lg border-[#FF324D] w-[191px] h-[50px]'>
                                Add To Cart
                            </button>
                            <svg
                                class="w-6 h-6 text-gray-800  transition-all duration-300 hover:text-[#FF324D]"
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
                            <svg
                                class="w-6 h-6 text-gray-800 transition-all duration-300 hover:text-[#FF324D]"
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
                        <div class = "flex flex-col gap-2">
                            <div class = "flex pt-1 gap-1">
                                <p class = "text-[#76818F] text-[15px]">SKU: </p>
                                <p class = "text-black hover:text-[#FF324D] transition-all duration-300 items-center text-[16px]">BE45VGRT</p>
                            </div>
                            <div class = "flex pt-1 gap-1">
                                <p class = "text-[#76818F] text-[15px]">Category: </p>
                                <p class = "text-black hover:text-[#FF324D] transition-all duration-300 items-center text-[16px]">Clothing</p>
                            </div>
                            <div class = "flex pt-1 gap-1">
                                <p class = "text-[#76818F] text-[15px]">Tags: </p>
                                <p class = "text-black hover:text-[#FF324D] transition-all duration-300 items-center text-[16px]">Cloth, printed</p>
                            </div>
                        </div>
                        <div class ="flex gap-4">
                            <p class ="text-[#76818F]">Share:</p>
                            <svg
                                class = "size-5 text-[#76818F] hover:text-[#FF324D] transition-all duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                            <svg
                                class = "size-5 text-[#76818F] hover:text-[#FF324D] transition-all duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 320 512">
                                <path
                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                            <svg
                                class = "size-5 text-[#76818F] hover:text-[#FF324D] transition-all duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 488 512">
                                <path
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                            <svg
                                class = "size-5 text-[#76818F] hover:text-[#FF324D] transition-all duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 576 512">
                                <path
                                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                            </svg>
                            <svg
                                class = "size-5 text-[#76818F] hover:text-[#FF324D] transition-all duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 512 512">
                                <path
                                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>  
            </> 
    )
}

export default SingleProductBody
