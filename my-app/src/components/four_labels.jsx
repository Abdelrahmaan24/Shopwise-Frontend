import React from 'react'

const Four_labels = () => {
    return (
        <div class = "h-[300px] bg-[#ffff] flex items-center justify-center">
            <div class = "grid  border lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 border-[#EEEEEE] w-[1120px] h-[108px]">
                <div class = "flex border gap-5 pl-7 items-center">
                    <img src="/shipped.png" alt="" class="w-9 h-9"/>
                    <div class = "flex flex-col gap-1">
                        <p class ="text-[#000000] font-semibold text-[15px]">Free Delivery</p>
                        <p class ="text-[#757D92] text-[14px]">Worldwide</p>
                    </div>
                </div>
                <div class = "flex border gap-5 pl-7 items-center">
                    <img src="/save-money.png" alt="" class="w-9 h-9"/>
                    <div class = "flex flex-col gap-1">
                        <p class ="text-[#000000] font-semibold text-[15px]">Money Returns</p>
                        <p class ="text-[#757D92] text-[14px]">30 Days money return</p>
                    </div>
                </div>
                <div class = "flex border gap-5 pl-7 items-center">
                    <img src="/customer-service.png" alt="" class="w-9 h-9"/>
                    <div class = "flex flex-col gap-1">
                        <p class ="text-[#000000] font-semibold text-[15px]">27/4 Online Support</p>
                        <p class ="text-[#757D92] text-[14px]">Customer Support</p>
                    </div>
                </div>
                <div class = "flex border gap-5 pl-7 items-center">
                    <img src="/security-payment.png" alt="" class="w-9 h-9"/>
                    <div class = "flex flex-col gap-1">
                        <p class ="text-[#000000] font-semibold text-[15px]">Payment Security</p>
                        <p class ="text-[#757D92] text-[14px]">Safe Payment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Four_labels