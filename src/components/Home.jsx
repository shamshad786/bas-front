import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './css/home.css'
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';
import { logoutuser } from '../store/userSlice'


const Home = () => {

 

  //! User Register handling Section Start

  const [regName, setRegName] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPhone, setRegPhone] = useState('')
  const [regPassword, setRegPAssword] = useState('')
  const [regError, setRegError] = useState(false)
  const [regRequire, setRegRequired] = useState(false)

  const [regLoading, setRegLoading] = useState('');
  const [regMsg, setRegMsg] = useState(false);

  const registeForm = async (e) =>{

    e.preventDefault()

    if(regName ==='' || regEmail === ''|| regPhone === ''|| regPassword === ''){
      setRegRequired(true);
      return

    }else{
      try{

        setRegLoading(true);
        setRegRequired(false);
        const regRes  = await axios.post(`${process.env.REACT_APP_HOSTURL}/api/v1/userregistration`,{
                  name:  regName,
                  email : regEmail,
                  phone: regPhone,
                  password: regPassword
        })
            if(regRes.data.status === 201){

              console.log(regRes.data);

              setRegLoading(false);
              setRegMsg(true);
              e.target.reset();

            }else if(regRes.data.status === 500) {
              setRegError(true)
              setRegRequired(false)
              setRegLoading(false);
            }


      }catch(err){
        console.log('error while register: ',err)
        setRegError(true)

      }
    }
  }
  //! User Register handling Section End



  //!user Login data handling section start

  let user;
  const dispatch = useDispatch()
  const loginUserData = useSelector((state)=> state.user)
  const navigate = useNavigate();
  
   if(loginUserData.user ===  null){
    user = false
   }else{
    user =  user = loginUserData
   }

console.log('login New State user: ',loginUserData);
  
const [registrationnumber, setRegistration] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(false);
const [require, setrequire] = useState(false);

const [userData, setUserData] = useState()

const [userloading,setUserLoading] = useState(false);



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
      setrequire(false);
      setUserLoading(true)
      setrequire(false);
    const res = await axios.post(`${process.env.REACT_APP_HOSTURL}/api/v1/login`,{
      registrationnumber,
      password
    });
   // console.log(res);
   setUserData(res.data);
   // console.log(userData);

    if(res.data.status === 200){  
      const{_id, name, registrationnumber} =  res.data.body

      const obj = {
        id:_id,
        name:name,
        registrationnumber: registrationnumber
      }
     

     dispatch(login(obj))

      navigate('/');
      setUserLoading(false);

    }else if(res.data.status === 300){
      console.log('user already logged in')
      setUserLoading(false);
       setrequire(false);
    }else if(res.data.status === 404){
      setError(true)
      setUserLoading(false);
    } else if(res.data.status === 500){
      setError(true)
      setUserLoading(false);
    }
 }}catch(err){
  console.log(err)
 console.log('something went wrong');
    
 }
}
}
//console.log('home: user:', userData); 

 
  //!user Login data handling section end


  //!Logout Handler start

  const logout = ()=>{
 // localStorage.removeItem('userinfo')
 dispatch(logoutuser())
  navigate('/')
}
  //!Logout Handler end

  // const datas = data
  const jobPost = `${process.env.REACT_APP_HOSTURL}/api/v1/post`;
  const latestUpdatesurl = `${process.env.REACT_APP_HOSTURL}/api/v1/latestupdate`

    const [allposts, setAllposts] = useState({});
    const [latestUpdates, SetLatestUpdates] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async ()=>{
      setLoading(true)
      await axios.get(jobPost).then(res=>{
        setAllposts(res.data);
        setLoading(false)
    }).catch(err=>{
        console.log("error",err);
    })
  }




  const fetchLatestUpdates = async()=>{
    setLoading(true)
    try{
      const res = await axios.get(latestUpdatesurl)
      SetLatestUpdates(res.data.latestData.list)
      setLoading(false)
    }catch(err){

      console.log(err);

    }
  }

  useEffect(()=>{
    fetchData()
    fetchLatestUpdates()
},[]);


  return (
    

  <>

    <div className='home-main-container container-fluid'>

    <div className='home-inner-div container border'>

    <div className='row' id='reverse-home-container'>
      <div className='col-lg-3'>
        <div className='home-inner-left-wrapper-div'>
            <div className='gandhi-img-div'>
              <img className='gandhi'  src="/images/gandhi.png" alt="nia-aviation" />
            </div>

            <div className='azadi-mahotsav-div'>
              <img className='azadimahotsav' src="/images/azadimahotsav.png" alt="" />
            </div>
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='home-inner-center-wrapper-div'>
              <div className='job-notification-main-center-div'>
                <div className='jobs-upper-div'>
                     <div className='job-title-bg-blue-div'>
                      <h5>Job Profiles</h5>
                     </div>

                     <div className='job-profiles-div'>
                     {loading ? <div className='loading-div'>
                <img src="/images/loading.svg"  width={100} height={100} alt="loading" />
                <h5>Loading...</h5>
                 </div> : ""}
                     {allposts?.body?.map((d)=>{
                       return(
                   <div className='all-jobs-pots' key={d._id}>
                    <Link to={'/applynow'}>

                    <b style={{color: 'black'}}>CLICK HERE -  </b> <p>
                     Fill Online Details For Advt No.  NIAS/2021-22
                     </p>
                    <h5>{d.name} <span className='new blink'>NEW</span> </h5>
                  </Link>
                   </div>
                      )
                     })}
                     </div> 
                </div>  

                <div className='notification-bottom-div'>
                  <div className='notification-bg-blue-div'>
                    <h5>Latest Updates & Alerts</h5>
                  </div>
                  <div className='notification-main-list-div '>
                  {loading ? <div className='loading-div'>
                <img src="/images/loading.svg"  width={100} height={100} alt="loading" />
                <h5>Loading...</h5>
                 </div> : ""}
                     
                     {
                      latestUpdates.map((d)=>{
                        return (
                          <div className='latest-update-div' key={d._id} >
                      <p>Notice :- {d.list}</p>
                    </div>
                        )
                      })

                     }
                    
                  </div>
                </div>  
              </div>
        </div>
      </div>
      <div className='col-lg-3'>
        <div className='home-inner-right-wrapper-div'>

        {user ? (
            <div className='user-exist-div'>
             <div className='user-exist-heading'>
                <h5>Candidate Details</h5>
             </div>
             <div className='user-inner-details-div'>
              <div className='user-icon-name-div border'>
                  <MdAccountCircle className='user-exist-icon'/>
                  <h4>{user?.user?.name}</h4>
              </div>
              <div className='you-are-logged-in-div'>
                <p><em>You're Already Logged In</em></p>
              </div>
             </div>

            <Link to={'/candidatedashboard'}>
             <div className='check-app-status-div'>
                <p>Check Your Application Status</p>
             </div>
            </Link>

             <button className='btn btn-danger logout' onClick={logout}>Logout</button>
            </div> 
        ) :(        
                <div className='user-right-div'>
                <Tabs>
                    <TabList>
                      <Tab>Login</Tab>
                      <div className='log-reg-divider-line'>|</div>
                      <Tab>Register</Tab>
                    </TabList>

                    <TabPanel>
                    <form >
                     <div className='login-fields-div'>
                      <label htmlFor="">Registration Number</label>
                      <input type="number" placeholder='enter registration no' onChange={(e)=> setRegistration(e.target.value)} required />
                     </div>
                     <div className='login-fields-div'>
                      <label htmlFor="">Password</label>
                      <input type="date" onChange={(e)=> setPassword(e.target.value)} required />
                     </div>
                    <div className='login-btn-div'>
                      <button className='btn btn-primary'  onClick={loginHandler} disabled={userloading ? true : false}>Login Now  </button>
                      <Link to={'/forget'}>
                      <div className='forget-password-div'>Forget Password</div>
                      </Link>

                      {userloading ? (
                  <div className='loading-anim-div'>
                  <img src="/images/loading.svg"  width={50} height={50} alt="loading" />
                    <h5 className='loading-animation'>Loading... </h5>
                  </div>
                    ) : null}
                      <div style={{color: 'red', marginBottom: '10px'}}>{require ? (<span>All fields required</span>) : (error && <span>Wrong Reg No. & password</span>)}</div>
                    </div>
                    </form>
                    </TabPanel>
                    <TabPanel>
                    <div className='user-register-div'>
                    <form onSubmit={registeForm}>
                      <div className='user-reg-details'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='enter your name' required  onChange={(e)=> setRegName(e.target.value)} />
                      </div>
                      <div className='user-reg-details'>
                        <label htmlFor="">E-mail</label>
                        <input type="email" placeholder='enter your email' required onChange={(e)=> setRegEmail(e.target.value)}  />
                      </div>
                      <div className='user-reg-details'>
                        <label htmlFor="">Phone</label>
                        <input type="number" placeholder='enter your phone no' required onChange={(e)=>setRegPhone(e.target.value)} />
                      </div>
                      <div className='user-reg-details'>
                        <label htmlFor="">Password</label>
                        <input type="date" onChange={(e)=>setRegPAssword(e.target.value)} required />
                      </div>
                      <div className='user-reg-btn-div'>
                        <button className='btn btn-primary' type='submit'  disabled={regLoading ? true : false}>Register Now</button>
                       {regLoading ? (
                        <div className='loading-reg-div'>
                        <p>Loading...</p>
                        <img src="/images/loading.svg"  width={60} height={30} alt="loading" />
                        </div>
                       ) : null}

                       <div style={{color: 'red', marginBottom: '10px', paddingRight: '30px', fontSize: '11px'}}>{regRequire ? (<span>All fields required</span>) : (regError && <span>Email Already Registered</span>)}</div>
                       {
                        regMsg ? (
                          <div><span style={{fontSize: '12px', textAlign: 'center',color: 'green', fontWeight: 'bold',  paddingRight: '10px' }}>Your registration details has been send to your given email address!</span></div>
                        ) : null
                       }
                      </div>
                    </form>
                    </div>
                     
                    </TabPanel>
                  </Tabs>
                </div>
                )}
                <div className='gallery-div'>
                <Link to={'/gallery'}>
                      <div className='gallery-iiner-div'>
                       <div className='gallery-heading-div'>Gallery</div>
                       <div className='gallery-img-planes-list'>
                       <img className='gallery-plane' src="/images/cargo-plane.jpeg" alt="" />
                        <img className='gallery-plane'  src="/images/park-plane.jpeg" alt="" />
                        <img className='gallery-plane'  src="/images/worker-plane.jpeg" alt="" />
                       </div>
                       <div className='gallery-view-more'>
                        <p>view more...</p>
                       </div>
                      </div>
                      </Link>
                </div>

                <div className='digital-india-div'>
                     <div className='digital-india-inner'>
                      <img className='digital-india' src="/images/digitalindia.png" alt="" />
                     </div>
                </div>
        </div>
      </div>

        <div className='plane-logo-main-div'>
            <div className='digital-era-div'>
                  <p className='cnnContents'>
                  <span className='marqueeStyle'>
               In today is digital era, candidates can fill the application form from their mobiles etc.
              </span>
                  </p>    
            </div>

            <div className='planes-div'>
            <div className='marqueeStyle2'>
                     <img className='plane-logo ' src="/images/1ai-logo.png" width={246} height={90} alt="nias-palne-logo" />
             <img  className='plane-logo ' src="/images/2indilogo.png" width={246} height={90} alt="nias-palne-logo" />
             <img  className='plane-logo ' src="/images/3spicelogo.png" width={246} height={90} alt="nias-palne-logo" />
          <img  className='plane-logo ' src="/images/4gologo.png" width={246} height={90} alt="nias-palne-logo" />
             <img  className='plane-logo ' src="/images/5vistara.png" width={246} height={90} alt="nias-palne-logo" />
             </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  </>
  )
}

export default Home