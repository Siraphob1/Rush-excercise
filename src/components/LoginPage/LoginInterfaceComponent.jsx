import React from 'react'
import { Link } from 'react-router-dom'

function LoginInterfaceComponent() {
  return (
        <section className=" bg-white py-[1rem] px-[2rem] w-[80%]">
            <form className=" flex flex-col gap-y-3 ">
                <section>
                    <label htmlFor="signup-useremail">*Email</label>
                    <input type="text" id="signup-useremail" placeholder="example@gmail.com" className="input input-bordered block w-full " />
                </section>
                <section>
                    <label htmlFor="signup-userpassword">*Password</label>
                    <input type="text" id="signup-userpassword" placeholder="password" className="input input-bordered block w-full " />
                </section>
                <section className=" flex justify-between">
                    <button className="btn btn-accent normal-case  w-[100px] h-[30px] ">Login</button>
                    <Link to={'/'} className="self-center">Forgot password?</Link>
                    <button className="btn btn-accent normal-case  w-[100px] h-[30px] ">Sign up</button>
                </section>
            </form>
        </section>
  )
}

export default LoginInterfaceComponent