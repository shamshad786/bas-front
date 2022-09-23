import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';

const Login = () => { 

  const dispatch = useDispatch()

  const loginUserData = useSelector((state)=> state.user)

  console.log('login New State user: ',loginUserData);

const navigate = useNavigate();

const [registrationnumber, setRegistration] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(false);
const [require, setrequire] = useState(false);

const [userData, setUserData] = useState()


const [loading,setLoading] = useState(false);


// console.log(registrationnumber)
// console.log(password)
 console.log(userData)



  const loginHandler = async()=>{

    if(registrationnumber === "" || password === ""){
      setrequire(true);
      console.log('user details required')
      return

    }else{

     try{ 
       
       const userLoggedin =  localStorage.getItem('userinfo')
       if(userLoggedin){
         navigate('/');
        }
        else{
         setLoading(true)
        const res = await axios.post(`${process.env.REACT_APP_HOSTURL}/api/v1`,{
          registrationnumber,
          password
        });
       // console.log(res);
       // console.log(res.data);
       setUserData(res.data);

        if(res.data.status === 200){  
          const{_id, name, registrationnumber} =  res.data.body

          const obj = {
            id:_id,
            name:name,
            registrationnumber: registrationnumber
          }
         

         dispatch(login(obj))

          navigate('/');
          setLoading(false);

        }else if(res.data.status === 300){
          console.log('user already logged in')
        }else if(res.data.status === 404){
          setError(true)
        } else if(res.data.status === 500){
          setError(true)
        }
     }}catch(err){
      console.log(err)
     console.log('something went wrong');
        
     }
    }
  }

  return (
<>
    <div style={{"textAlign": 'center'}}>
    {loading ? (
    <div className='loading-div  loading-register-page'>
        <img src="/images/loading.svg" alt="aloding" />
        <h5>Wait Try To Logged In </h5>
    </div>
   ) : null}
        <h1>Login Page</h1>
        <div style={{color: 'red', marginBottom: '10px'}}>{require ? (<span>All fields required</span>) : (error && <span>Wrong Reg No. & password</span>)}</div>
        <div>
            <label>Registration Number</label>
            <input type="number" placeholder='enter your registration number' onChange={(e)=> setRegistration(e.target.value)} />
        </div>
        <div>
            <label>Password</label>
            <input type="date" placeholder='enter your password' onChange={(e)=> setPassword(e.target.value)}  />
        </div>
        <div>
           <button onClick={loginHandler} disabled={loading ? true : false}>Login Now!</button>
           <Link to={'/register'}>Don't have an account register now</Link>
        </div>

        <Link to={'/forget'}>Forget Password</Link>

    </div>
  </>
  )
}

export default Login