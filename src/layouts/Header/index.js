import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom';
import { ImTree ,ImPhone} from "react-icons/im";
import { MdEmail,MdHome,MdExpandMore,MdKeyboardArrowRight, MdMenu, MdOutlineClose,MdOutlineWatchLater,MdAirplanemodeActive,MdErrorOutline,MdPhoneInTalk,MdOutlineHome } from "react-icons/md";
import { BiEdit, BiNews,BiDownload,BiIdCard,BiUserVoice } from "react-icons/bi";
import { FaClipboardList,FaRegClipboard,FaAngleDown } from "react-icons/fa";
// import { useDispatch} from 'react-redux';
// import { logoutuser } from '../../store/userSlice';
// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';



const Header = () => {

  const notificationDownloadUrl = `${process.env.REACT_APP_HOSTURL}/api/v1/notificationdownload`;


  const router = useLocation();

  // const dispatch = useDispatch();

  // const extusr =  useSelector((state)=> state.user)

  // const navigate = useNavigate();

  const [isOpen, setIsClose] = useState(false);
  const [notificationUrl, setNotificationUrl] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const [careerAndJob, setCareerAndJob] = useState(false);
  const [insideTheAviation, setInsideTheAviation] = useState(false);
  const [trainingAndEducation, setTrainingAndEducation] = useState(false);


  
  //let userloggedin = localStorage.getItem('userinfo')
  
  //userloggedin =  JSON.parse(userloggedin);
  
  // const [user, setUser] = useState(false);
  //console.log('nav usr: ', extusr.user);
 // console.log('nav userloogedin: ', userloggedin);

//   let user;

// if(extusr.user){
//   // setUser(true)
//    user = true;
// }else{
//   // setUser(false)
//   user = false;
// }
// const logout = ()=>{
//  // localStorage.removeItem('userinfo')
//  dispatch(logoutuser())
//   navigate('/')
// }


const fetchNotificationUrlDownlaod =  async()=>{
  try{
    const res = await axios.get(notificationDownloadUrl)
    setNotificationUrl(res.data);
   // console.log('notification url: ', res.data);
  }catch(err){
      console.log('Error: ', err);
  }
}


useEffect(()=>{
  fetchNotificationUrlDownlaod()
},[])

  return (
<>
    <div className='top-bar container-fluid d-print-none'>
    <div className='top-bar-inner-wrapper container'>
      <div className='contact-details'>
        <h6><ImPhone className='call-icon-topbar'/> Helpline No. <b>8447-58-8447</b></h6>
       <h6 id='top-bar-email-with-icon'>|</h6>
        <h6 id='top-bar-email-with-icon'><MdEmail className='call-icon-topbar'/>  <b>info@nia.com</b></h6>
      </div>
    <div className='user-details'>
          <Link to={'/admin'}>
          <ImTree/>
          </Link> 
    </div>
    </div>
    </div>


      <div className=' tob-middle-bar container-fluid d-print-none'>
      <div className='top-middle-bar-heading container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='top-middle-bar-left-div'>
              <div className='top-middle-logo-div'>
              <Link to={'/'}>
                <img className='logo' src="/images/logo.png" alt="nia-logo" />
              </Link>
              </div>
              <Link to={'/'}>
              <div className='nia-top-middle-heading-div'>
              <h1>NIA Aviation Services Pvt Ltd.</h1>
            <h1>एन.आई.ए एविएशन सर्विसेज प्रा o लि o </h1>
            <h5>( Registered Under Ministery Of Corporate Affairs )</h5>
              </div>
              </Link>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='top-middle-bar-right-div'>
            <Link to={'/'}>
              <div className='circle-menu-div'>
                <div className='main-circle-div'>
                  <div className='inner-white-bg-circle-div'>
                    <div className='inner-blue-bg-circle-div'>
                      <MdHome className='top-middle-right-icons'/>
                    </div>
                  </div>
                </div>
                <div className='top-middle-cirlce-icon-title'><b>Home</b>
                </div>
              </div>
            </Link>
            <Link to={'/applynow'}> 
              <div className='circle-menu-div'>
                <div className='main-circle-div'>
                  <div className='inner-white-bg-circle-div'>
                    <div className='inner-blue-bg-circle-div'>
                      <BiEdit className='top-middle-right-icons'/>
                    </div>
                  </div>
                </div>
                <div className='top-middle-cirlce-icon-title'><b>Apply</b></div>
              </div>
            </Link>
              {/* <div className='circle-menu-div'>
                <div className='main-circle-div'>
                  <div className='inner-white-bg-circle-div'>
                    <div className='inner-blue-bg-circle-div'>
                      <BiNews className='top-middle-right-icons'/>
                    </div>
                  </div>
                </div>
                <div className='top-middle-cirlce-icon-title'><b>Application<br/> Status</b></div>
              </div> */}
              <div className='circle-menu-div'  onClick={()=> setIsClose(!isOpen)}>
                <div className='main-circle-div'>
                  <div className='inner-white-bg-circle-div'>
                    <div className='inner-blue-bg-circle-div'>
                      <BiDownload className='top-middle-right-icons'/>
                    </div>
                  </div>
                </div>
                <div className='top-middle-cirlce-icon-title'><b>Download<br/>Notification</b></div>
                <div className={isOpen ? 'notification-drop-down' : 'hide-noti-download'}>
                  <ul>
                    <li className='noti-links'><a href={notificationUrl.notification?.url[0].notificationurlhindi}>Hindi</a></li>
                    <li className='noti-links'><a href={notificationUrl.notification?.url[0].notificationurlenglish}>English</a></li>
                  </ul>
                </div>
              </div>
              <div className='circle-menu-div'>
                <div className='main-circle-div'>
                  <div className='inner-white-bg-circle-div'>
                    <div className='inner-blue-bg-circle-div'>
                      <BiIdCard className='top-middle-right-icons'/>
                    </div>
                  </div>
                </div>
                <div className='top-middle-cirlce-icon-title'><b>Admit Card <br/>Download</b></div>
              </div>
              <div className='circle-menu-div'>
                <div className='main-circle-div'>
                  <div className='inner-white-bg-circle-div'>
                    <div className='inner-blue-bg-circle-div'>
                      <BiUserVoice className='top-middle-right-icons'/>
                    </div>
                  </div>
                </div>
                <div className='top-middle-cirlce-icon-title'><b>Walk In <br/>Interview</b></div>
              </div>
              <div className='circle-menu-div'>
                <div className='main-circle-div'>
                  <div className='inner-white-bg-circle-div'>
                    <div className='inner-blue-bg-circle-div'>
                      <FaClipboardList className='top-middle-right-icons'/>
                    </div>
                  </div>
                </div>
                <div className='top-middle-cirlce-icon-title'><b>Result</b></div>
              </div>
              <div className='circle-image-div'>
                <img className='topservicesimg' src="/images/top-services-pic.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className='main-menu-bg container-fluid d-print-none'>
          <div className='menu-bg container'>
    <ul className='menu-ul'>
      <li id='career-drop-hov'  className='menu-ul-list'>
      <Link className={router.pathname === '/careerjob' ? 'active' : ''}  to={'#'}> Career & Jobs <MdExpandMore/> </Link>
        <div className='career-drop-div'>
            <ul id='career-drop-ul'>
              <li className='career-drop-list'><Link to={'/groundstaff'}>Ground Staff</Link></li>
              <li className='career-drop-list'><Link to={'/airportdetails'}>Airport Details</Link></li>
              <li className='career-drop-list' id='arpt-serv-right-drop-list-id'>Airport Services <MdKeyboardArrowRight/>
                <div className='arpt-serv-right-drop-div'>
                    <ul className='arpt-serv-right-drop-ul'>
                      <li className='arpt-serv-right-drop-list'><Link to={'/housekeeping'}>House keeping</Link></li>
                      <li className='arpt-serv-right-drop-list'><Link to={'/portal'} >Portal</Link></li>
                      <li className='arpt-serv-right-drop-list'><Link to={'/wheelchairstaff'}>Wheel chair staff</Link></li>
                      <li className='arpt-serv-right-drop-list'><Link to={'/cafeteria'}>Cafeteria</Link></li>
                    </ul>
                </div>
              </li>
            </ul>
        </div>
      </li>
      <span className='verticle-line'></span>
      <li className='menu-ul-list' id='inside-aviation-hov-list'>
      <Link className={router.pathname === '/insidetheaviation' ? 'active' : ''} to={'#'}>Inside The Aviation <MdExpandMore/></Link>
           <div className='inside-aviation-drop-down-div'>
              <ul className='inside-aviation-drop-down-ul'>
                <li className='inside-aviation-drop-down-list'><Link to={'/eligibilityexamforaviation'}>Eligibility & entrance exam for aviation</Link></li>
                <li className='inside-aviation-drop-down-list'><Link to={'/becamecabincrew'}>Become cabin crew</Link></li>
                <li className='inside-aviation-drop-down-list'><Link to={'/becamegroundstaff'}>Became ground staff</Link></li>
              </ul>
           </div>
      </li>
      <span className='verticle-line'></span>
      <li className='menu-ul-list' id='training-edu-hov-list'>
      <Link className={router.pathname === '/whyaviation' ? 'active' : ''}  to={'#'}>Training & Education  <MdExpandMore/></Link>
            <div className='training-edu-drodown-div'>
                <ul className='training-edu-drodown-ul'>
                  <li className='training-edu-drodown-list'><Link to={'/trainingoverview'}>Training overiew</Link></li>
                  <li className='training-edu-drodown-list'><Link to={'/professionaltraining'}>Professional trainer</Link></li>
                  <li className='training-edu-drodown-list'><Link to={'/aptitudeskills'}>Aptitudes & skills</Link></li>
                  <li className='training-edu-drodown-list'><Link to={'/aviationaftertwelfth'}>Aviation training after 12th pass</Link></li>
                </ul>
            </div>
      </li>
      <span className='verticle-line'></span>
      <li className='menu-ul-list'>
      <Link className={router.pathname === '/selectionprocess' ? 'active' : ''}  to={'/selectionprocess'}> Selection Process</Link>
            
      </li>
      <span className='verticle-line'></span>
      <li className='menu-ul-list'>
      <Link className={router.pathname === '/careeratairport' ? 'active' : ''} to={'/careeratairport'}>Career At Airport</Link>
           
      </li>
      <span className='verticle-line'></span>
      <li className='menu-ul-list'>
      <Link className={router.pathname === '/about' ? 'active' : ''}  to={'/about'}>About</Link>
            
      </li>
      <span className='verticle-line'></span>
      
      <li className='menu-ul-list'>
      <Link className={router.pathname === '/contactus' ? 'active' : ''} to={'/contactus'}> Contact Us </Link>
      </li>
    </ul>
          </div>

                {/* Mobile View Navbar */}

              <div className='isMobile-div container' >
                <button onClick={()=> setIsMobile(!isMobile)}>
                  {isMobile ? (<MdOutlineClose/>) : (<MdMenu/>)}
                </button>

                  {isMobile ? (
                    <div className='mobile-menu-list-bg-div'>
                      <div className='mobile-download-menu-section'>
                        <div className='mobile-more-notifications'>
                          <ul className='mobile-more-notifications-ul'>
                          <li className='mobile-more-notifications-li'>
                            <div className='mobile-list-div-heading-list-div' onClick={()=>setIsMobile(false)}>
                            <MdOutlineHome/>
                            <Link to={'/'}>
                            <h6>Home</h6>
                            </Link>
                            </div>
                            </li>
                            <li className='mobile-more-notifications-li'>
                           <div className='mobile-list-div-heading-list-div'>
                           <BiDownload/>
                            <h6>Download Notification</h6>
                           </div>
                              <div className='mobile-notification-drop-down'>
                                <ul>
                                 <a href={notificationUrl.notification?.url[0].notificationurlhindi}> Hindi</a>
                                 <a href={notificationUrl.notification?.url[0].notificationurlenglish}>English</a>
                                 
                                </ul>
                              </div>
                            </li>
                            <li className='mobile-more-notifications-li'>
                            <div className='mobile-list-div-heading-list-div'>
                            <BiEdit/>
                            <Link to={'/applynow'}> 
                            <h6>Apply now</h6>
                            </Link>
                            </div>
                            </li>
                            <li className='mobile-more-notifications-li'>
                            <div className='mobile-list-div-heading-list-div'>
                            <BiIdCard/>
                            <h6>Admit card download</h6>
                            </div>
                            </li>
                            <li className='mobile-more-notifications-li'>
                            <div className='mobile-list-div-heading-list-div'>
                            <BiUserVoice/>
                            <h6>Walk in interview</h6>
                            </div>
                            </li>
                            <li className='mobile-more-notifications-li'>
                            <div className='mobile-list-div-heading-list-div'>
                            <FaRegClipboard/>
                            <h6>Result</h6>
                            </div>
                            </li>
                            <li className='mobile-more-notifications-li'>
                            <div className='mobile-list-div-heading-list-div'>
                            <FaAngleDown/>
                            <h6 className={careerAndJob ? 'active' : null}  onClick={()=> setCareerAndJob(!careerAndJob)} >Career & Jobs</h6>
                            </div>
                            {
                              careerAndJob ? (
                                <div className='career-job-dropdown-div'>
                                  <ul className='career-job-dropdown-ul'>
                                  <Link to={'/groundstaff'}>
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}  >Ground staff</li>
                                  </Link>
                                  <Link to={'/airportdetails'}>
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}   >Airport detail</li>
                                  </Link>
                                  <Link to={'/housekeeping'}>
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}   >House keeping</li>
                                  </Link>
                                  <Link to={'/portal'} >
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}   >Portal</li>
                                  </Link>
                                  <Link to={'/wheelchairstaff'}>
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}  >Wheel chair staff</li>
                                  </Link>
                                  <Link to={'/cafeteria'}>
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}  >Cafetaria</li>
                                  </Link>
                                  </ul>
                              </div>
                              ) : (null)
                            }
                            </li>
                            <li className='mobile-more-notifications-li'>
                            <div className='mobile-list-div-heading-list-div'>
                            <FaAngleDown/>
                            <h6 className={insideTheAviation ? 'active' : null}  onClick={()=> setInsideTheAviation(!insideTheAviation)} >Inside The Aviation</h6>
                            </div>
                            {
                              insideTheAviation ? (
                                <div className='career-job-dropdown-div'>
                                  <ul className='career-job-dropdown-ul'>
                                  <Link to={'/eligibilityexamforaviation'}>
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}  >Eligibility entrance exam</li>
                                  </Link>
                                  <Link to={'/becamecabincrew'}>
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}  >Became cabin crew</li>
                                  </Link>
                                  <Link to={'/becamegroundstaff'}>
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}  >Became ground staff</li>
                                  </Link>
                                  </ul>
                              </div>
                              ) : (null)
                            }
                            </li>
                            <li className='mobile-more-notifications-li'>
                            <div className='mobile-list-div-heading-list-div'>
                            <FaAngleDown/>
                            <h6 className={trainingAndEducation ? 'active' : null}  onClick={()=> setTrainingAndEducation(!trainingAndEducation)} >Training & education</h6>
                            </div>
                            {
                              trainingAndEducation ? (
                                <div className='career-job-dropdown-div'>
                                  <ul className='career-job-dropdown-ul'>
                                  <Link to={'/trainingoverview'}>
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}  >Training overview</li>
                                  </Link>
                                  <Link to={'/professionaltraining'}>
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}  >Professional trainer</li>
                                  </Link>
                                  <Link to={'/aptitudeskills'}>
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}  >Aptitude & skills</li>
                                  </Link>
                                  <Link to={'/aviationaftertwelfth'}>
                                      <li className='career-job-dropdown-list' onClick={()=>setIsMobile(false)}  >Aviation training after 12th pass</li>
                                  </Link>
                                  </ul>
                              </div>
                              ) : (null)
                            }
                            </li>
                            <Link to={'/selectionprocess'}>
                            <li className='mobile-more-notifications-li' onClick={()=>setIsMobile(false)} >
                            <div className='mobile-list-div-heading-list-div'  >
                            <MdOutlineWatchLater/>
                            <h6 >Selection process</h6>
                            </div>
                            </li>
                            </Link>

                            <Link to={'/careeratairport'}>
                            <li className='mobile-more-notifications-li'  onClick={()=>setIsMobile(false)} >
                            <div className='mobile-list-div-heading-list-div'>
                            <MdAirplanemodeActive/>
                            <h6 >Career at airport</h6>
                            </div>
                            </li>
                            </Link>

                            <Link to={'/about'}>
                            <li className='mobile-more-notifications-li'  onClick={()=>setIsMobile(false)} >
                            <div className='mobile-list-div-heading-list-div'>
                            <MdErrorOutline/>
                            <h6 >About</h6>
                            </div>
                            </li>
                            </Link>

                            <Link to={'/contactus'}>
                            <li className='mobile-more-notifications-li'  onClick={()=>setIsMobile(false)} >
                            <div className='mobile-list-div-heading-list-div'>
                            <MdPhoneInTalk/>
                            <h6 >Contact us</h6>
                            </div>
                            </li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) :(null)}
              </div>
    </div>
    </>
  )  
}




export default Header