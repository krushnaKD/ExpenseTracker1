import React, { useState } from 'react'
import SignUp from './SignUp';

function Login({HandleLoging}) {
  
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const LogingDone = (e) =>{
      e.preventDefault()
      // console.log(email,password);
      HandleLoging(email,password)
      setemail('')
      setpassword('')
    }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center text-white'>
        <form onSubmit={(e)=>LogingDone(e)} className='w-1/4 h-[30vh] p-10 flex flex-col border-2 gap-4 border-emerald-400 rounded-md items-center  '>
            <input value={email} 
              onChange={(e)=>{
              setemail(e.target.value)
              }}
            className='bg-transparent outline-none border-2 border-emerald-400 rounded-md mt-5' type="email" placeholder='Enter Email'/>
            <input value={password}
             onChange={(e)=>{
                setpassword(e.target.value)
             }}
            className='bg-transparent outline-none border-2 border-emerald-400 rounded-md' type="password" placeholder='Enter Password'/>
     
            <button className='w-1/2  px-5 py-1 bg-emerald-600 rounded-lg'>Login</button>
          
       

        </form>
    </div>
  )
}

export default Login
