import React from "react";
import { useNavigate } from "react-router";
import NavDash from "./NavDash";

function MainDashboard() {




  return (
    <>
    <NavDash/>
    <div className="w-full h-screen bg-zinc-300 flex justify-center">
      <div className="w-[70%] h-[45%] rounded-3xl bg-gray-600 shadow-lg mt-10 grid grid-cols-3 overflow-hidden ">
        <div className=" cols-span-1 flex flex-col gap-5 justify-center items-center">
          <h1  className="text-xl text-center text-white">Dashboard</h1>
          <div className="border-4 border-sky-500 rounded-full w-48 h-48 overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src="https://i.pinimg.com/736x/b6/56/9e/b6569ecdd6dfabef48092f78d39bd58f.jpg"
              alt="Circular Avatar"
            />
          </div>

          <h1 className="text-lg text-white">Kallu Kalia</h1>
        </div>
        <div className="  bg-yellow-300 cols-span-1"></div>
        <div className="col-span-1 ">
          <img
            className="object-contain relative"
            src="https://i.pinimg.com/736x/67/88/68/678868f43358a0a0112f6cc722313ed6.jpg"
            alt=""
          />
          <button className="px-2 py-1 absolute top-[18vh] right-[16vw] text-lg text-sky-500 bg-gray-300 rounded-lg mt-2 border-0 shadow-lg hover:bg-gray-100">
            Add Info
          </button>
        </div>
      </div>
     </div>
     </>
  );
}

export default MainDashboard;
