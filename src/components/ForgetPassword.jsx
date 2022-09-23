import axios from 'axios';
import React, { useState } from 'react'

const ForgetPassword = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const[ msg, setMsg] = useState('');


const foregetFunc = async ()=>{

    setEmail('')

        if(email === '' || !email){
            setError(true);

        }else{

        try {

            const res = await axios.post(`${process.env.REACT_APP_HOSTURL}/api/v1/forget`,{
                email
            });
            console.log(res.data);
            setError(false);
            setMsg(res.data)
            setEmail('')
        
        }catch(err){
            console.log('forget password error: ', err);
          }
        }   
}
    console.log(email);
  return (
    <div>
        <div style={{textAlign: 'center', paddingTop: "70px"}}>
        <div  style={{color: 'red', marginBottom: '10px'}}>{error && <span>Input field can not be empty</span>}</div>

            <label>Enter Your Registered Email</label>
            <input type="email" placeholder='Enter Your Registered Email' onChange={(e)=> setEmail(e.target.value)} />
            <button onClick={foregetFunc}>Sumbit</button>
            
            <div>
                {msg.status === 200 ? (
                <span style={{color: 'gray', marginTop: '10px'}}><b>{msg.message}</b></span>
                ) : (
                    <span style={{color: 'red', marginTop: '10px'}}><b>{msg.message}</b></span>
                )}


            </div>


        </div>
    </div>
  )
}

export default ForgetPassword