/* eslint-disable react/prop-types */
import { Navigate, useLocation , useNavigate } from "react-router";
import useAuth from "../hooks/useAuth"
import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";


const RequireAuth = ({children}) => {
    const {auth} = useAuth();
    const refresh = useRefreshToken();
    const location = useLocation();
    const navigate = useNavigate();
    const [refreshedFinished , setRefreshedFinished] = useState(false);
    useEffect(()=>{
      
      const printnewToken = async () =>{
        try {

          //get newaccessToken sucess
          const newtoken = await refresh();              
          console.log(`newtoken: ${newtoken}`);
          console.log(location)
          setRefreshedFinished(true)
        } catch (error) {
          //token expired redirect to login page
          navigate('/login')
        }
      }

      printnewToken();
    },[])
  return (
    <>
        {!refreshedFinished  ? children
                            : auth?.accessToken   ? children
                                                  : <Navigate to="/login" state={{ from: location }} replace />
        }
    </>
  )
}

export default RequireAuth