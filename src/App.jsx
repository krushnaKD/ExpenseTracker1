import React, { useState } from "react";
import Login from "./Entry/Login";
import SignUp from "./Entry/SignUp";
import Dashboard from "./Components/Dashboard";

function App() {
  // localStorage.clear()
  const [users, setusers] = useState(null);
  const [Loggedin, setLoggedin] = useState([]);
  const [islogin, setislogin] = useState(true);

  const handletoggle = () => {
    setislogin(!islogin);
  };
  const data = JSON.parse(localStorage.getItem("User"));
  const HandleLoging = (email, password) => {
    console.log("from App", email, password);
    const user = data.find( (e) => email == e.email && password == e.password)
    console.log(user);
    
   if(user === undefined) {
       console.log('not found');
       } 
    if(user) {
      setusers("user")
      setLoggedin(user)
      localStorage.setItem('loggedIn',JSON.stringify({role:"user",Data:user}))
    } 


  };
 console.log(users);
 

  return (
    <>
    <div className="bg-zinc-600 w-full h-screen relative">
    {/* {users === "user" ? <Dashboard/>: <Login HandleLoging={HandleLoging}/> } */}
      
      {users === "user" ? <Dashboard/>: <> {islogin ? <Login HandleLoging={HandleLoging} /> : <SignUp />}
      <button 
        onClick={handletoggle}
        className="mt-4 p-2 bg-blue-500 text-white rounded absolute top-10 left-[90%]">
        Switch to {islogin ? "Sign Up" : "Login"}
      </button>
       </>}
     <Dashboard/>
    </div>
    </>
  );
}

export default App;
