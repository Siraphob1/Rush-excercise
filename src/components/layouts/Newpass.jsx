import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//icon
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";

import axiosPublic from '../../api/axios';
const RESETPASSWORD_URL = '/forgotpassword/reset';

// Regex
const regexPassword = /[@#*$_]+[A-Z]+.{6,}|[@#*$_]+.+[A-Z]+.{5,}|[A-Z]+.+[@#*$_]+.{5,}|[A-Z]+[@#*$_]+.{6,}|.+[@#*$_]+[A-Z]+.{5,}|.+[A-Z]+[@#*$_]+.{5,}/;


function Newpass() {
  const [isSuccess , SetIsSucess] = useState(false)

  const [password , setPassword] = useState('');
  const [validPassword , setValidPassword] = useState(false);
  const [focusPassword , setFocusPassword] = useState(false);
  const [togglePassword , setTogglePassword] = useState(false);

  const [confirmpassword , setConfirmPassword] = useState('');
  const [validConfirmPassword , setValidConfirmPassword] = useState(false);
  const [focusConfirmPassword , setFocusConfirmPassword] = useState(false);  
  const [toggleConfirmPassword , setToggleConfirmPassword] = useState(false);

  useEffect(()=>{
    // Check format of password
    setValidPassword(regexPassword.test(password));

    // Check format of confirmpassword
    setValidConfirmPassword(regexPassword.test(confirmpassword));
  },[password , confirmpassword])


  const canSendAPI = () =>{
      // password and confirmpassword not empty
      if(!password) return false
      if(!confirmpassword) return false

      // check format password
      if(!validPassword) return false
      if(!validConfirmPassword) return false

      // password = confirmpassword
      if(password != confirmpassword) return  false

      return true
  }

  const submitResetPassword = async () =>{

    //check can send API
    const send = canSendAPI()   
    console.log(send) 
    if(!send) return console.log("can not send API")

    //format data for send API
    const newPasswordData = {
      newpassword:password
    } 

    //test ofline
    SetIsSucess(true)
    //send API
    try {
      console.log("sending API")
      const response = await axiosPublic.put(RESETPASSWORD_URL ,newPasswordData);  
            
            // if(response.status === 200){
            //     // console.log(response) 
            //     const accessToken = response?.data?.accessToken;                
            //     setAuth({accessToken});
            //     clearInput(); 

            //     //redirect to mainpage after login success
            //     navigate('/mainpage');
            // }
            SetIsSucess(true)
      
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
    <div>

      {/* Input email */}
      {!isSuccess && 
       <div className=' h-screen w-[100%]'>
          <div className=' m-20 h-[80%]'>

            <div className='bg-opacity-70 rounded-2xl mx-auto bg-white gap-y-8 flex flex-col  px-20 items-center h-[85%] w-[55%] justify-center shadow-[0_3px_10px_rgb(0,0,0.2)] '>

            <p className='font-bold text-3xl'>Reset Password</p>

            <section className='relative w-[500px]'>
              <label className='font-normal text-[1.1rem]  text-gray-500'>Password</label>
              <input type={togglePassword ? 'text' : 'password'} className='border-2 border-gray-300 w-full h-[40px] rounded-lg input input-bordered' onChange={(e)=>{setPassword(e.target.value)}} value={password} onFocus={()=>{setFocusPassword(true)}} onBlur={()=>{setFocusPassword(false)}}/>
              <button type="button" className=" absolute right-0 top-[1.7rem]  h-[40px] w-[40px] flex justify-center items-center "
                            onClick={()=>{setTogglePassword(!togglePassword)}}>{togglePassword ?<IoEyeOutline/>:<IoEyeOffOutline/>}</button> 
             {focusPassword && !validPassword && 
                <div className=" flex flex-col">
                    <span>*at least 8 character</span>
                    <span>*at least 1 uppercase character</span>
                    <span>*at least 1 special character</span>
                </div>
              }
            </section>
           
            <section className='relative w-[500px]'>
              <label className='font-normal text-[1.1rem] text-gray-500' >Confirm Password</label>
              <input type={toggleConfirmPassword ? 'text' : 'password'} className='border-2 border-gray-300 w-full h-[40px] rounded-lg input input-bordered'  onChange={(e)=>{setConfirmPassword(e.target.value)}} value={confirmpassword} onFocus={()=>{setFocusConfirmPassword(true)}} onBlur={()=>{setFocusConfirmPassword(false)}}/>
              <button type="button" className=" absolute right-0 top-[1.7rem]  h-[40px] w-[40px] flex justify-center items-center "
                            onClick={()=>{setToggleConfirmPassword(!toggleConfirmPassword)}}>{toggleConfirmPassword ?<IoEyeOutline/>:<IoEyeOffOutline/>}</button> 
            
              {focusConfirmPassword && password !== confirmpassword && <p>password not equal confirmpassword</p>}
              {focusConfirmPassword && !validConfirmPassword && 
                <div className=" flex flex-col">
                  <span>*at least 8 character</span>
                  <span>*at least 1 uppercase character</span>
                  <span>*at least 1 special character</span>
                </div>
              }             

            </section>
              
            
                <button className='btn btn-active btn-neutral gap px-20 hover:opacity-60 mt-7' onClick={()=> {submitResetPassword()}}>Submit</button>
            </div>

          </div>
        </div> 
      }

      
        

        {/* Success */}
        {isSuccess && 
          <div className='  h-screen w-[100%]'>
              <div className=' m-20 h-[80%]'>
                <div className='bg-opacity-70 rounded-2xl  mx-auto bg-white gap-y-8 flex flex-col px-20 items-center h-[85%] w-[65%] justify-center rounded-4xl shadow-[0_3px_10px_rgb(0,0,0.2)] '>
                  <p className='font-bold text-3xl'>You're successfully changed your password</p>
                  <Link to={'/login'} className='btn btn-active btn-neutral gap px-20 hover:opacity-60 mt-7'>Back to Login</Link>
                </div>

              </div>
          </div>
        }
    </div>
  )
}

export default Newpass