import React from 'react'
import Mygoals from './Mygoals'

const Transaction = () => {
  return (
    <div className='flex gap-5'>
    <div className='w-1/2 mt-10 h-[40vh] bg-white shadow-lg rounded-lg p-5'>
      <div className='w-full flex justify-between'>
        <h1 className='font-medium text-xl '>Transactions</h1> <div className='flex justify-evenly gap-5'><h3 className=''>Recent</h3><h3>Oldest</h3><h3>More</h3></div>

      </div>
      <div className='w-full flex justify-between mt-2'>
        <h1 className=' text-xl font-medium w-'>Receiver</h1>
        <h2 >Type</h2>
        <h2 >Date</h2>
        <h2 >Amount</h2>
      </div>
      <div className='w-full flex justify-between mt-2'>
        <h1 className='text-xl text-zinc-700 w-'>Vadapav</h1>
        <h2 >food</h2>
        <h2>24 Nov 2024</h2>
        <h2>$20</h2>
      </div>
      <div className='w-full flex justify-between mt-2'>
        <h1 className='text-xl text-zinc-700 w-'>Shoes</h1>
        <h2 >Lifestyle</h2>
        <h2>24 feb 2024</h2>
        <h2>$200</h2>
      </div>
      <div className='w-full flex justify-between mt-2'>
        <h1 className='text-xl text-zinc-700 w-'>Chinese</h1>
        <h2 >food</h2>
        <h2>24 Nov 2024</h2>
        <h2>$20</h2>
      </div>
      <div className='w-full flex justify-between mt-2'>
        <h1 className='text-xl text-zinc-700 w-'>Vadapav</h1>
        <h2 >food</h2>
        <h2>24 Nov 2024</h2>
        <h2>$20</h2>
      </div> 
    </div>
    <Mygoals/>
    </div>
  )
}

export default Transaction
