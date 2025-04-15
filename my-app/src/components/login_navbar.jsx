const Login_navbar = () => {
    return (
        <div class ="flex items-center h-[175px] w-full bg-[#F7F8FB] text-[#000000] justify-around">
            <h2 class = "text-[28px] font-bold pr-[400px]">Login</h2>
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
                <p class= "text-[14px] text-[#575A5E] flex justify-center items-center gap-2 ">Login

                </p>
            </div>
        </div>
    )
}

export default Login_navbar
