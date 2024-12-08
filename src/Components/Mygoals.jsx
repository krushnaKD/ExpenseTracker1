import React from "react";

const Mygoals = () => {
  return (
    <div className="w-1/2 mt-10 h-[40vh] bg-white shadow-lg rounded-lg p-5 overflow-auto no-scrollbar">
      <div className="flex justify-between">
        <h1>My Goals</h1>
        <button className="bg-blue-500 px-3 py-1 rounded-lg  hover:bg-blue-300">
          Add Goals
        </button>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="w-full p-3 flex mt-10 h-12 bg-yellow-300 rounded-md items-center justify-between">
          <h1>New Car</h1>
          <div className="flex">
            <h2>$1000</h2>/<h2>$2000</h2>
          </div>
        </div>
        <div className="w-full p-3 flex  h-12 bg-yellow-300 rounded-md items-center justify-between">
          <h1>New Car</h1>
          <div className="flex">
            <h2>$1000</h2>/<h2>$2000</h2>
          </div>
        </div>
        <div className="w-full p-3 flex  h-12 bg-yellow-300 rounded-md items-center justify-between">
          <h1>New Car</h1>
          <div className="flex">
            <h2>$1000</h2>/<h2>$2000</h2>
          </div>
        </div>
        <div className="w-full p-3 flex  h-12 bg-yellow-300 rounded-md items-center justify-between">
          <h1>New Car</h1>
          <div className="flex">
            <h2>$1000</h2>/<h2>$2000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mygoals;
