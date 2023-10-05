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
    }
    
    const submitForm = (e) =>{
        e.preventDefault()
        validName ? null : refUsername.current.focus();
        if(validName){
            email ? null : refEmail.current.focus(); 
        }
        if(validName && email){
            validPassword ? null : refPassword.current.focus();
        }
        if(validName && email && validPassword){
            validConfirmPassword ? null : refConfirmPassword.current.focus();
        }
        if(validName && email && validPassword && validConfirmPassword){
            // send obj data

            //clear input
            clearForm();
            
        }
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
                 <div className=" text-red-500 mt-[0.5rem]">
                    <p>*at least 8 character</p>
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
                    <div className=" text-red-500 mt-[0.5rem]">
                        <p>*at least 8 character</p>
                        <p>*at least 1 uppercase character</p>
                        <p>*at least 1 special character</p>
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
                    <div className=" text-red-500 text-[0.9rem] mt-[0.5rem]">
                        <p>you must enter the same as password</p>
                        <p>*at least 8 character</p>
                        <p>*at least 1 uppercase character</p>
                        <p>*at least 1 special character</p>
                    </div>
                }
            </section>

            <Link to={'/forgotpassword'} className="self-center">Forgot password?</Link>
            <section className=" flex justify-between py-[1rem]">
                <button type="button" className="btn normal-case  w-[100px] h-[30px] " onClick={()=>navigate(-1)}>cancel</button>
                <button type="submit" className="btn normal-case  w-[100px] h-[30px] ">confirm</button>
            </section>
        </form>
    </section>
  )
}

export default UserInterfaceComponent