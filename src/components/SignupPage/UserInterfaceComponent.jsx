import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

//icon
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";
//Regex
const regexName = /^\w.{7,}/;
const regexPassword = /[@#*$_]+[A-Z]+.{6,}|[@#*$_]+.+[A-Z]+.{5,}|[A-Z]+.+[@#*$_]+.{5,}|[A-Z]+[@#*$_]+.{6,}|.+[@#*$_]+[A-Z]+.{5,}|.+[A-Z]+[@#*$_]+.{5,}/;

const UserInterfaceComponent = () => {
    const [username , setUsername] = useState('');
    const [validName , setValidName] = useState(false);
    const [focusName , setFocusName] = useState(false);
    const refUsername = useRef();

    const [email , setEmail] = useState('');    
    const [emailVerify , setEmailVerify] = useState('')
    const refEmail = useRef();

    const [password , setPassword] = useState('');
    const [validPassword , setValidPassword] = useState(false);
    const [focusPassword , setFocusPassword] = useState(false);
    const refPassword = useRef();

    const [confirmpassword , setConfirmpassword] = useState('');
    const [validConfirmPassword , setValidConfirmPassword] = useState(false);
    const [focusConfirmPassword , setFocusConfirmPassword] = useState(false);
    const refConfirmPassword = useRef();
    
    const [togglePassword , setTogglePassword] = useState(false);
    const [toggleConfirmPassword , setToggleConfirmPassword] = useState(false);
    
    const [signupsuccess , setSingupsuccess] = useState(false);


    const navigate = useNavigate();

    useEffect(()=>{
        const result = regexName.test(username)
        setValidName(result);   
    },[username])

    useEffect(()=>{
        setValidPassword(regexPassword.test(password))        
    },[password])
    
    useEffect(()=>{
        const ismatch = validPassword && (password === confirmpassword)
        setValidConfirmPassword(ismatch)    
    },[password,confirmpassword,validPassword])


    // handle function
    const switchTogglePassword = ()=>{
        const prevtoggle = togglePassword;
        setTogglePassword(!prevtoggle)
    }
   
    const switchConfirmTogglePassword = ()=>{
        const prevtoggle = toggleConfirmPassword;
        setToggleConfirmPassword(!prevtoggle)
    }

    const clearForm = () =>{
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmpassword('')
        setTogglePassword(false)
        setToggleConfirmPassword(false)
        setFocusConfirmPassword(false)
    }
    
    const submitForm = (e) =>{
        e.preventDefault()       


        const notEmptyinput = detectEmptyInput()
        if(notEmptyinput){
            // send obj data
            sendAPI();

            //show result text
            setSingupsuccess(true);
            setEmailVerify(email)

            //clear input
            clearForm();
        }
    }

    const detectEmptyInput = ()=>{
        if(!validName){
            refUsername.current.focus();
            return setSingupsuccess(false);
        }
        if(!email){
            refEmail.current.focus(); 
            return setSingupsuccess(false);
        }
        if(!validPassword){
            refPassword.current.focus();
            return setSingupsuccess(false);
        }
        if(!validConfirmPassword){
            refConfirmPassword.current.focus();
            return setSingupsuccess(false);
        }
        return true
        


    }

    const sendAPI = ()=>{
        //send API singup
    }

    

  return (
    <section className=" bg-white py-[1rem] px-[2rem] w-[80%] rounded-lg">
        <form onSubmit={(e)=>submitForm(e)} className=" flex flex-col gap-y-3">

            {/* Username */}
            <section>
                <label  htmlFor="signup-username">*Username</label>
                <input  id="signup-username" 
                        className="input input-bordered block  w-full"
                        type="text"                         
                        ref={refUsername}
                        placeholder="Mr.xxxxxxx"                         
                        value={username} 
                        onChange={(e)=>{setUsername(e.target.value)}}
                        onFocus={()=>setFocusName(true)}
                        onBlur={()=>setFocusName(false)}
                 />
                {focusName && !validName&&                  
                <div className="alert drop-shadow-md text-red-600 text-[0.9rem] mt-[0.5rem]">    
                    <span>*at least 8 character</span>
                </div>
                }                
            </section>

            {/* Email */}
            <section>
                <label  htmlFor="signup-useremail">*Email</label>
                <input  id="signup-useremail" 
                        className="input input-bordered block w-full" 
                        type="text"                  
                        ref={refEmail}       
                        placeholder="example@gmail.com"                         
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}}                        
                />
            </section>

            {/* Password */}
            <section>
                <label  htmlFor="signup-userpassword">*Password</label>
                <div className=" relative">
                    <input  id="signup-userpassword"
                            className="input input-bordered block w-full" 
                            type={togglePassword ?"text" :'password'} 
                            ref={refPassword}
                            placeholder="password"                             
                            value={password} 
                            onChange={(e)=>{setPassword(e.target.value)}}
                            onFocus={()=>setFocusPassword(true)}
                            onBlur={()=>setFocusPassword(false)}
                    />
                    <button type="button" className=" absolute right-[1rem] bottom-[1rem]"
                            onClick={switchTogglePassword}>{togglePassword ?<IoEyeOutline/>:<IoEyeOffOutline/>}
                    </button>                            
                </div>
                {focusPassword && !validPassword&& 
                <div className="alert drop-shadow-md text-red-600 text-[0.9rem] mt-[0.5rem]">                        
                    <div className=" flex flex-col">
                        <span>*at least 8 character</span>
                        <span>*at least 1 uppercase character</span>
                        <span>*at least 1 special character</span>
                    </div>
                </div>
                }
            </section>
            
            {/* Confirm Password */}
            <section>
                <label  htmlFor="signup-userconfirmpassword">*Confirm Password</label>
                <div className=" relative">
                    <input  id="signup-userconfirmpassword" 
                            className="input input-bordered block w-full" 
                            type={toggleConfirmPassword ?"text" :'password'} 
                            ref={refConfirmPassword}
                            placeholder="confirm Password"                             
                            value={confirmpassword} 
                            onChange={(e)=>{setConfirmpassword(e.target.value)}}
                            onFocus={()=>setFocusConfirmPassword(true)}
                            onBlur={()=>setFocusConfirmPassword(false)}
                    />
                    <button type="button" className=" absolute right-[1rem] bottom-[1rem]"
                            onClick={switchConfirmTogglePassword}>{toggleConfirmPassword ?<IoEyeOutline/>:<IoEyeOffOutline/>}</button>                            
                </div>

                
                {focusConfirmPassword && !validConfirmPassword&&                     
                     <div className="alert drop-shadow-md text-red-600 text-[0.9rem] mt-[0.5rem]">                        
                        <div className=" flex flex-col">
                            <span>you must enter the same as password</span>
                            <span>*at least 8 character</span>
                            <span>*at least 1 uppercase character</span>
                            <span>*at least 1 special character</span>
                        </div>
                    </div>
                }
            </section>

            {/* Result signup successfully */}
            {signupsuccess && 
            <div className="alert drop-shadow-md text-green-700 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div className="flex flex-col">
                <span>sign up successfully</span>
                <p>
                    <span>Please verify email</span>
                    <span className="ml-[1rem] text-gray-400 font-semibold">{emailVerify}</span>
                </p>
                </div>
            </div>
            }

            <Link to={'/forgotpassword'} className="self-center">Forgot password?</Link>
            <section className=" flex justify-center py-[1rem] gap-x-[1rem]">
                <button type="button" className="btn normal-case  w-[100px] h-[30px] " onClick={()=>navigate(-1)}>cancel</button>
                <button type="submit" className="btn btn-neutral normal-case  w-[100px] h-[30px] ">confirm</button>
            </section>
        </form>
    </section>
  )
}

export default UserInterfaceComponent