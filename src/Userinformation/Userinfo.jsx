import React, {  useContext, useState } from "react";
import { Mycontext } from "../UserContext/Usercontext";



const Userinfo = () => {
 
 const {globalData,setglobalData} = useContext(Mycontext)

    
    const [info, setinfo] = useState([]);

    const [income, setincome] = useState('');
    const [currentBalance, setcurrentBalance] = useState('');
    const [expense, setexpense] = useState('');
    const [Investment, setInvestment] = useState('');

    const AddInformation = (e)=>{
        e.preventDefault()
        setinfo({income,currentBalance,expense,Investment})
        setInvestment('')
        setincome('')
        setexpense('')
        setcurrentBalance(' ')
  
        const data = globalData
        console.log(data);
        
    
    }
   

  return (
    <div className="w-full h-screen bg-zinc-300 flex items-center justify-center">
      <div className="border-2 bg-black text-white border-black flex flex-col p-20 rounded-lg">
        <form onSubmit={AddInformation}>
          <h1 className="font-semibold text-xl">ADD INFO</h1>
          <div className="flex flex-col">
            <input value={income}
            onChange={(e)=>{
                setincome(e.target.value)
            }}
              className="bg-transparent outline-none border-2 border-orange-300 rounded-md px-4 py-2 mt-2 "
              type="text"
              placeholder="Enter Income"
            />
            <input value={currentBalance}
            onChange={(e)=>{
                setcurrentBalance(e.target.value)
            }}
              className="bg-transparent outline-none border-2 border-orange-300 rounded-md px-4 py-2 mt-2"
              type="text"
              placeholder="current balance"
            />
            <input value={expense}
            onChange={(e)=>{
                setexpense(e.target.value)
            }}
              className="bg-transparent outline-none border-2 border-orange-300 rounded-md px-4 py-2 mt-2"
              type="text"
              placeholder="expenses"
            />
            <input value={Investment}
            onChange={(e)=>{
                setInvestment(e.target.value)
            }}
              className="bg-transparent outline-none border-2 border-orange-300 rounded-md px-4 py-2 mt-2"
              type="text"
              placeholder="Investment"
            />
            <button className="bg-blue-500 px-3 py-1 rounded-md text-xl  mt-10">Add Info</button>
          </div>
        </form>
      </div>
    </div>
  );



};

export default Userinfo;
