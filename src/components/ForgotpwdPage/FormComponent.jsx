import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axiosPublic from "../../api/axios";


const FormComponent = () => {

    const [userEmail , setUserEmail] = useState('');
    const refEmail = useRef();

    const [sendsuccess , setSendsuccess] = useState(false);

    const [isSending , setIsSending] = useState(false);
    const [errMessage , setErrMessage] = useState('')
    const navigate = useNavigate();
    const API_URL = `/forgotpassword`

    useEffect(()=>{
        setErrMessage('');
    },[userEmail])


    const sendEmail = async (e)=>{
        e.preventDefault();
        if(!userEmail){
            refEmail.current.focus();
            setErrMessage('please enter your email')            
            return false
        }
        
        //format data 
        const reqbody = {
            email:userEmail
        }

        setIsSending(true)
        //sendAPI        
        try {
            const resposne = await axiosPublic.post(API_URL, reqbody)
            // console.log(resposne);
            clearInput();    
            setSendsuccess(true);      
        } catch (error) {
            // console.log(error.response);            
            setErrMessage('this email not found')
        }
        setIsSending(false)

        
    }


    const clearInput = ()=>{
        setUserEmail('');
    }

  return (
    <section className=" bg-white bg-opacity-80 py-[3.0rem] px-[3rem] w-[75%] rounded-lg flex flex-col items-center gap-y-[1rem] ">
        <h1 className="font-bold text-[1.5rem]">Forgot Password</h1>
        <h2 className="font-medium text-center text-[1.1rem]">Please put your email.</h2>
        <h2 className="font-medium text-center text-[1.1rem] -mt-3">We’ll send you a link to reset your password</h2>
        <form onSubmit={(e)=>sendEmail(e)} className="w-full">

            {/* Email input */}
            <input  type="text" 
                    placeholder="example@gmail.com" 
                    ref={refEmail}
                    value={userEmail} 
                    onChange={(e)=>{setUserEmail(e.target.value)}}
                    onFocus={()=>{setSendsuccess(false)}}
                    className="input input-bordered w-full " 
            />

            {/* Result when confirm */}
            <div className=" mt-[1rem]">            
                {/* when error  */}
                {errMessage && 
                    <div className="alert drop-shadow-md text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{errMessage}</span>
                    </div>
                }

                {/* when send email finish and success */}
                {sendsuccess && 
                    <div className="alert drop-shadow-md text-lime-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Email sent successfully</span>
                    </div>
                }       

                {/* while sending email      */}
                {isSending &&
                    <div className="w-full  flex justify-center mt-[2rem]">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                }
            </div>

            {/* Button */}
            <div className=" pt-[2rem] pb-[1rem] flex gap-x-[1rem] justify-center ">
                <button type="button" className="btn  normal-case  w-[100px] h-[30px] " onClick={()=>navigate(-1)}>Cancel</button>
                <button type="submit" className="btn btn-neutral normal-case  w-[100px] h-[30px] ">Confirm</button>
            </div>
        </form>
    </section>
  )
}

export default FormComponent