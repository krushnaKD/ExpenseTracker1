import React from 'react'

function Goals() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-black opacity-[80%] absolute '>
        
      <form className='w-[40%] h-[50%] bg-lime-600 rounded-lg  '>
      <h1 className='text-center text-3xl font-semibold p-3'>Add Goal's To Acheive</h1>
      <div className='flex flex-col items-center mt-10'>
        <input className='bg-transparent text-lg px-3 py-1 border-2 border-black rounded-md mb-5 outline-none' type="text" placeholder='Enter your goals' />
        <input className='bg-transparent text-lg px-3 py-1 border-2 border-black rounded-md mb-5 outline-none' type='number' placeholder='Money'/>
        <button className='px-2 py-1 bg-gray-400 rounded-md shadow-lg w-fit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Goals
