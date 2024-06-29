import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

export default function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
     const response = await axios.post("http://localhost:5000/Login",{email,password})
     if(response.data.message === "Login successfully"){
      window.alert("Login successfully")
      navigate("/upload-article")
     }
    }
    catch(e){
      console.log(e)
      window.alert("Error")
    }
  }
  const createAccount = ()=>{
    navigate("/SignUp")
  }

  return (
   <div>
    {/* Navbar */}
     <Navbar/>
    <div className='login-container'>
    <div className='login'>
      <h1>Storyify</h1>
      <div className='input'>
      <input type='text' placeholder='Enter email' id='username' className='input-palce' autoComplete='false' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input type='password' placeholder='Enter password' id='pass' className='input-palce' autoComplete='false' name="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
      </div>
      <div className='p-btn'>
      <div className='login-btn'>
      <button className='btn' onClick={handleSubmit}>Login</button>
      </div>
      <p>or</p>
      <button className='btn' onClick={createAccount}>Create an account</button>
      </div>
    </div>
    </div>
    {/* Footer */}
    <Footer/>
    </div>
  )
}