/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth"

const RequireAuth = ({children}) => {
    const {auth , persist} = useAuth();
    const location = useLocation();   
   
  return (
    <>
        {auth?.accessToken  ? children 
                            : persist ? children
                                      : <Navigate to="/login" state={{ from: location }} replace />
        }
    </>
  )
}

export default RequireAuth