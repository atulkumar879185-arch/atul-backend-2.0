import React, { useState } from 'react'
import '../style/form.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    async function handlesubmit(e) {
        e.preventDefault()
    

    axios.post('http://localhost:3000/api/auth/login', {
        username,
        password
    },{
        withCredentials:true
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
        <main>
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handlesubmit}>
                    <input
                        onInput={(e) => { setusername(e.target.value) }}
                        type='text' placeholder='enter your username'
                        name='username'></input>
                    <input
                        onInput={(e) => { setpassword(e.target.value) }}
                        type='text' placeholder='enter your password'
                        name='password'></input>
                    <button>Login</button>
                </form>
                <p>Dont have'an account<Link className='toggleauth' to="/register"> Register</Link></p>
            </div>
        </main>
    )
}

export default Login
