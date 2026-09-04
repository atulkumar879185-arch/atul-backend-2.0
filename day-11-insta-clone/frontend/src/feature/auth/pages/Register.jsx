import React, { useState } from 'react'
import '../style/form.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

async function handlesubmit(e) {
    e.preventDefault()    


axios.post('http://localhost:3000/api/auth/register',{
    username,
    email,
    password
},{
    withCredentials: true
})

.then((response) => {
    console.log("LOGIN SUCCESS:", response.data);
})
.catch((error) => {
    console.log("LOGIN ERROR:", error.response?.status);
    console.log("LOGIN DATA:", error.response?.data);
});
}
  return (
    <div>
      <main>
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handlesubmit}>
                <input 
                onInput={(e)=>{setusername(e.target.value)}}
                type='text' 
                name='username'
                placeholder='enter your username'>                 
                </input>
                <input 
                onInput={(e)=>{setemail(e.target.value)}}
                type='text'
                name='email'
                placeholder='enter your email'>
                </input>
                <input 
                onInput={(e)=>{setpassword(e.target.value)}}
                type='text' 
                name='password'
                placeholder='enter your password'>
                </input>
                <button>Register</button>
            </form>
            <p>already have'an account<Link className='toggleauth' to="/Login"> Login</Link></p>
        </div>
    </main>
    </div>
  )
}
export default Register
