import React, { createContext, useEffect, useState } from 'react'

export const Mycontext = createContext()


const Usercontext = (props) => {
const [globalData, setglobalData] = useState(null);

useEffect(()=>{
  const data = JSON.parse(localStorage.getItem("User"))
  setglobalData(data)
},[])

// console.log(globalData);
  return (
   <Mycontext.Provider value={{globalData,setglobalData}}>
{props.children}
   </Mycontext.Provider>
  )
}

export default Usercontext
