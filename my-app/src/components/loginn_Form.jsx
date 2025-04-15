// "use client";

// import React from 'react';
// import { useForm } from "react-hook-form";
// import Link from 'next/link';


// const Loginn_Form = () => {
//     const { register, handleSubmit , formState: { errors }} = useForm();

//     const onSubmit = async data => {
//         try{
//             const response = await fetch('https://fakestoreapi.com/auth/login',{
//             method:'POST',
//             body:JSON.stringify({
//                 username: "data.username",
//                 password: "data.password",
//             })
//         })
//             const result = await response.json();
//             console.log(data);
            
//         }
//         catch(error){
//             console.error("Error during login: ", error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="bg-[#FFFFFF] w-full h-[700px] flex justify-center items-center">
//             <div className="gap-3 pl-[45px] div_loginForm h-[521px] w-[550px] bg-[#FFFFFF] shadow-2xl flex flex-col">
//                 <h2 className="mt-[53px] text-[28px] font-bold text-[#000000]">Login</h2>
//                 <input
//                     {...register("username" , {
//                         required: "username is required",
//                     })}
//                     placeholder='Your username'
//                     className="text-[#000000] px-4 outline-none w-[457px] border py-3 rounded-md input-field"
//                     type="text"
//                 />
//                 {errors.username && <p className="text-[14px] text-red-500">{errors.username.message}</p>}
//                 <input 
//                 {...register("password" , {
//                     required: "Password is required",
//                 })}
//                 placeholder='Password' type="password" className="text-[#000000] px-4 outline-none w-[457px]  border py-3 rounded-md input-field" />
//                 {errors.password && <p className="text-[14px] text-red-500">{errors.password.message}</p>}
//                 <div class = "flex justify-between items-center">
//                     <p class ="ml-1 text-[#5C5C5C]">Remember me</p>
//                     <p class ="mr-12 text-[#5C5C5C]">Forgot password?</p>
//                 </div>
//                 {/* <Link href="/"> */}
                    // <button className='button_four text-[#ffffff] bg-[#FFffff] flex items-center justify-center overflow-hidden border rounded-lg border-[#FF324D] w-[457px] h-[50px]'>
                    //     Log in
                    // </button>
//                 {/* </Link> */}
//                 <p class ="text-[#5C5C5C] text-center mr-[45px] relative par_login_form">OR</p>
//                 <div class ="flex pr-[60px] items-center justify-center gap-3 ">
//                     <a href="#" class="w-[140px] h-[45px] hover:bg-[#344E86] transition-all duration-300 flex items-center rounded-md justify-center gap-2 bg-[#3B5998]">
//                         <svg
//                             class = "size-3 "
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="currentColor"
//                             viewBox="0 0 320 512">
//                             <path
//                             d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
//                         </svg>
//                         Facebook
//                     </a>
//                     <a href="#" class="w-[124px] h-[45px] hover:bg-[#D33D2B] transition-all duration-300 flex items-center rounded-md justify-center gap-2 bg-[#D85040]">
//                     <svg
//                             class = "size-3 "
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="currentColor"
//                             viewBox="0 0 488 512">
//                             <path
//                             d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
//                         </svg>
//                         Google
//                     </a>
//                 </div>
//                 <div class ="flex items-center justify-center gap-2 pr-[60px]">
//                     <p class ="text-[#5C5C5C]">Don't Have an Account?</p>
//                     <p class ="text-[#000000] hover:text-[#FF324D] transition-all duration-300">Sign up now</p>
//                 </div>
//             </div>
//         </div>
//         </form>
//     );
// };

// export default Loginn_Form;
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'; // Ensure correct import

const Loginn_Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const router = useRouter();

    const onSubmit = async data => {
        setLoginError(''); // Clear previous error message
        try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            username: data.username,
            password: data.password,
            }),
        });

        const result = await response.json();

        if (response.ok && result.token) {
            // Assuming the API returns a token
            console.log(result);
            router.push('/'); // Redirect to the home page
        } else {
            // Handle error returned from the API
            setLoginError('Invalid username or password');
        }
        } catch (error) {
        console.error('Error during login:', error);
        setLoginError('the username or password is incorrect');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#FFFFFF] w-full h-[700px] flex justify-center items-center">
            <div className="gap-3 pl-[45px] div_loginForm h-[521px] w-[550px] bg-[#FFFFFF] shadow-2xl flex flex-col">
            <h2 className="mt-[53px] text-[28px] font-bold text-[#000000]">Login</h2>
            <input
                {...register('username', {
                required: 'Username is required',
                })}
                placeholder='Your username'
                className="text-[#000000] px-4 outline-none w-[457px] border py-3 rounded-md input-field"
                type="text"
            />
            {errors.username && <p className="text-[14px] text-red-500">{errors.username.message}</p>}
            <input
                {...register('password', {
                required: 'Password is required',
                })}
                placeholder='Password' type="password" className="text-[#000000] px-4 outline-none w-[457px] border py-3 rounded-md input-field"
            />
            {errors.password && <p className="text-[14px] text-red-500">{errors.password.message}</p>}
            {loginError && <p className="text-[14px] text-red-500">{loginError}</p>}
            <div className="flex justify-between items-center">
                <p className="ml-1 text-[#5C5C5C]">Remember me</p>
                <p className="mr-12 text-[#5C5C5C]">Forgot password?</p>
            </div>
            <button className='button_four text-[#ffffff] bg-[#FFffff] flex items-center justify-center overflow-hidden border rounded-lg border-[#FF324D] w-[457px] h-[50px]'>
                        Log in
            </button>
            <p className="text-[#5C5C5C] text-center mr-[45px] relative par_login_form">OR</p>
            <div className="flex pr-[60px] items-center justify-center gap-3 ">
                <a href="#" className="w-[140px] h-[45px] hover:bg-[#344E86] transition-all duration-300 flex items-center rounded-md justify-center gap-2 bg-[#3B5998]">
                <svg
                    className="size-3 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512">
                    <path
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                Facebook
                </a>
                <a href="#" className="w-[124px] h-[45px] hover:bg-[#D33D2B] transition-all duration-300 flex items-center rounded-md justify-center gap-2 bg-[#D85040]">
                <svg
                    className="size-3 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 488 512">
                    <path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
                Google
                </a>
            </div>
            <div className="flex items-center justify-center gap-2 pr-[60px]">
                <p className="text-[#5C5C5C]">Don't Have an Account?</p>
                <p className="text-[#000000] hover:text-[#FF324D] transition-all duration-300">Sign up now</p>
            </div>
            </div>
        </div>
        </form>
    );
};

export default Loginn_Form;
