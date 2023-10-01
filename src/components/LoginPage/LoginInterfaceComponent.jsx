
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function LoginInterfaceComponent() {
    const [userEmail , setUserEmail] = useState('');
    const [userPassword , setUserPassword] = useState('');

    const refEmail = useRef();
    const refPassword = useRef();

    

    const Login = (e)=>{
        e.preventDefault();
        detectEmptyInput();
    }

    const detectEmptyInput = ()=>{
        if(!userEmail) return refEmail.current.focus();
        if(userEmail && !userPassword) return refPassword.current.focus();        
    }

  return (
        <section className=" bg-white py-[1rem] px-[2rem] w-[80%] rounded-lg">
            <form onSubmit={(e)=> Login(e)} className=" flex flex-col gap-y-3 ">

                {/* Email input */}
                <section>
                    <label htmlFor="signup-useremail">*Email</label>
                    <input  type="text" 
                            id="signup-useremail" 
                            ref={refEmail}
                            placeholder="example@gmail.com" 
                            value={userEmail} 
                            onChange={(e)=>{setUserEmail(e.target.value)}}
                            className="input input-bordered block w-full " />
                </section>

                {/* Password input */}
                <section>
                    <label htmlFor="signup-userpassword">*Password</label>
                    <input  type="text" 
                            id="signup-userpassword" 
                            ref={refPassword}
                            placeholder="password" 
                            value={userPassword} 
                            onChange={(e)=>{setUserPassword(e.target.value)}}
                            className="input input-bordered block w-full " />
                </section>

                {/* Button */}
                <section className=" flex justify-between py-[1rem] ">
                    <button type='submit' className="btn  normal-case  w-[100px] h-[30px] ">Login</button>
                    <Link to={'/'} className="self-center">Forgot password?</Link>
                    <Link to={'/signup'} className="btn normal-case  w-[100px] h-[30px]">Sign up</Link>
                </section>
            </form>
        </section>
  )
}

export default LoginInterfaceComponent