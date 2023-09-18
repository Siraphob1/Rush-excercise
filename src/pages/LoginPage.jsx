import React from 'react'

function LoginPage() {
  return (
    <div>
        <form>
            <label>*Email</label>
            <input type="text" placeholder='example@gmail.com' />
            <label>*Passwaord</label>
            <input type="text" placeholder='password' />

            <button type="submit">Login</button>
            <p>Forgot password?</p>
            <button type="submit">Signup</button>
        </form>

            <h1>RUSH</h1>
            <p>Exercise not only changes your body,<br/> it changes your mind</p>
    </div>
  )
}

export default LoginPage