import jwtDecode from "jwt-decode";
import axiosPublic from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const {auth ,setAuth} = useAuth();
  
  //fetch API for get new accessToken
  const refresh = async () =>{
        const response = await axiosPublic.get('/refresh');        
        const decoded = jwtDecode(response.data.accessToken);
        const userID = decoded?.userID;     
          setAuth({...auth ,accessToken:response.data.accessToken , userID})      
          return response.data.accessToken;
        
        
  }

  return refresh;

};

export default useRefreshToken