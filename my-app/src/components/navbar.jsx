// import React from 'react'
// import Link from 'next/link'


// const Navbar = () => {
//     return (

// <>
// <div class="bg-white ">
//     <div class = "border-b flex w-full items-center justify-between h-[53px]">
//         <div class = "flex px-52 gap-5">
//             <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="py-2 group gap-1 text-gray-900 flex justify-center items-center text-[14px] ">
//                         English
//                     <svg class="w-2.5  ml-1 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4"/>
//                     </svg>
//             </p>
//             <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="py-2 group gap-1 text-gray-900 flex justify-center items-center text-[14px] ">
//                         USD
//                     <svg class="w-2.5  ml-1 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4"/>
//                     </svg>
//             </p>
//             <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="py-2 group gap-1 text-gray-900 flex justify-center items-center text-[14px] ">
//             <svg
//                 class="w-6 h-6 text-gray-800 "
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 viewBox="0 0 24 24"
//             >
//                 <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
//                 />
//                 </svg>
//                     123-456-7890
//             </p>
//         </div>
//         <div class = "flex px-52 gap-5">
//         <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="py-2 group gap-1 group transition-all duration-300 hover:text-[#FF324D] text-gray-900 flex justify-center items-center text-[14px] ">
//         <svg
//                 class="w-6 h-6 text-gray-800  transition-all duration-300 group-hover:text-red-500"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 viewBox="0 0 24 24"
//             >
//                 <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3"
//                 />
//                 </svg>

//                     Compare
//         </p>
//         <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="py-2 group gap-1 transition-all duration-300 group hover:text-[#FF324D] text-gray-900 flex justify-center items-center text-[14px] ">
//             <svg
//                 class="w-6 h-6 text-gray-800 transition-all duration-300 group-hover:text-red-500"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 >
//                 <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
//                     />
//             </svg>
//                     Wishlist
//             </p>
//             <Link rel="stylesheet" href="/login" >
//                 <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="py-2 group gap-1 group transition-all duration-300 hover:text-[#FF324D] text-gray-900 flex justify-center items-center text-[14px] ">
//                     <svg
//                         class="w-6 h-6 text-gray-800  transition-all duration-300 group-hover:text-red-500"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         >
//                         <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                         />
//                     </svg>
//                     Login
//                 </p>
//             </Link>
//         </div>
//     </div>
// </div>
//     <div class="sticky top-0 z-50 bg-white flex px-52 w-full justify-between items-center h-[67px]">
//         <a href="/" class="flex items-center  ">
//             <img src="/logo_dark.png" class="h-[47] w-[182px]" alt="Flowbite Logo" />
//         </a>
//             <ul class="pr-11 flex gap-4 font-medium 	">
//                 {/* <Link rel="stylesheet" href="/"> */}
//                     {/* <li>                         */}
//                         <Link rel="stylesheet" href="/" id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class=" group text-gray-900 hover:text-[#FF324D] flex justify-center items-center text-[14px] ">
//                             HOME
//                         <svg class="w-2.5  ml-1 text-gray-900 ss group-hover:text-[#FF324D] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4"/>
//                         </svg>
//                         </Link>
//                     {/* </li> */}
//                 {/* </Link> */}
                
//                 <li>
//                 <a id="mega-menu-full-dropdow`n-button" data-collapse-toggle="mega-menu-full-dropdown" class=" group text-gray-900 md:w-auto hover:text-[#FF324D] flex justify-center items-center md:hover:bg-transparent md:border-0  md:dark:hover:bg-transparent text-[14px]">
//                         PAGES
//                     <svg class="w-2.5  ml-1 text-gray-900 ss group-hover:text-[#FF324D] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4"/>
//                     </svg>
//                     </a>
//                 </li>
//                 <li>
//                 <a id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class=" group text-gray-900 md:w-auto hover:text-[#FF324D] flex justify-center items-center md:hover:bg-transparent md:border-0  md:dark:hover:bg-transparent text-[14px]">
//                         PRODUCTS
//                     <svg class="w-2.5  ml-1 text-gray-900 ss group-hover:text-[#FF324D] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4"/>
//                     </svg>
//                     </a>
//                 </li>
//                 <li>
//                 <a id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class=" group text-gray-900 md:w-auto hover:text-[#FF324D] flex justify-center items-center md:hover:bg-transparent md:border-0  md:dark:hover:bg-transparent text-[14px]">
//                         BLOG
//                     <svg class="w-2.5  ml-1 text-gray-900 ss group-hover:text-[#FF324D] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4"/>
//                     </svg>
//                     </a>
//                 </li>
//                 <li>
//                 <a id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class=" group text-gray-900 md:w-auto hover:text-[#FF324D] flex justify-center items-center md:hover:bg-transparent md:border-0  md:dark:hover:bg-transparent text-[14px]">
//                         SHOP
//                     <svg class="w-2.5  ml-1 text-gray-900 ss group-hover:text-[#FF324D] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4"/>
//                     </svg>
//                 </a>
//                 </li>
//                 <li>
//                 <a id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class=" group text-gray-900 md:w-auto hover:text-[#FF324D] flex justify-center items-center md:hover:bg-transparent md:border-0  md:dark:hover:bg-transparent text-[14px]">
//                         CONTACT US
//                     </a>
//                 </li>
//             </ul>
//         <div className='flex gap-3 items-center justify-center '>
//             <svg class="w-6 h-6 text-gray-800 hover:text-[#FF324D] transition-all duration-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
//             </svg>
//             <Link href="/cart">
//                 <svg class="w-6 h-6 text-gray-800 hover:text-[#FF324D] duration-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
//                 </svg>  
//             </Link>
//         </div>
//     </div>
// </>


//     )
// }

// export default Navbar
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className="bg-white">
                <div className="border-b flex w-full items-center justify-between h-[53px] px-4 lg:px-52">
                    <div className="flex gap-5">
                        <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="py-2 group gap-1 text-gray-900 flex justify-center items-center text-[14px]">
                            English
                            <svg className="w-2.5 ml-1 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4" />
                            </svg>
                        </p>
                        <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="py-2 group gap-1 text-gray-900 flex justify-center items-center text-[14px]">
                            USD
                            <svg className="w-2.5 ml-1 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4" />
                            </svg>
                        </p>
                        <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="py-2 group gap-1 text-gray-900 flex justify-center items-center text-[14px]">
                            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z" />
                            </svg>
                            123-456-7890
                        </p>
                    </div>
                    <div className="flex gap-5">
                        <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="py-2 group gap-1 group transition-all duration-300 hover:text-[#FF324D] text-gray-900 flex justify-center items-center text-[14px]">
                            <svg className="w-6 h-6 text-gray-800 transition-all duration-300 group-hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3" />
                            </svg>
                            Compare
                        </p>
                        <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="py-2 group gap-1 transition-all duration-300 group hover:text-[#FF324D] text-gray-900 flex justify-center items-center text-[14px]">
                            <svg className="w-6 h-6 text-gray-800 transition-all duration-300 group-hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                            </svg>
                            Wishlist
                        </p>
                        <Link href="/login">
                            <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="py-2 group gap-1 group transition-all duration-300 hover:text-[#FF324D] text-gray-900 flex justify-center items-center text-[14px]">
                                <svg className="w-6 h-6 text-gray-800 transition-all duration-300 group-hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                Login
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sticky top-0 z-50 bg-white flex px-4 lg:px-52 w-full justify-between items-center h-[67px]">
                <a href="/" className="flex items-center">
                    <img src="/logo_dark.png" className="h-[47] w-[182px]" alt="Flowbite Logo" />
                </a>
                <ul className="flex gap-4 font-medium">
                    <li>
                        <Link href="/" id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="group text-gray-900 hover:text-[#FF324D] flex justify-center items-center text-[14px]">
                            HOME
                            <svg className="w-2.5 ml-1 text-gray-900 ss group-hover:text-[#FF324D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <a id="mega-menu-full-dropdow`n-button" data-collapse-toggle="mega-menu-full-dropdown" className="group text-gray-900 md:w-auto hover:text-[#FF324D] flex justify-center items-center md:hover:bg-transparent md:border-0 md:dark:hover:bg-transparent text-[14px]">
                            PAGES
                            <svg className="w-2.5 ml-1 text-gray-900 ss group-hover:text-[#FF324D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="group text-gray-900 md:w-auto hover:text-[#FF324D] flex justify-center items-center md:hover:bg-transparent md:border-0 md:dark:hover:bg-transparent text-[14px]">
                            PRODUCTS
                            <svg className="w-2.5 ml-1 text-gray-900 ss group-hover:text-[#FF324D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="group text-gray-900 md:w-auto hover:text-[#FF324D] flex justify-center items-center md:hover:bg-transparent md:border-0 md:dark:hover:bg-transparent text-[14px]">
                            BLOG
                            <svg className="w-2.5 ml-1 text-gray-900 ss group-hover:text-[#FF324D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="group text-gray-900 md:w-auto hover:text-[#FF324D] flex justify-center items-center md:hover:bg-transparent md:border-0 md:dark:hover:bg-transparent text-[14px]">
                            SHOP
                            <svg className="w-2.5 ml-1 text-gray-900 ss group-hover:text-[#FF324D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="group text-gray-900 md:w-auto hover:text-[#FF324D] flex justify-center items-center md:hover:bg-transparent md:border-0 md:dark:hover:bg-transparent text-[14px]">
                            CONTACT US
                        </a>
                    </li>
                </ul>
                <div className="flex gap-3 items-center justify-center">
                    <svg className="w-6 h-6 text-gray-800 hover:text-[#FF324D] transition-all duration-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                    <Link href="/cart">
                        <svg className="w-6 h-6 text-gray-800 hover:text-[#FF324D] duration-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
