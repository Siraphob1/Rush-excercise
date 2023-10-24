import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"


const FormComponent = () => {

    const [userEmail , setUserEmail] = useState('');
    const refEmail = useRef();

    const [emptyEmail , setEmptyEmail] = useState(false);
    const [sendsuccess , setSendsuccess] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        setEmptyEmail(false);
    },[userEmail])


    const sendEmail = (e)=>{
        e.preventDefault();
        detectEmptyInput();
    }

    const detectEmptyInput = ()=>{
        if(!userEmail){
            refEmail.current.focus();
            setEmptyEmail(true);
            setSendsuccess(false);
            return
        }
        clearInput();
        setSendsuccess(true);
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
                    className="input input-bordered w-full " 
            />

            {/* Result when confirm */}
            <div className=" mt-[1rem]">
            {emptyEmail && 
                <div className="alert drop-shadow-md text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>please enter your email</span>
                </div>}
            {sendsuccess && 
                <div className="alert drop-shadow-md text-lime-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Email sent successfully</span>
                </div>
            }
            </div>

            {/* Button */}
            <div className="py-[1rem] flex gap-x-[1rem] justify-center ">
                <button type="button" className="btn  normal-case  w-[100px] h-[30px] " onClick={()=>navigate(-1)}>Cancel</button>
                <button type="submit" className="btn btn-neutral normal-case  w-[100px] h-[30px] ">Confirm</button>
            </div>
        </form>
    </section>
  )
}

export default FormComponent