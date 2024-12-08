import React, { useState } from "react";

function SignUp(props) {
  const [data, setData] = useState([]);

  const [firstName, setfirstName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const Signupfunction = (e) => {
    e.preventDefault();
    if(firstName === ''|| email === ''|| password === '') {
      alert("pls press again button ")
    } else {
      setData([...data,  {firstName, email, password }]);
      console.log(data);
      setfirstName("");
      setemail("");
      setpassword("");


    }
  

    localStorage.setItem("User", JSON.stringify(data));

  
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white">
      <form
        onSubmit={(e) =>Signupfunction(e)}
        className="w-1/4 h-[30vh] p-10 flex flex-col border-2 gap-2 border-red-500 rounded-md items-center  "
      >
        <input
          value={firstName}
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
          className="bg-transparent outline-none border-2 border-blue-500 rounded-md "
          type="text"
          placeholder="Enter first Name"
        />
        <input
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          className="bg-transparent outline-none border-2 border-blue-500 rounded-md "
          type="email"
          placeholder="Enter Email"
        />
        <input
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          className="bg-transparent outline-none border-2 border-blue-500 rounded-md"
          type="password"
          placeholder="Enter Password"
        />

          <button className="w-1/2  px-2 py-1 bg-green-500 rounded-lg">
            SignUp
          </button>
 
      </form>
    </div>
  );
}

export default SignUp;
