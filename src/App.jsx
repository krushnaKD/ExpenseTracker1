import React, { useContext, useEffect, useState } from "react";
import Login from "./Entry/Login";
import SignUp from "./Entry/SignUp";
import Dashboard from "./Components/Dashboard";
import Userinfo from "./Userinformation/Userinfo";
import Usercontext, { Mycontext } from "./UserContext/Usercontext";
import { infocontext } from "./UserContext/InfoContext";
import MainDashboard from "./Components/MainDashboard";
import { Route, Routes } from "react-router";
import Goals from "./Data/Goals";

function App() {
  // localStorage.clear()
  const {addData, setaddData} =   useContext(infocontext)
console.log(addData);
useEffect(()=>{

},[addData])

  const [users, setusers] = useState(null);
  const [Loggedin, setLoggedin] = useState([]);
  const [islogin, setislogin] = useState(true);
  // const [globalData,setglobalData] = useContext(Mycontext)

  // useEffect(()=>{
  //   localStorage.getItem('loggedIn')
  // })

  const handletoggle = () => {
    setislogin(!islogin);
  };
  const data = JSON.parse(localStorage.getItem("User")) ;
  console.log(data);
  const HandleLoging = (email, password) => {
    console.log("from App", email, password);
    const user = data.find((e) => email == e.email && password == e.password);
    console.log(user);

    if (user === undefined) {
      console.log("not found");
    }
    
    if (user) {
      setusers("user");
      setLoggedin(user);
      localStorage.setItem(
        "loggedIn",
        JSON.stringify({ role: "user", Data: user,info:addData })
      );
    }
  };

  console.log(Loggedin);

  return (
    <>
    
      <div className="bg-zinc-600 w-full h-screen relative">
   
        {users === "user" ? (
     <Routes>
     <Route path="/MainDashboard" element={<MainDashboard  />}/>
     <Route path="/Dashboard" element={<Dashboard Userinfo={{Loggedin,setLoggedin}}/>}/>
   </Routes>
        ) : (
          <>
            {" "}
            {islogin ? <Login HandleLoging={HandleLoging} /> : <SignUp />}
            <button
              onClick={handletoggle}
              className="mt-4 p-2 bg-blue-500 text-white rounded absolute top-10 left-[90%]"
            >
              Switch to {islogin ? "Sign Up" : "Login"}
            </button>
          </>
        )}
      {/* <Goals/> */}
      </div>
    
    </>
  );
}

export default App;
