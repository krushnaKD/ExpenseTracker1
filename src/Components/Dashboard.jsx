import React from "react";
import Transaction from "./Transaction";
import MainDashboard from "./MainDashboard";
import { Link, useNavigate } from "react-router";
import NavDash from "./NavDash";
import Goals from "../Data/Goals";

const Dashboard = ({ Loggedin, setLoggedin }) => {
  const Logout = () => {
    setLoggedin("");
  };

  return (
    <>
      <NavDash />
      <div className="w-full min-h-screen bg-zinc-300 p- ">
      {/* <Goals/> */}
        <div className="w-full flex justify-between items-center mb-8">
          <h1 className="text-xl font-medium">
            Welcome, <br />
            <span className="text-3xl font-semibold">💸</span>
          </h1>
          <div className="flex items-center gap-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-lime-400 w-full md:w-[20%] h-52 rounded-md shadow-lg p-4 flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://e7.pngegg.com/pngimages/13/299/png-clipart-money-management-expense-android-angle-personal-finance-thumbnail.png"
              alt="Income Icon"
            />
            <div className="flex items-center gap-2">
              <h1 className="font-medium text-lg">Income:</h1>
              <h2 className="bg-white text-lg font-semibold px-4 py-1 rounded-full shadow-sm">
                ₹2000
              </h2>
            </div>
          </div>

          <div className="bg-blue-500 w-full md:w-[20%] h-52 rounded-md shadow-lg p-4 flex flex-col items-center">
            <div className="flex items-center gap-2 mt-auto">
              <h1 className="font-medium text-lg text-white">Expenses:</h1>
              <h2 className="bg-white text-lg font-semibold px-4 py-1 rounded-full shadow-sm">
                ₹1500
              </h2>
            </div>
          </div>
          
          <div className="bg-pink-500 w-full md:w-[20%] h-52 rounded-md shadow-lg p-4 flex flex-col items-center">
            <div className="flex items-center gap-2 mt-auto">
              <h1 className="font-medium text-lg text-white">Savings:</h1>
              <h2 className="bg-white text-lg font-semibold px-4 py-1 rounded-full shadow-sm">
                ₹500
              </h2>
            </div>
          </div>

          <div className="bg-purple-500 w-full md:w-[20%] h-52 rounded-md shadow-lg p-4 flex flex-col items-center">
            <div className="flex items-center gap-2 mt-auto">
              <h1 className="font-medium text-lg text-white">Investment:</h1>
              <h2 className="bg-white text-lg font-semibold px-4 py-1 rounded-full shadow-sm">
                ₹1000
              </h2>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <Transaction />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
