import { Link } from "react-router-dom"


const UserInterfaceComponent = () => {
  return (
    <section className=" bg-white py-[1rem] px-[2rem] w-[80%]">
        <form className=" flex flex-col gap-y-3 border border-black">
            <section>
                <label htmlFor="signup-username">*Username</label>
                <input type="text" id="signup-username" placeholder="Mr.xxxxxxx" className="input input-bordered block  w-full  " />
            </section>
            <section>
                <label htmlFor="signup-useremail">*Email</label>
                <input type="text" id="signup-useremail" placeholder="example@gmail.com" className="input input-bordered block w-full " />
            </section>
            <section>
                <label htmlFor="signup-userpassword">*Password</label>
                <input type="text" id="signup-userpassword" placeholder="password" className="input input-bordered block w-full " />
            </section>
            <section>
                <label htmlFor="signup-userconfirmpassword">*Confirm Password</label>
                <input type="text" id="signup-userconfirmpassword" placeholder="confirm Password" className="input input-bordered block w-full " />
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