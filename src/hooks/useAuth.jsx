import { useContext, useDebugValue } from "react";
import MemberContext from "../context/MemberContext";

const useAuth = () =>{
    const {auth} = useContext(MemberContext);
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(MemberContext)
}

export default useAuth;
