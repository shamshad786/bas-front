import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail,MdVpnKey,MdPassword } from "react-icons/md";



const Login = () => {

  
    const navigate = useNavigate();

    const [email, setEmail] = useState(null);
    const [secretkey, setSecretKey] = useState(null);
    const [password, setPassword] = useState(null);
    const [require, setRequire] = useState(false);
    const [msg, setMsg] = useState('');


    const adminCheck = () =>{
        const adminData =  localStorage.getItem('admininfo');
        if(adminData){
            navigate('/admin')
        }else{
            navigate('/admin/login')
        }
    }
    
    useEffect(()=>{
        adminCheck()
    },[])

 
const adminLoginHandler = async(e)=>{

    e.preventDefault();

    if(email === "" || !email){

        setRequire(true)

    }else{

        try{
            
            const res = await axios.post(`${process.env.REACT_APP_HOSTURL}/api/v1/admin/login`,{
                email,
                secretkey,
                password
            });
            console.log(res.data.message);
            setRequire(false)
 
            if(res.data.status === 200){
         
                const adminObj={
                    email: res.data.response.email,
                    role: res.data.response.role
                }

              localStorage.setItem('admininfo', JSON.stringify(adminObj));
              navigate('/admin');

            }else if(res.data.status === 404){
                setMsg(res.data.message);
            }

        }catch(err){
            console.log('Admin Backend',err);
        }
    }
}

  return (
     
    <>
        <div className='admin-page-main-container'>
       
                <div className='container admin-pg-inner-container' >
                <div className='admin-pg-heading-div'>
                    <h3>Only Staff Login</h3>
                </div>
                    <form onSubmit={adminLoginHandler}>
                        <div className='admin-inner-login-form shadow-sm'>
                                <div className='admin-login-inner-detail'>
                                <label>E-mail</label>
                                  <div className='input-group flex-nowrap'>
                                  <span className="input-group-text" id="basic-addon1"><MdEmail className='admin-pg-icon'/></span>
                                  <input className='form-control' type="email" name="" id="" placeholder='enter email' onChange={(e)=> setEmail(e.target.value)} required />
                                  </div>
                                </div>

                                <div className='admin-login-inner-detail'>
                                <label>Secret key</label>
                                <div className='input-group flex-nowrap'>
                                <span className="input-group-text" id="basic-addon1"><MdVpnKey className='admin-pg-icon'/></span>
                                <input className='form-control'   type="password" name="" id="" placeholder='enter secret key' onChange={(e)=> setSecretKey(e.target.value)} required />
                                </div>
                                </div>

                                <div className='admin-login-inner-detail'>
                                <label>Password</label>
                                    <div className='input-group flex-nowrap'>
                                    <span className="input-group-text" id="basic-addon1"><MdPassword className='admin-pg-icon'/></span>
                                    <input className='form-control'  type="password" placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}} required />
                                    </div>
                                </div>
                                <button className='btn btn-warning'  type='submit'>Staff Login</button>
                                <p>{msg}</p>
                        </div>
                    </form>
                </div>
        </div>
    </>
  )
}

export default Login