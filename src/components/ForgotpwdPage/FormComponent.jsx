import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"


const FormComponent = () => {

    const [userEmail , setUserEmail] = useState('');
    const refEmail = useRef();

    const navigate = useNavigate();


  return (
    <section className=" bg-white py-[1rem] px-[2rem] w-[80%] rounded-lg">
        <h1>Forgot your password ?</h1>
        <h2>Please put your email in form. we’ll send you a link to reset your password</h2>
        <form >
            <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full " />
            <div className="">
                <button type="button" className="btn normal-case  w-[100px] h-[30px] " onClick={()=>navigate(-1)}>Cancel</button>
                <button type="submit" className="btn normal-case  w-[100px] h-[30px] ">Confirm</button>
            </div>
        </form>
    </section>
  )
}

export default FormComponent