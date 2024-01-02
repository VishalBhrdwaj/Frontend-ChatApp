import React from 'react'

const SingleMessage = ({message}) => {
  return (
    <div className='m-2 rounded-sm p-3 h-auto max-w-[60%] bg-gradient-to-b from-violet-400 to-violet-600 text-white'>
        <div className=''>
        {message}
        </div>
    </div>
  )
}

export default SingleMessage
