import React, { createContext, useState } from 'react'

export const infocontext = createContext()
const InfoContext = (props) => {
    const [addData, setaddData] = useState(null);
  return (
 <infocontext.Provider value={{addData,setaddData}}>
  {props.children}
 </infocontext.Provider>
  )
}

export default InfoContext
