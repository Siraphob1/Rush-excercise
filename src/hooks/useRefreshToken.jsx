import axiosPublic from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const {auth ,setAuth} = useAuth();
  
  //fetch API for get new accessToken
  const refresh = async () =>{
        const response = await axiosPublic.get('/refresh');
        if(response.status === 200){
            setAuth({...auth ,accessToken:response.data.accessToken})
            return response.data.accessToken;
        }
        
  }

  return refresh;

};

export default useRefreshToken