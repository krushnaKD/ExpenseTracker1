import React from "react";
import { Link } from "react-router";

function NavDash() {
  return (
    <div className="w-full min-h-[50px] bg-zinc-300 flex justify-between items-center p-4 ">
     <Link className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 text-lg rounded-lg shadow-md transition-all duration-300" to="/Dashboard">Dashboard</Link>
     <div className="flex w-[20%] justify-between">
     <Link className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 text-lg rounded-lg shadow-md transition-all duration-300" to="/MainDashboard">Information</Link>
      <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-md transition-all duration-300">
        Logout
      </button>
     </div>
    </div>
  );
}

export default NavDash;
