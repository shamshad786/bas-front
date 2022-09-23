import React, { useState } from 'react'
import axios from 'axios';


import { MdFlightLand, MdFlightTakeoff,MdSend} from "react-icons/md";


const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMesssage] = useState("");
    const [require, setRequire] = useState(false);
    const[resmsg, setResmsg] = useState(null);




    const timeOut = () =>{
        setTimeout(()=>{
            setResmsg(null) 
        },5000)
    }


    const contactForm = async(e)=>{


        e.preventDefault();
            if(name === "" || !name || email === "" || !email || phone === "" || !phone || message === "" || !message){
                setRequire(true)
            }else{
                try{

                    const res = await axios.post(`${process.env.REACT_APP_HOSTURL}/api/v1/contactform`,{
                        name,
                        email,
                        phone,
                        message
                    })

                   // console.log(res.data);

                    if(res.data.status === 201){
                        setResmsg(res.data.message)
                        setRequire(false)
                        setName("");
                        setEmail("")
                        setPhone("")
                        setMesssage("")
                        
                        timeOut();

                    }
                }catch(err){
                    console.log('conatact us Error: ', err.message);
                }
            }
    }

   


  return (
    <>
         <div className='cotact-form-lower-div shadow-sm'>
                    <form onSubmit={contactForm}>
                        <div className='inner-contac-form-div'>
                        <div className='contact-form-heading'>
                          <MdFlightLand/> 
                           <h6>Submit Your Query</h6>
                           <MdFlightTakeoff/>
                        </div>
                                <div className='inner-contact-form-field'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" placeholder='Enter your name' value={name}   onChange={(e)=> setName(e.target.value)} required />
                                </div>
                                <div className='inner-contact-form-field'>
                                    <label htmlFor="">Email</label>
                                    <input type="email" placeholder='Enter your email' value={email}  onChange={(e)=> setEmail(e.target.value)} required />
                                </div>
                                <div className='inner-contact-form-field'>
                                    <label htmlFor="">Phone</label>
                                    <input type="number" placeholder='Enter your Phone No' value={phone}   onChange={(e)=> setPhone(e.target.value) } required/>
                                </div>
                                <div className='inner-contact-form-field'>
                                    <label htmlFor="">Your Query</label>
                                    <textarea name="" id="" cols="30" rows="7"  value={message}  onChange={(e)=> setMesssage(e.target.value)} required></textarea>
                                <button type='submit' className='btn btn-outline-primary  btn-lg'>Submit <MdSend/></button>
                                <div className='respone-message'>
                                   <p>{resmsg}</p>
                                </div>
                                </div>
                        </div>
                    </form>
                   </div> 
    </>
  )
}

export default ContactForm