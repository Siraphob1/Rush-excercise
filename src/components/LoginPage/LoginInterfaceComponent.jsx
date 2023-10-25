
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";

//Axios
import axiosPublic from "../../api/axios";
const LOGIN_URL = '/login';
function LoginInterfaceComponent() {
    const {setAuth} = useAuth();

    const navigate = useNavigate();

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

        return signupData;
    }

    const Login = async (e)=>{
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
                setAuth({accessToken});
                clearInput(); 

                //redirect to mainpage after login success
                navigate('/mainpage');
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

    

    

  return (
        <section className=" bg-white py-[2rem] px-[2.3rem] w-[75%] rounded-lg bg-opacity-90">
            <form onSubmit={(e)=> Login(e)} className=" flex flex-col gap-y-3 ">

                <p className='font-bold text-[2.9rem] mb-4'>Join us and become strong, be fast, be<span className='bg-gradient-to-r from-lime-400 to-lime-600 bg-clip-text text-transparent'> RUSH ―</span></p>

                {/* Email input */}
                <section>
                    <label htmlFor="signup-useremail" className='font-medium'>Email</label>
                    <input  type="text" 
                            id="signup-useremail" 
                            ref={refEmail}
                            placeholder="example@gmail.com" 
                            value={userEmail} 
                            onChange={(e)=>{setUserEmail(e.target.value)}}
                            className="input input-bordered block w-full " 
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