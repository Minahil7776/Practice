import React,{useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
export default function Sign() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:5000/SignUp",{name,email,password})
      console.log(response.data)
      if(response.data === "Account Created"){
        window.alert("Account Created")
        navigate("/Login")
      }
    }
    catch(e){
      console.log(e)
      window.alert("Error")
    }
  } 
  const accountLogin = ()=>{
    navigate("/")
  }

  return (
    <div>
        {/* Navbar */}
        <Navbar/>
    <div className='login-container'>
    <div className='login'>
      <h1>Storyify</h1>
      <div className='input'>
      <input type='text' placeholder='Enter username' id='username' className='input-palce' autoComplete='false' name='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <input type='text' placeholder='Enter Email' id='username' className='input-palce' autoComplete='false' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input type='password' placeholder='Enter password' id='pass' className='input-palce' autoComplete='false' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
      </div>
      <div className='p-btn'>
      <div className='login-btn'>
      <button className='btn' onClick={handleSubmit}>Sign Up</button>
      </div>
      <p>or</p>
      <button className='btn' onClick={accountLogin}>Already have an account</button>
      </div>

    </div>
    </div>
    {/* Footer */}
    <Footer/>
    </div>
  )
}