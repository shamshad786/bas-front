import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './css/register.css';
   
const Register = () => {
   
    const navigate = useNavigate();
    
  
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(false);
const [require, setRequire] = useState(false);

const [loading, setLoading] = useState(false); 


const registeForm = async()=>{

    if(name === "" || email === "" || phone === "" || password === ""){

        setRequire(true);
        return
    }else{
        try{  
            
            setLoading(true);

            const res =   await axios.post(`${process.env.REACT_APP_HOSTURL}/api/v1/userregistration`,{
                  name:  name,
                  email : email,
                  phone: phone,
                  password: password
              });
      
             // console.log('this is response from backend', res)
      
                  if(res.data.status === 201){
                      navigate('/login');
                      setLoading(false);
                  }else if(res.data.status === 500){
                  setError(true);
                  setRequire(false);
              }
      
           
      
          }catch(err){
              console.log('error in sending file ', err)
              setError(true);
          }
    }


}

  return (
    <div className='register-container' style={{"textAlign": 'center'}}>
   {loading ? (
    <div className='loading-div  loading-register-page'>
        <img src="/images/loading.svg" alt="aloding" />
        <h5>Wait We're Register Your Account !!</h5>
    </div>
   ) : null}
    <div className ='register-inner-div'>
        <h1>Register Page</h1>
        <div className='name_div'>

        {/* <div style={{color: 'red', marginBottom: '10px'}}>{error && <span>Email Already Registered</span>}</div> */}
        <div style={{color: 'red', marginBottom: '10px'}}>{require ? (<span>All fields required</span>) : (error && <span>Email Already Registered</span>)}</div>
            <label >Name</label>
            <input type="text" placeholder='Enter your Full Name'   onChange={(e)=> setName(e.target.value)} />
        </div> 
        <div className='email_div'>
            <label >E-mail</label>
            <input type="email" placeholder='Enter your E-mail'   onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className='phone_div'>
            <label >Phone</label>
            <input type="number" placeholder='Enter your phone number'   onChange={(e)=> setPhone(e.target.value)}/>
        </div>
        <div className='password_div'>
            <label >Password</label>
            <input type="date"   onChange={(e)=> setPassword(e.target.value)} />
        </div>

        <div className='submit-div'>
        <button className='button' onClick={registeForm} disabled={loading ? true : false}>Register Now</button>
        <Link to={'/login'}>Already have an account</Link>
        </div>
    </div>
    </div>
  )
}

export default Register