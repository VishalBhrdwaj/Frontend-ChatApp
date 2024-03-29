import React, { useState } from 'react'
import { IoEnterOutline } from "react-icons/io5";
const SignInPage = ({setIsSignedIn,socket}) => {
    const [name,setName]=useState("")
    const setUserName=()=>{
        localStorage.setItem("userName",name);
        localStorage.setItem("socketId",socket.id);
        socket.emit("new_user_joined",({_id:socket.id,name:name}))
        setName("");
        setIsSignedIn(true);
    }
  return (
    <div className='border border-violet-800 md:w-[100%]   md:flex md:justify-center h-[100%] pt-10'>
    
      <div className=' border border-violet-800  sm:mt-[50%] md:mt-[1%]   md:h-5/6 md:w-3/12 p-5'>
        <h1 className='font-semibold border-b pb-5 mb-16   text-violet-700 my-4 text-2xl border-b-violet-500'>Login</h1>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Please enter Your Name' className='outline-none border sm:w-[100%]    md:w-[100%] border-violet-500 px-3 py-2 rounded-sm' />
        <button className='border border-violet-600 sm:bg-green md:bg-blue text-white sm:justify-evenly  flex md:justify-center items-center sm:w-[100%] sm:mt-10  bg-violet-500 px-3 py-2 md:w-[100%] md:m-0 md:mt-6 rounded-md m-1' onClick={setUserName}>
            <div>Join Chat Room </div>
            <div className='md:ml-3 text-2xl'><IoEnterOutline /></div>
        </button>
      </div>
    </div>
  )
}

export default SignInPage