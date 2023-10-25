import axiosPublic from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const {setAuth , setActivity} = useAuth();

    const logout = async () =>{
            setAuth({});
            try {
                const response = await axiosPublic.get('/logout');
                //clear
                setAuth({});
                setActivity({});
            } catch (error) {
                // console.error(error);
            }
    }
    return logout
  
}

export default useLogout