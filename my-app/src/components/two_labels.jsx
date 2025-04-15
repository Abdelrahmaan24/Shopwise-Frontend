import React from 'react'

const Two_labels = () => {
    return (
        <div class ="h-[455px] w-full bg-[#ffff]">
            <div class = "h-[354px] gap-6 lg:flex  justify-center items-center">
                <div class="div1_two_labels w-[451px] h-[354px] bg-[#E3FEF9]">
                    <div class = "pl-8 relative flex flex-col gap-1 pt-7">
                        <p class = "text-[#292B2C] text-[19px] font-semibold">Super Sale</p>
                        <h1 class = "text-[#000000] font-bold text-[30px]">New Collection</h1>
                        <p class = "p_two_labels realative text-[#000000] font-normal">Shop Now</p>
                        <img src="/furniture1.png" alt="photo" class ="image1_two_labels absolute top-[80px] w-[270px] ml-[95px]"/>
                    </div>
                </div>
                <div class ="h-[354px] w-[641px] bg-[#FEFBEA] div2_two_labels">
                    <div class="flex gap-9">
                        <div class="pl-[50px] flex gap-1 flex-col justify-center"> 
                            <h1 class = "text-[#000000] font-bold text-[30px]">New Season</h1>
                            <p class = "text-[#292B2C] text-[23px] font-semibold">Sale 40% Off</p>
                            <p class = "p_two_labels realative text-[#000000] font-normal">Shop Now</p>
                        </div>
                        <img src="/furniture2.png" alt="photo" class="image2_two_labels" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Two_labels
