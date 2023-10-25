
import { useEffect, useRef, useState } from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";
import useAuth from '../../hooks/useAuth';


//Axios
import axiosPublic from "../../api/axios";
import jwtDecode from 'jwt-decode';
const LOGIN_URL = '/login';
function LoginInterfaceComponent() {
    const {setAuth , persist, setPersist} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const prevpage = location.state?.from?.pathname || "/mainpage"

    const [userEmail , setUserEmail] = useState('');
    const refEmail = useRef();


    const [userPassword , setUserPassword] = useState('');
    const refPassword = useRef();
    const [togglePassword , setTogglePassword] = useState(false);
    
    const detectEmptyInput = ()=>{
        if(!userEmail){
            refEmail.current.focus();
            return true;
        }
        if(!userPassword){
            refPassword.current.focus();   
            return true;
        }
        return false
    }

    const clearInput = ()=>{
        setUserEmail('');
        setUserPassword('');
        setTogglePassword(false)
    }

    const createLoginData = () =>{        

        //format input to  object data
        const signupData = {
            email:userEmail,
            password:userPassword,
        }

        //The result will be a string following the JSON notation.
        return  JSON.stringify(signupData);
    }

    const submitLogin = async (e)=>{
        e.preventDefault();

        //check email and password not empty
        const isEmptyinput = detectEmptyInput();
        if(isEmptyinput) return

        //generate signup data
        const loginData = createLoginData();  

        // send obj data to Backend
        try {
            const response = await axiosPublic.post(LOGIN_URL ,loginData);  
            
            if(response.status === 200){
                // console.log(response) 
                const accessToken = response?.data?.accessToken;   
                const decoded = jwtDecode(accessToken);                                        
                const userID = decoded?.userID;     
                setAuth({accessToken, userID});
                clearInput(); 

                //redirect to  mainpage    if login success
                navigate(prevpage , {replace:true});
            }
        } catch (error) {
            //this error cannot handle
            if(!error?.response){
                console.log('No Server Response')
                return
            }
            
            //this error can handle 
            else if(error.response?.status === 400){
                //miss email or password
                console.log(error.response.data.message)
            }            
            else if(error.response?.status === 401){
                //user is not verify email yet 
                console.log(error.response.data.message)
            }
            else if(error.response?.status === 404){
                //this email  is not signup 
                console.log(error.response.data.message)
            }
        }
        
    }

    const togglePersist = () => {
        setPersist(!persist);
    }

    useEffect(() => {
        localStorage.setItem("persist" , persist);        
    },[persist])

    

    

  return (
        <section className=" bg-white py-[1rem] px-[2.1rem] w-[75%] rounded-lg">
            <form onSubmit={(e)=> submitLogin(e)} className=" flex flex-col gap-y-3 ">

                <p className='font-bold text-[2.9rem]'>Join us and become strong, be fast,</p> 
                <p className='font-bold text-[2.9rem] -mt-2 text-lime-400'> be RUSH ―</p>

                {/* Email input */}
                <section>
                    <label htmlFor="signup-useremail" className='font-medium'>Email</label>
                    <input  type="text" 
                            id="signup-useremail" 
                            ref={refEmail}
                            placeholder="example@gmail.com" 
                            value={userEmail} 
                            onChange={(e)=>{setUserEmail(e.target.value)}}
                            className="input input-bordered block w-full text-gray-900" 
                    />
                </section>

                {/* Password input */}
                <section>
                    <label htmlFor="signup-userpassword" className='font-medium'>Password</label>
                    <div className=' relative'>
                        <input  type={togglePassword ? 'text' : 'password'} 
                                id="signup-userpassword" 
                                ref={refPassword}
                                placeholder="password" 
                                value={userPassword} 
                                onChange={(e)=>{setUserPassword(e.target.value)}}
                                className="input input-bordered block w-full pr-[3rem] " 
                        />
                        <button type="button" className=" absolute right-[1rem] bottom-[1rem]"
                            onClick={()=>setTogglePassword(!togglePassword)}>{togglePassword ?<IoEyeOutline/>:<IoEyeOffOutline/>}</button> 
                    </div>
                </section>

                {/* Persist checkbox */}
                <section className='flex items-center'>
                    <input type="checkbox" name="" id="persist" checked={persist} className="checkbox mr-[1rem]" onChange={togglePersist} />
                    <label htmlFor="persist">remember my account</label>
                </section>

                {/* Button */}
                <section className=" flex justify-between py-[1rem] ">
                    <button type='submit' className="btn btn-active btn-neutral normal-case hover:bg-gray-500 focus:outline-none w-[100px] h-[30px] ">Login</button>
                    <Link to={'/forgotpassword'} className="self-center btn normal-case rounded-full px-8">Forgot Password?</Link>
                    <Link to={'/signup'} className="btn btn-active btn-neutral normal-case hover:bg-gray-500 focus:outline-none w-[100px] h-[30px]">Sign up</Link>
                </section>
            </form>
        </section>
  )
}

export default LoginInterfaceComponent