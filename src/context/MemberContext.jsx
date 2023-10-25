/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const MemberContext = createContext({});

export const MemberProvider = ({children})=>{

    const [auth , setAuth] = useState({});
    const [activity , setActivity] = useState({});
    const [persist , setPersist] = useState(JSON.parse(localStorage.getItem("persist"))|| false);
    const [toggleUpdate , setToggleUpdate] = useState(false);
    

    //export to use in another component
    return(
        <MemberContext.Provider value={{ auth ,setAuth , persist ,setPersist , activity ,setActivity , toggleUpdate , setToggleUpdate}}>
            {children}
        </MemberContext.Provider>
    )
}

export default MemberContext;