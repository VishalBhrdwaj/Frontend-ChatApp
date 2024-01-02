import React from 'react'
import { RiChatSmile3Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className='bg-violet-500 h-14 p-2 flex justify-around items-center'>
      <div className='text-white font-medium flex text-4xl'>
        <div className='inline-block  mr-3'><RiChatSmile3Line /></div>
        <div className='text-3xl'>We Chats</div>
      </div>
      {/* <div className='text-white flex justify-around w-[40%]  border-red200'>
        <div>SignUp</div>
        <div>SignIn</div>
      </div> */}
    </div>
  )
}

export default Header
