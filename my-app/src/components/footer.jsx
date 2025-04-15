import React from 'react'

const Footer = () => {
    return (
        

<footer class = "bg-[#202325]">
    <div class="h-[436px]  w-full border-b border-[#2B2E30]">
        <div class="flex  pt-28 pl-52 gap-28 ">
            <div class="w-auto flex flex-col">
                <h2 class="mb-6 text-[20px] text-sm font-semibold   text-white">Contact Info</h2>
                <ul class="text-gray-50 font-medium">
                    <li class="mb-4 flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                    <a href="#" class="text-[14px] text-gray-50">123 Street, Old Trafford, NewYork, USA</a>
                    </li>

                    <li class = "mb-4">
                        <a id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class=" group gap-3 text-gray-50 hover:text-[#FF324D] flex text-[14px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>

                        info@sitename.com
                        </a>
                    </li>

                    <li class = "mb-4 ">
                        <p id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="group text-green-50 flex gap-2 text-[14px] ">
                            <svg
                                class="w-6 h-6 text-gray-50 size-5 "
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
                                d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
                                />
                                </svg>
                                    123-456-7890
                        </p>
                    </li>
                    <li class="mb-4 flex gap-1 pt-4">
                        <a class = "size-9 bg-[#3F729B] flex items-center justify-center rounded-full">
                            <svg
                                class = "size-5 "
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </a>
                        <div class = "size-9 bg-[#3B5998] flex items-center justify-center rounded-full">
                        <svg
                            class = "size-5 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 320 512">
                            <path
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                        </svg>
                        </div>
                        <div class = "size-9 bg-[#DD4B39] flex items-center justify-center rounded-full">
                        <svg
                            class = "size-5 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 488 512">
                            <path
                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                        </div>
                        <div class = "size-9 bg-[#C4302B] flex items-center justify-center rounded-full">
                        <svg
                            class = "size-5 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 576 512">
                            <path
                            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                        </svg>
                        </div>
                        <div class = "size-9 bg-[#000000] flex items-center justify-center rounded-full">
                        <svg
                            class = "size-5 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512">
                            <path
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col h-9">
                <h2 class="mb-6 text-[20px] text-sm font-semibold  text-white">Useful Links</h2>
                <ul class="text-gray-400 flex flex-col gap-2 font-medium ">
                    <li class="">
                        <a href="#" class=" text-gray-50 transition-all duration-700 hover:text-[#FF324D] text-[14px]">About Us</a>
                    </li>
                    <li class="">
                        <a href="#" class="hover:text-[#FF324D] transition-all duration-700 text-gray-50 text-[14px]">FAQ</a>
                    </li>
                    <li class="">
                        <a href="#" class="hover:text-[#FF324D] transition-all duration-700 text-gray-50 text-[14px]">Location</a>
                    </li>
                    <li class="">
                        <a href="#" class="hover:text-[#FF324D] transition-all duration-700 text-gray-50 text-[14px]">Affiliates</a>
                    </li>
                    <li class="">
                        <a href="#" class="hover:text-[#FF324D] transition-all duration-700 text-gray-50 text-[14px]">Contact</a>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col h-9">
                <h2 class="mb-6 text-[20px] text-sm font-semibold  text-white">My Account</h2>
                <ul class="text-gray-400 flex flex-col gap-2 font-medium ">
                    <li class="">
                        <a href="#" class="hover:text-[#FF324D] transition-all duration-700 text-gray-50 text-[14px]">My Account</a>
                    </li>
                    <li class="">
                        <a href="#" class="hover:text-[#FF324D] transition-all duration-700 text-gray-50 text-[14px]">Discount</a>
                    </li>
                    <li class="">
                        <a href="#" class="hover:text-[#FF324D] transition-all duration-700 text-gray-50 text-[14px]">Returns</a>
                    </li>
                    <li class="">
                        <a href="#" class="hover:text-[#FF324D] transition-all duration-700 text-gray-50 text-[14px]">
                        Orders History</a>
                    </li>
                    <li class="">
                        <a href="#" class="hover:text-[#FF324D] transition-all duration-700 text-gray-50 text-[14px]">Order Tracking</a>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col w-[360px]">
                <h2 class="mb-6 text-sm font-semibold  text-[20px] text-white">Subscribe Our Newsletter</h2>
                <p class="text-[14px] leading-7">If you want to get an email from us every time we have a new special offer, then sign up here!</p>
                <div class = "relative">
                    <input placeholder='Enter Email Address' class="w-[350px] mt-7 px-4 h-12 text-gray-950 rounded-full border-none outline-none"/>
                    <div class = "size-10 bg-[#FF324D] flex items-center absolute justify-center right-[15px] bottom-[5px] rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full h-[91px] flex items-center pl-52 gap-[538px]">
        <div class = "text-[14px]">© 2020 All Rights Reserved by Bestwebcreator</div>
        <div class = "flex gap-1">
            <img src="/visa.png" alt="logo" />
            <img src="/paypal.png" alt="logo" />
            <img src="/master_card.png" alt="logo" />
            <img src="/discover.png" alt="logo" />
            <img src="/amarican_express.png" alt="logo" />
        </div>
    </div>
</footer>

    )
}

export default Footer
