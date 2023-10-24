import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const {auth} = useAuth();

    useEffect(()=>{

        // Add a request interceptor
        const requestIntercept = axiosPrivate.interceptors.request.use( (config)=>{

            // Do something before request is sent
            if(!config.headers['Authorization']){
                config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
            }
            return config

        },  //request error
            (error)=> Promise.reject(error)
        );


        // Add a response interceptor
        const responseIntercept = axiosPrivate.interceptors.response.use( 

            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            (response)=> response,
            
            async (error)=>{

                // Any status codes that falls outside the range of 2xx cause this function to trigger
                // Do something with response error
                const prevRequest = error?.config;
                if(error?.response.status === 403 && !prevRequest?.sent){

                    //request for get newAccessToken  if current accessToken expired 
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () =>{
            //remove an interceptor later
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }

    },[auth , refresh])
}

export default useAxiosPrivate