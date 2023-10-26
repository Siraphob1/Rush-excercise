import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

//icon
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";

import axiosPublic from '../../api/axios';

// Regex
const regexPassword = /[@#*$_]+[A-Z]+.{6,}|[@#*$_]+.+[A-Z]+.{5,}|[A-Z]+.+[@#*$_]+.{5,}|[A-Z]+[@#*$_]+.{6,}|.+[@#*$_]+[A-Z]+.{5,}|.+[A-Z]+[@#*$_]+.{5,}/;


function Newpass() {

  const [password , setPassword] = useState('');
  const [validPassword , setValidPassword] = useState(false);
  const [focusPassword , setFocusPassword] = useState(false);
  const [togglePassword , setTogglePassword] = useState(false);
  const refPassword = useRef();

  const [confirmpassword , setConfirmPassword] = useState('');
  const [validConfirmPassword , setValidConfirmPassword] = useState(false);
  const [focusConfirmPassword , setFocusConfirmPassword] = useState(false);  
  const [toggleConfirmPassword , setToggleConfirmPassword] = useState(false);
  const refConfirmPassword = useRef();
  
  const [isSending ,setIsSending] = useState(false);
  const [sendFinish , setSendFinish] = useState(false);
  const [errMessage ,setErrMessage] = useState('');

  
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const API_URL = `/forgotpassword/reset?token=${token}`

  useEffect(()=>{
    // Check format of password
    setValidPassword(regexPassword.test(password));

    // Check format of confirmpassword
    setValidConfirmPassword(regexPassword.test(confirmpassword));
  },[password , confirmpassword])


  const canSendAPI = () =>{
      // password and confirmpassword not empty
      if(!password){
        refPassword.current.focus();
        return false
      }
      
      if(!confirmpassword){
        refConfirmPassword.current.focus();
        return false
      }
      // check format password
      if(!validPassword){
        refPassword.current.focus();
        return false
      }
      if(!validConfirmPassword){
        refConfirmPassword.current.focus();
        return false
      }

      // password = confirmpassword
      if(password != confirmpassword) return  false

      return true
  }

  const submitResetPassword = async () =>{

    //check can send API
    const send = canSendAPI()   
    // console.log(send)
    // console.log("can not send API") 
    if(!send) return 

    //format data for send API
    const newPasswordData = {
      newpassword:password
    } 

    


    setIsSending(true)
    //send API
    try {
      
      const response = await axiosPublic.put(API_URL ,newPasswordData);  
        setIsSending(false)
      
    } catch (error) {      
     
      //this error cannot handle
       if(!error?.response){
          setErrMessage('No Server Response')
          return
      }
      // console.log(error.response)          
      setErrMessage('Time is up for Reset password')
      setIsSending(false)
    }
    setSendFinish(true)
    
  }

  return (
    <div>

      {/* Input email */}
      {!sendFinish && 
        <div className=' h-screen w-[100%]'>
          <div className=' m-20 h-[80%]'>

            <div className='bg-opacity-70 rounded-2xl mx-auto bg-white gap-y-8 flex flex-col  px-20 items-center h-[85%] w-[55%] justify-center shadow-[0_3px_10px_rgb(0,0,0.2)] '>

            <p className='font-bold text-3xl text-gray-900'>Reset Password</p>

            <section className='relative w-[500px]'>
              <label className='font-normal text-[1.1rem]  text-gray-900'>Password</label>
              <input  type={togglePassword ? 'text' : 'password'} 
                      className='border-2 border-gray-300 w-full h-[40px] rounded-lg input input-bordered' 
                      onChange={(e)=>{setPassword(e.target.value)}} 
                      value={password} 
                      ref={refPassword}
                      onFocus={()=>{setFocusPassword(true)}} 
                      onBlur={()=>{setFocusPassword(false)}}
              />
              <button type="button" 
                      className=" absolute right-0 top-[1.7rem]  h-[40px] w-[40px] flex justify-center items-center "
                      onClick={()=>{setTogglePassword(!togglePassword)}}>{togglePassword ?<IoEyeOutline/>:<IoEyeOffOutline/>}
              </button> 
             {focusPassword && !validPassword && 
                <div className=" flex flex-col text-red-600">
                    <span>*at least 8 character</span>
                    <span>*at least 1 uppercase character such as  @#*$_</span>
                    <span>*at least 1 special character</span>
                </div>
              }
            </section>
           
            <section className='relative w-[500px]'>
              <label className='font-normal text-[1.1rem] text-gray-900' >Confirm Password</label>
              <input  type={toggleConfirmPassword ? 'text' : 'password'} 
                      className='border-2 border-gray-300 w-full h-[40px] rounded-lg input input-bordered'  
                      onChange={(e)=>{setConfirmPassword(e.target.value)}} 
                      value={confirmpassword} 
                      ref={refConfirmPassword}
                      onFocus={()=>{setFocusConfirmPassword(true)}} 
                      onBlur={()=>{setFocusConfirmPassword(false)}}/>
              <button type="button" className=" absolute right-0 top-[1.7rem]  h-[40px] w-[40px] flex justify-center items-center "
                            onClick={()=>{setToggleConfirmPassword(!toggleConfirmPassword)}}>{toggleConfirmPassword ?<IoEyeOutline/>:<IoEyeOffOutline/>}</button> 
            
              {focusConfirmPassword && password !== confirmpassword && <p className='text-red-600'>password not equal confirmpassword</p>}
              {focusConfirmPassword && !validConfirmPassword && 
                <div className=" flex flex-col text-red-600">
                  <span>*at least 8 character</span>
                  <span>*at least 1 uppercase character such as  @#*$_</span>
                  <span>*at least 1 special character</span>
                </div>
              }             

            </section>
              
            {isSending  && <span className="loading loading-spinner loading-lg text-black"></span>
            }  
                <button className='btn btn-active btn-neutral gap px-20 hover:opacity-60 mt-7' onClick={()=> {submitResetPassword()}}>Submit</button>
            </div>

          </div>
        </div> 
      }

      
        
        {/* Result */}
        {/* Success */}
        {sendFinish && 
          <div className='  h-screen w-[100%]'>
              <div className=' m-20 h-[80%]'>
                <div className='bg-opacity-70 rounded-2xl  mx-auto bg-white gap-y-8 flex flex-col px-20 items-center h-[85%] w-[65%] justify-center rounded-4xl shadow-[0_3px_10px_rgb(0,0,0.2)] '>
                            
                  {                             
                    errMessage  ? <p className='font-bold text-3xl text-red-600'>{errMessage}</p>
                                : <p className='font-bold text-3xl text-black'>You&apos; re successfully changed your password</p>
                  }                  
                  <Link to={'/login'} className='btn btn-active btn-neutral gap px-20 hover:opacity-60 mt-7'>Back to Login</Link>
                </div>

              </div>
          </div>
        }
    </div>
  )
}

export default Newpass