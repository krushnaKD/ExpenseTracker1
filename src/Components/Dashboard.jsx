import React from "react";
import Transaction from "./Transaction";

const Dashboard = ({Loggedin,setLoggedin}) => {
  const Logout = () =>{
  const data =  localStorage.getItem("loggedIn")
  console.log(data);
  setLoggedin('') 

  }

  return (
    <div className="w-full h-screen bg-zinc-300 p-10">
      <div className="w-full flex justify-between">
        <h1 className="text-xl font-medium">
          Hello <br /> <h1 className="text-3xl font-semibold">
         💸
          </h1>
        </h1>{" "}
        <div>
          <a href="Userinfo.jsx">Add info</a>
        <button onClick={Logout} className="bg-red-600 px-4 h-10 rounded-md">LogOut</button>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="bg-lime-400 w-[20vw] h-52 rounded-md mt-10 shadow-xl"> 
        <img className="w-20  rounded-full" src="https://e7.pngegg.com/pngimages/13/299/png-clipart-money-management-expense-android-angle-personal-finance-thumbnail.png" alt="" />
          <div className="flex py-5 px-5 gap-2 items-baseline">
           <h1 className="font-medium text-xl ">Income:-</h1> <h2 className="bg-white rounded-full px-8  py-1 text-lg font-semibold">2000</h2>
          </div>
        
        </div>
        <div className="bg-blue-500  w-[20vw] h-52 rounded-md mt-10 shadow-xl">
        <div className="flex py-5 px-5 gap-2 items-baseline">
           <h1 className="font-medium text-xl ">Expenses:-</h1> <h2 className="bg-white rounded-full px-8  py-1 text-lg font-semibold">2000</h2>
          </div>
        </div>
        <div className="bg-pink-500 w-[20vw] h-52 rounded-md mt-10 shadow-xl">
        <div className="flex py-5 px-5 gap-2 items-baseline">
           <h1 className="font-medium text-xl ">Saving:-</h1> <h2 className="bg-white rounded-full px-8  py-1 text-lg font-semibold">2000</h2>
          </div>
        </div>
        <div className="bg-purple-500 w-[20vw] h-52 rounded-md mt-10 shadow-xl"> <div className="flex py-5 px-5 gap-2 items-baseline">
           <h1 className="font-medium text-xl ">Investment:-</h1> <h2 className="bg-white rounded-full px-8  py-1 text-lg font-semibold">2000</h2>
          </div></div>
      </div>
      <Transaction />
    </div>
  );
};

export default Dashboard;
