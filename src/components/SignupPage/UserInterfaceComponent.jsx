import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//icon
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";

//Regex
const regexName = /^\w.{7,}/g;
const regexPassword = /[@#*$_]+[A-Z]+.{6,}|[@#*$_]+.+[A-Z]+.{5,}|[A-Z]+.+[@#*$_]+.{5,}|[A-Z]+[@#*$_]+.{6,}|.+[@#*$_]+[A-Z]+.{5,}|.+[A-Z]+[@#*$_]+.{5,}/;

const UserInterfaceComponent = () => {
    const [username , setUsername] = useState('');
    const [validName , setValidName] = useState(false)
    const [focusName , setFocusName] = useState(false)
    
    const [email , setEmail] = useState('');

    const [password , setPassword] = useState('');
    const [validPassword , setValidPassword] = useState(false);
    const [focusPassword , setFocusPassword] = useState(false);

    const [confirmpassword , setConfirmpassword] = useState('');
    const [validConfirmPassword , setValidConfirmPassword] = useState(false);
    const [focusConfirmPassword , setFocusConfirmPassword] = useState(false);
    
    const [togglePassword , setTogglePassword] = useState(false)
    const [toggleConfirmPassword , setToggleConfirmPassword] = useState(false)
    

    useEffect(()=>{
        setValidName(regexName.test(username))        
    },[username])

    useEffect(()=>{
        setValidPassword(regexPassword.test(password))        
    },[password])
    
    useEffect(()=>{
        const ismatch = validPassword && (password === confirmpassword)
        setValidConfirmPassword(ismatch)    
    },[password,confirmpassword,validPassword])


    // handle function
    const switchTogglePassword = (e)=>{
        e.preventDefault()
        const prevtoggle = togglePassword;
        setTogglePassword(!prevtoggle)
    }
   
    const switchConfirmTogglePassword = (e)=>{
        e.preventDefault()
        const prevtoggle = toggleConfirmPassword;
        console.log(!prevtoggle)
        setToggleConfirmPassword(!prevtoggle)
    }

  return (
    <section className=" bg-white py-[1rem] px-[2rem] w-[80%]">
        <form className=" flex flex-col gap-y-3">

            {/* Username */}
            <section>
                <label  htmlFor="signup-username">*Username</label>
                <input  type="text" id="signup-username" placeholder="Mr.xxxxxxx" className="input input-bordered block  w-full"
                        value={username} 
                        onChange={(e)=>{setUsername(e.target.value)}}
                        onFocus={()=>setFocusName(true)}
                        onBlur={()=>setFocusName(false)}
                 />
                {focusName && !validName&& 
                    <p>at least 8 char</p>
                }                
            </section>

            {/* Email */}
            <section>
                <label  htmlFor="signup-useremail">*Email</label>
                <input  type="text" id="signup-useremail" placeholder="example@gmail.com" className="input input-bordered block w-full" 
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}}                        
                />
            </section>

            {/* Password */}
            <section>
                <label  htmlFor="signup-userpassword">*Password</label>
                <div className=" relative">
                    <input  type={togglePassword ?"text" :'password'} id="signup-userpassword" placeholder="password" className="input input-bordered block w-full" 
                            value={password} 
                            onChange={(e)=>{setPassword(e.target.value)}}
                            onFocus={()=>setFocusPassword(true)}
                            onBlur={()=>setFocusPassword(false)}
                    />
                    <button className=" absolute right-[1rem] bottom-[1rem]"
                            onClick={(e)=>switchTogglePassword(e)}>{togglePassword ?<IoEyeOutline/>:<IoEyeOffOutline/>}</button>                            
                </div>
                {focusPassword && !validPassword&& 
                    <p>at least 8 character</p>
                }
            </section>
            
            {/* Confirm Password */}
            <section>
                <label  htmlFor="signup-userconfirmpassword">*Confirm Password</label>
                <div className=" relative">
                    <input  type={toggleConfirmPassword ?"text" :'password'} id="signup-userconfirmpassword" placeholder="confirm Password" className="input input-bordered block w-full" 
                            value={confirmpassword} 
                            onChange={(e)=>{setConfirmpassword(e.target.value)}}
                            onFocus={()=>setFocusConfirmPassword(true)}
                            onBlur={()=>setFocusConfirmPassword(false)}
                    />
                    <button className=" absolute right-[1rem] bottom-[1rem]"
                            onClick={(e)=>switchConfirmTogglePassword(e)}>{toggleConfirmPassword ?<IoEyeOutline/>:<IoEyeOffOutline/>}</button>                            
                </div>

                
                {focusConfirmPassword && !validConfirmPassword&& 
                    <div>
                        <p>password != confirmpassword</p>
                        <p>at least 8 character</p>
                    </div>
                }
            </section>

            <Link to={'/'} className="self-center">Forgot password?</Link>
            <section className=" flex justify-between">
                <button className="btn btn-accent normal-case  w-[100px] h-[30px] ">cancel</button>
                <button className="btn btn-accent normal-case  w-[100px] h-[30px] ">confirm</button>
            </section>
        </form>
    </section>
  )
}

export default UserInterfaceComponent