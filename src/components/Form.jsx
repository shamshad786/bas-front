import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/Form.css';
import { State, City }  from 'country-state-city';
import { storage } from '../firebase';
// eslint-disable-next-line
import {ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { MdAccountBox,MdBorderColor,MdEmail,MdPhoneInTalk,MdTransgender,MdWorkspaces,MdSchool,MdAirplanemodeActive,MdOutlineAddRoad, MdHome,MdOutlineHolidayVillage,MdOutlineApartment, MdMap,MdLocationCity, MdFormatListNumbered,MdPinDrop } from "react-icons/md";
import { BsFillCalendarDateFill,BsPeopleFill,BsFillDiagram2Fill,BsFilePostFill,BsFillPinMapFill } from "react-icons/bs";


const Form = () => {

 //console.log(Country.getCountryByCode('IN'))

//console.log(State.getStatesOfCountry('IN'))
//console.log(City.getCitiesOfState('IN', 'DL'))

let getLoggedinuser = localStorage.getItem('userinfo')
let user = JSON.parse(getLoggedinuser)
    // console.log("formPage userID",user.id)
    // console.log("formPage userRegistrationID", user.registrationnumber);

    const navigate = useNavigate();
    const jobPost = `${process.env.REACT_APP_HOSTURL}/api/v1/post`;

    const [permanentAddressChecked, setPermanentAddressChecked] = useState(true);
    
    const [data, setData] = useState("");

    const [choosestate, setChooseState] = useState();
    const [chooseCity, setChooseCity] = useState();
    
    const [loading, setLoading] =  useState(false);

    
    let isoCode = choosestate?.slice(0,2);

    //console.log("single string ",isoCode);
    let state = State.getStatesOfCountry('IN')
    let city = City.getCitiesOfState('IN', `${isoCode}`)

  // console.log('All State: ',state);

  
   //TODO: limited state show which one we want start
   //const valuesArr = ['v1', 'v2', 'v3', 'v4', 'v5'];   
   const removeValFromIndex = [0,8,4]; //put here original index value of arry
   const indexSet = new Set(removeValFromIndex);

   const arrayWithValuesRemoved = state.filter((value, i) => !indexSet.has(i));
   
//   console.log(arrayWithValuesRemoved);//! this variable in form option in element for looping limited state and appear on screen
//! limeted state show logic ends

//    console.log('All City: ',city);

    let selectedState = choosestate?.slice(3, 200);

    // console.log('Choose State: ', selectedState);
    // console.log('Choose City: ', chooseCity);

    
    const fetchData = async ()=>{
        await axios.get(jobPost).then(res=>{
      setData(res.data);
      }).catch(err=>{
          console.log("error",err);
      })
    }

    //const imageListRef =  ref(storage, `images/`);

  useEffect(()=>{
    fetchData()
    // listAll(imageListRef).then((res)=>{
    //     console.log("FBres: ",res)
    //    res.items.forEach((item)=>{
    //     console.log("FBitem: ",item)
    //     getDownloadURL(item).then((url)=>{
            
    //         console.log('firabe images URL: ',url)
    //     })
    //    })
    // })
},[]);

    const sameAddress = (e)=>{
        const value = e.target.checked;
        if(value){
            setPermanentAddressChecked(false);
            setPermanentStreetName('-')
            setPermanentHouseNo('-')
            setPermanentVillage('-')
            setPermanentCity('-')
            setPermanentPostOffice('-')
            setPermanentState('-')
            setPermanentDistrict ('-')
            setPermanentPincode('-')
        }else if(!value){
            setPermanentAddressChecked(true);
            
        }
    }
    const [declaration, setDeclaration] = useState('false');

    
    

    // Form Handling with start

const [candidatename, setCandidateName] = useState('');
const [lastname, setLastName] = useState('');
const [fathername, setFatherName] = useState('');
const [mothername, setMotherName] = useState('');
const [dob, setDob] = useState('');
const [gender, setGender] = useState('');
const [cast, setCast] = useState('');
const [married, setMarried] = useState('');
const [applyfor, setApplyFor] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [education, setEducation] = useState('');
const [educationdivision, setEducationDivision] = useState('');
const [intermediate, setIntermediate] = useState('');
const [intermediatedivision, setIntermediateDivision] = useState('');
const [highschool, setHighSchool] = useState('');
const [highschooldivision, setHighSchoolDivision] = useState('');
const [profilePhoto, setProfilePhoto] = useState('');
const [signature, setSignature] = useState('');

//const[dp, setDp] = useState();

//TODO: Present Address Handling Form.
const [presentstreetname, setPresentStreetName] = useState('');
const [presenthouseno, setPresentHouseNo] = useState('');
const [presentvillage, setPresentVillage] = useState('');
const [presentcity, setPresentCity] = useState('');
const [presentpostoffice, setPresentPostOffice] = useState('');
const [presentstate, setPresentState] = useState('');
const [presentdistrict, setPresentDistrict] = useState('');
const [presentpincode, setPresentPincode] = useState('');


//TODO: Permanent Address

const [permanentstreetname, setPermanentStreetName] = useState('');
const [permanenthouseno, setPermanentHouseNo] = useState('');
const [permanentvillage, setPermanentVillage] = useState('');
const [permanentcity, setPermanentCity] = useState('');
const [permanentpostoffice, setPermanentPostOffice] = useState('');
const [permanentstate, setPermanentState] = useState('');
const [permanentdistrict, setPermanentDistrict] = useState('');
const [permanentpincode, setPermanentPincode] = useState('');
    // Form Handling with end


    const declartionFunc = (e)=>{
        const value = e.target.checked;
       if(!value){ 
           setDeclaration(false)
          
       }else{
           setDeclaration(true);
         
       }
    }
    


const  getExtension = (path) => {

var basename = path?.split(/[\\/]/).pop(),  // extract file name from full path ...                                      // (supports `\\` and `/` separators)
    pos = basename?.lastIndexOf(".");       // get last position of `.`
if (basename === "" || pos < 1) 
           // if file name is empty or ...
    return "";                             //  `.` not found (-1) or comes first (0)
return basename?.slice(pos + 1);            // extract extension ignoring `.`
}
// eslint-disable-next-line
const imageExtName = getExtension(profilePhoto?.name);

//console.log(imageExtName)


    const submitForm = async(payId,payStatus)=>{

        const prPhoto = {}

        if(profilePhoto){

           
           
          const dP =  new FormData();
          const fileName =  profilePhoto.name;
          
          dP.append('name', fileName);
          dP.append('file', profilePhoto);
          
          try{
              
              const res = await axios.post(`${process.env.REACT_APP_HOSTURL}/api/v1/upload`,dP);
              
              console.log(res.data.response);
              
              prPhoto.uploadphoto = res.data.response;

             //! firebase image uploader
             
              const imageRef = ref(storage, `/${prPhoto.uploadphoto}`)
                const fireImageRef =  await uploadBytes(imageRef, profilePhoto)
              //  console.log('fireImageRef',fireImageRef.ref)

                const firebaseImgUrl = await getDownloadURL(fireImageRef.ref)

                prPhoto.fireUrlDp = firebaseImgUrl
            
             // console.log('firebaseImgUrl',prPhoto.fireUrlDp);

          }catch(err){  
              console.log('photo upload err from react: ', err);
          } 

        }


        if(signature){
            const sign = new FormData();
            const signFileName = signature.name;

            sign.append('name', signFileName);
            sign.append('file', signature);

            try {

                const signRes = await axios.post(`${process.env.REACT_APP_HOSTURL}/api/v1/upload`, sign);

                console.log(signRes.data.response);

                prPhoto.uploadsignature = signRes.data.response;

                //! firebase image uploader

                const imageRef = ref(storage, `/${prPhoto.uploadsignature}`)
                const fireImageRef =  await uploadBytes(imageRef, signature)
                const firebaseImgUrl = await getDownloadURL(fireImageRef.ref)

                prPhoto.fireUrlsignature = firebaseImgUrl

            }catch(err){
                console.log('signature upload error: ', err);
            }
        }
      

     try{
       
      const res =  await axios.post(`${process.env.REACT_APP_HOSTURL}/api/v1/formdata`,{
            userId: user.id,
            registrationNumber: user.registrationnumber,
            candidatename: candidatename,
            lastname: lastname,
            fatherhusbandname: fathername,
            mothername: mothername,
            dateofbirth: dob,
            gender: gender,
            categorycast: cast,
            maritalstatus: married,
            postId: applyfor,
            email: email,
            mobile: phone,
            educationalqualification: education,
            educationdivision: educationdivision,
            intermediate: intermediate,
            intermediatedivision: intermediatedivision,
            highschool: highschool,
            highschooldivision: highschooldivision,
            uploadphoto:  prPhoto.uploadphoto,
            firebasestudentprofile: prPhoto.fireUrlDp,
            uploadsignature:  prPhoto.uploadsignature,
            firebasestudentsignature: prPhoto.fireUrlsignature,
            address: {
                present: {
            street: presentstreetname,
            houseno: presenthouseno,
            village: presentvillage,
            city: presentcity,
            postoffice: presentpostoffice,
            state: presentstate,
            district: presentdistrict,
            pincode: presentpincode, 
            },
            permanent:{
                pr_street:permanentstreetname,
                pr_houseno: permanenthouseno,
                pr_village: permanentvillage,
                pr_city: permanentcity,
                pr_postoffice: permanentpostoffice,
                pr_state: permanentstate,
                pr_district: permanentdistrict,
                pr_pincode: permanentpincode
            }
        },
        isPresent: permanentAddressChecked ,
        isDeclaration: declaration,
        paymentStatus: payStatus ,
        paymentId: payId ,
        examCentreState: selectedState,
        examCentreCity: chooseCity,

      
        });

        if(res.data.body._id){
            const id = res.data.body._id
            navigate(`/applicationpdf/${id}`,{
                state:{
                id:id
                } 
            });
            setLoading(false);
           }
     console.log(res.data)

      }catch(err){
          console.log('form not submit', err);
      }
        
    }
    

    const initializeRazorpay = () => {
        // console.log("In Initialize");
         return new Promise((resolve) => {
           const script = document.createElement("script");
           script.src = "https://checkout.razorpay.com/v1/checkout.js";
     
           script.onload = () => {
             resolve(true);
           };
           script.onerror = () => {
             resolve(false);
           };
     
           document.body.appendChild(script);
         });
       };
     
     const makePayment = async (params) => {

        setLoading(true);

      //  console.log('in makePayment ',id);
        const post  = params.filter((data)=>{
            return data._id === applyfor
        })

       // console.log(post[0].price);
       // console.log(params);
        
         console.log("in make payement");
         //createOrder({customer : ""})
 
         const res = await initializeRazorpay();
     
         if (!res) {
           alert("Razorpay SDK Failed to load");
           return;
         }
     
         // Make API call to the serverless API
         const data = await fetch(`${process.env.REACT_APP_HOSTURL}/api/v1/api/payment`, 
         { method: "POST" , 
             headers : {
             'Accept' : 'application/json',
             'Content-Type' : 'application/json'
             },
             body : JSON.stringify({price: post[0].price})
            }
             
             ).then((t) =>
           t.json());
         console.log(data);
         var options = {
           key: process.env.REACT_APP_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
           name: "N.I.A Aviation Services Pvt Ltd.",
           currency: data.currency,
           amount: data.amount,
           order_id: data.id,
           description: "Payment for N.I.A.S",
           image: "/favicon_io/android-chrome-192x192.png",
           handler: function (response) {
             // Validate payment at server - using webhooks is a better idea.
             
             console.log(response.razorpay_payment_id);
             console.log(response.razorpay_order_id);
             console.log(response.razorpay_signature);

             setLoading(true);

              submitForm(response.razorpay_payment_id,"paid");
             // console.log('after payment ',id);
            // console.log(response);
           },
           prefill: {
             name: candidatename,
             email: email,
             contact: phone,
           },
           "theme": {
             "color": "#d1411e"
         }
         };
         const paymentObject = new window.Razorpay(options);
         paymentObject.open();
       };

  return (
    <div className='form-container'>

    <form onSubmit={(e)=> {makePayment(data.body); e.preventDefault();}}>       
    <div className='inner-form container shadow-sm'>
    <h2 className='application-form-title'>Application Form</h2>
    <hr className='top-heading-bottom-hr-line' />
    <h3 className='details-heading-color text-decoration-underline'>Basic Details</h3>
        <div className='candidate-name name-field-width-reduce '>
            <label htmlFor="candidate-name">Candidate Name</label>
           <div className='input-group flex-nowrap'>
           <span className="input-group-text" id="addon-wrapping"><MdBorderColor className='input-icon' /></span>
            <input className="form-control"  type="text" id='candidate-name' placeholder='enter your first name' onChange={(e)=> setCandidateName(e.target.value)} required />
           </div>
        </div>
        <div className='last-name name-field-width-reduce'>
            <label htmlFor="last-name">Last Name</label>
           <div className='input-group flex-nowrap'>
           <span className="input-group-text" id="addon-wrapping"><MdBorderColor className='input-icon' /></span>
           <input className="form-control"  type="text" id='last-name' placeholder='enter your last name' onChange={(e)=> setLastName(e.target.value)} required />
           </div>
        </div>
        <div className='father-name name-field-width-reduce'>
            <label htmlFor="father-name">Father Name</label>
           <div className='input-group flex-nowrap'>
           <span className="input-group-text" id="addon-wrapping"><MdAccountBox className='input-icon' /></span>
           <input  className="form-control" type="text" id='father-name' placeholder='enter your father name'  onChange={(e)=> setFatherName(e.target.value)} required/>
           </div>
        </div>
        <div className='mother-name name-field-width-reduce'>
            <label htmlFor="mother-name">Mother Name</label>
           <div className='input-group flex-nowrap'>
           <span className="input-group-text" id="addon-wrapping"><MdAccountBox className='input-icon' /></span>
           <input  className="form-control" type="text" id='mother-name' placeholder='enter your mother name'  onChange={(e)=> setMotherName(e.target.value)} required />
           </div>
        </div>
        <div className='email name-field-width-reduce'>
            <label htmlFor="email">E-mail</label>
           <div className='input-group flex-nowrap'>
           <span className="input-group-text" id="addon-wrapping"><MdEmail className='input-icon' /></span>
           <input  className="form-control" type="text" id='email' placeholder='enter your email' onChange={(e)=> setEmail(e.target.value)} required />
           </div>
        </div>
        <div className='phone name-field-width-reduce'>
            <label htmlFor="phone">Phone No.</label>
            <div className='input-group flex-nowrap'>
            <span className="input-group-text" id="addon-wrapping"><MdPhoneInTalk className='input-icon' /></span>
            <input  className="form-control" type="number" id='phone' placeholder='enter your phone' onChange={(e)=> setPhone(e.target.value)} required />
            </div>
        </div>
        <div className='gender name-field-width-reduce'>
            <label htmlFor="gender">Gender</label>
           <div className='input-group flex-nowrap'>
           <span className="input-group-text" id="addon-wrapping"><MdTransgender className='input-icon' /></span>
           <select className="form-control" name="gender" id="gender" onChange={(e)=> setGender(e.target.value)} >
           <option value="not selected">Select Option</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
           </select>
           </div>
        </div>
        <div className='dob name-field-width-reduce'>
            <label htmlFor="dob">Date of Birth</label>
            <div className='input-group flex-nowrap'>
            <span className="input-group-text" id="addon-wrapping"><BsFillCalendarDateFill className='input-icon' /></span>
            <input className="form-control" type="date" id='dob' placeholder='enter your dob name'  onChange={(e)=> setDob(e.target.value)} required/>
            </div>
        </div>
        <div className='marital-status name-field-width-reduce'>
            <label htmlFor="marital-status">Marital Status</label>
          <div className='input-group flex-nowrap'>
          <span className="input-group-text" id="addon-wrapping"><BsPeopleFill className='input-icon' /></span>
          <select className="form-control"  id="marital-status" onChange={(e)=> setMarried(e.target.value)}>
           <option value="not selected">Select Option</option>
               <option value="Married">Married</option>
               <option value="Unmarried">Unmarried</option>
           </select>
          </div>
        </div>
        <div className='categories-cast name-field-width-reduce'>
            <label htmlFor="categories-cast">Category(Cast)</label>
          <div className='input-group flex-nowrap'>
          <span className="input-group-text" id="addon-wrapping"><MdWorkspaces className='input-icon' /></span>
          <select className="form-control"  id="categories-cast"  onChange={(e)=> setCast(e.target.value)}>
               <option value="not selected">Select Option</option>
               <option value="GENERAL">GENERAL</option>
               <option value="ST">SC</option>
               <option value="ST">ST</option>
               <option value="OBC">OBC</option>
           </select>
          </div>
        </div>

        <div className='education name-field-width-reduce'>
            <label htmlFor="education">Education</label>
           <div  className='input-group flex-nowrap'>
           <span className="input-group-text" id="addon-wrapping"><MdSchool className='input-icon' /></span>
           <select className="form-control" id="education" onChange={(e)=> setEducation(e.target.value)} >
               <option value="none">None</option>
               <option value="Under Graduate">Under Graduate</option>
               <option value="Graduate">Graduate</option>
               <option value="Post Graduate">Post Graduate</option>             
           </select>
           </div>
        </div>
        <div className='education-division name-field-width-reduce'>
            <label htmlFor="education-division">Division</label>
           <div className='input-group flex-nowrap'>
           <span className="input-group-text" id="addon-wrapping"><BsFillDiagram2Fill className='input-icon' /></span>
           <select className="form-control" id="education-division"  onChange={(e)=>  setEducationDivision(e.target.value)} >
           <option value="not selected">Select Option</option>
               <option value="First Division">First Division</option>
               <option value="Second Division">Second division</option>
               <option value="Third Division">Third Division</option>             
               <option value="none">None</option>
           </select>
           </div>
        </div>
        <div className='intermediate name-field-width-reduce'>
            <label htmlFor="intermediate">Intermediate</label>
           <div  className='input-group flex-nowrap'>
           <span className="input-group-text" id="addon-wrapping"><MdSchool className='input-icon' /></span>
           <input className="form-control"  type="text" placeholder='intermediate'  onChange={(e)=>  setIntermediate(e.target.value)} required />
           </div>
          
        </div>
        <div className='education-division name-field-width-reduce'>
            <label htmlFor="education-division">Division</label>
          <div className='input-group flex-nowrap'>
          <span className="input-group-text" id="addon-wrapping"><BsFillDiagram2Fill className='input-icon' /></span>
          <select  className="form-control" id="education-division"  onChange={(e)=>   setIntermediateDivision(e.target.value)}>
           <option value="not selected">Select Option</option>
               <option value="First Division">First Division</option>
               <option value="Second Division">Second division</option>
               <option value="Third Division">Third Division</option>             
               <option value="None">None</option>
           </select>
          </div>
        </div>
        <div className='highschoole name-field-width-reduce'>
            <label htmlFor="highschoole">High School</label>
            <div className='input-group flex-nowrap'>
            <span className="input-group-text" id="addon-wrapping"><MdSchool className='input-icon' /></span>
            <input className="form-control" type="text" placeholder='high school'  onChange={(e)=>   setHighSchool(e.target.value)} required />
            </div>
        </div>
        <div className='education-division name-field-width-reduce'> 
            <label htmlFor="education-division">Division</label>
          <div className='input-group flex-nowrap'>
          <span className="input-group-text" id="addon-wrapping"><BsFillDiagram2Fill className='input-icon' /></span>
          <select className="form-control" id="education-division"  onChange={(e)=>   setHighSchoolDivision(e.target.value)} >
           <option value="not selected">Select Option</option>
               <option value="First Division">First Division</option>
               <option value="Second Division">Second division</option>
               <option value="Third Division">Third Division</option>             
               <option value="None">None</option>
           </select>
          </div>
        </div>
       
        <div className='job-post name-field-width-reduce'>
            <label htmlFor="job-post">Apply For</label>
          <div className='input-group flex-nowrap'>
          <span className="input-group-text" id="addon-wrapping"><MdAirplanemodeActive className='input-icon' /></span>
          <select className="form-control"  id="job-post"  onChange={(e)=> setApplyFor(e.target.value)} >
           <option value='not selected'>Select Post</option>
                {
                    data?.body?.map(d =>  (
                         <option value={d._id}  key={d._id} >{d.name}</option>
                       
                          ))
                }
           </select>
          </div>
        </div>
       
       


        <div className='profile-photo'>
           <div>
                    <span style={{color: 'green', fontWeight: '700'}}>Upload Only 'JPG', 'JPEG', 'PNG' </span>
           </div>
            <input accept='.jpg, .png, .jpeg'  type="file" placeholder='choose your photo' onChange={(e)=> setProfilePhoto(e.target.files[0])}  />
            <img src={profilePhoto ? URL.createObjectURL(profilePhoto): "/images/user.png"} width={100} height={80} alt="" />
        </div>

        <div className='signature-photo'>
            <input accept='.jpg, .png, .jpeg'  type="file" placeholder='choose your signature'  onChange={(e)=> setSignature(e.target.files[0])} />
            <img src={signature ? URL.createObjectURL(signature) : "/images/sign.png"} width={100} height={80} alt="" />
        </div>

        <div className='present-address'>
        <h3 className='details-heading-color text-decoration-underline'>Present Address</h3>
            <div className='streetName name-field-width-reduce'>
                <label htmlFor="street-name">Street Name</label>
               <div className='input-group flex-nowrap'>
               <span className="input-group-text" id="addon-wrapping"><MdOutlineAddRoad className='input-icon' /></span>
               <input className="form-control"  type="text" id='street-name' placeholder='Street-name'  onChange={(e)=> setPresentStreetName(e.target.value)} required/>
               </div>
            </div>
            <div className='houseno name-field-width-reduce'>
                <label htmlFor="street-name">House No</label>
                <div className='input-group flex-nowrap'>
                <span className="input-group-text" id="addon-wrapping"><MdHome className='input-icon' /></span>
                <input className="form-control" type="text" id='street-name' placeholder='house no'  onChange={(e)=> setPresentHouseNo(e.target.value)} required/>
                </div>
            </div>
            <div className='village name-field-width-reduce'>
                <label htmlFor="street-name">Village</label>
                <div  className='input-group flex-nowrap'>
                <span className="input-group-text" id="addon-wrapping"><MdOutlineHolidayVillage className='input-icon' /></span>
                <input  className="form-control" type="text" id='street-name' placeholder='village'  onChange={(e)=> setPresentVillage(e.target.value)} required />
                </div>
            </div>
            <div className='city name-field-width-reduce'>
                <label htmlFor="street-name">City</label>
               <div  className='input-group flex-nowrap'>
               <span className="input-group-text" id="addon-wrapping"><MdOutlineApartment className='input-icon' /></span>
               <input className="form-control" type="text" id='street-name' placeholder='city' onChange={(e)=> setPresentCity(e.target.value)} required/>
               </div>
            </div>
            <div className='post-office name-field-width-reduce'>
                <label htmlFor="street-name">Post-office</label>
                <div className='input-group flex-nowrap'>
                <span className="input-group-text" id="addon-wrapping"><BsFilePostFill className='input-icon' /></span>
                <input  className="form-control" type="text" id='street-name' placeholder='post office'  onChange={(e)=> setPresentPostOffice(e.target.value)} required/>
                </div>
            </div>
            <div className='state name-field-width-reduce'>
            <label htmlFor="">State</label>
            <div className='input-group flex-nowrap'>
            <span className="input-group-text" id="addon-wrapping"><MdMap className='input-icon' /></span>
            <select  className="form-control"  id="state" onChange={(e)=> setPresentState(e.target.value)} >

                    <option value="not selected"> Select State</option>
                    {
                    state?.map(s => (
                    <option value={s.name} key={s.isoCode}>{s.name}</option>
                    ))
                    }

            </select>
            </div>
            </div>
            <div className='district name-field-width-reduce'>
                <label htmlFor="street-name">District</label>
               <div className='input-group flex-nowrap'>
               <span className="input-group-text" id="addon-wrapping"><MdLocationCity className='input-icon' /></span>
               <input  className="form-control" type="text" id='street-name' placeholder='district'  onChange={(e)=> setPresentDistrict(e.target.value)}  required/>
               </div>
            </div>
            <div className='pincode name-field-width-reduce'>
                <label htmlFor="street-name">Pincode</label> 
               <div  className='input-group flex-nowrap'>
               <span className="input-group-text" id="addon-wrapping"><MdFormatListNumbered className='input-icon' /></span>
               <input className="form-control" type="number" id='street-name' placeholder='pincode'  onChange={(e)=> setPresentPincode(e.target.value)} required/>
               </div>
            </div>
        </div>

        <div className='checked form-check form-switch'>

            <label className='' htmlFor="flexSwitchCheckDefault">Same Address As Above</label>
            <input className='form-check-input checkInput'  type="checkbox" id="flexSwitchCheckDefault"  onChange={sameAddress} />
         

        </div>

        <div>
            {permanentAddressChecked ? ( <div className='permanent-address' >
        <h3 className='details-heading-color text-decoration-underline'>Permanent Address</h3>
            <div className='streetName name-field-width-reduce'> 
                <label htmlFor="street-name">Street Name</label>
                <div  className='input-group flex-nowrap'>
                <span className="input-group-text" id="addon-wrapping"><MdOutlineAddRoad className='input-icon' /></span>
                <input  className="form-control" type="text" id='street-name' placeholder='Street-name'  onChange={(e)=> setPermanentStreetName(e.target.value)}/>
                </div>
            </div>
            <div className='houseno name-field-width-reduce'>
                <label htmlFor="street-name">House No</label>
                <div  className='input-group flex-nowrap'>
                <span className="input-group-text" id="addon-wrapping"><MdHome className='input-icon' /></span>
                <input className="form-control" type="text" id='street-name' placeholder='house no'  onChange={(e)=> setPermanentHouseNo(e.target.value)}/>
                </div>
            </div>
            <div className='village name-field-width-reduce'>
                <label htmlFor="street-name">Village</label>
               <div   className='input-group flex-nowrap'>
               <span className="input-group-text" id="addon-wrapping"><MdOutlineHolidayVillage className='input-icon' /></span>
               <input className="form-control" type="text" id='street-name' placeholder='village'  onChange={(e)=> setPermanentVillage(e.target.value)}/>
               </div>
            </div>
            <div className='city name-field-width-reduce'>
                <label htmlFor="street-name">City</label> 
                <div  className='input-group flex-nowrap'> 
                <span className="input-group-text" id="addon-wrapping"><MdOutlineApartment className='input-icon' /></span>
                <input className="form-control" type="text" id='street-name' placeholder='city'  onChange={(e)=> setPermanentCity(e.target.value)}/>
                </div>
            </div>
            <div className='post-office name-field-width-reduce'>
                <label htmlFor="street-name">Post-Office</label>
                <div className='input-group flex-nowrap'>
                <span className="input-group-text" id="addon-wrapping"><BsFilePostFill className='input-icon' /></span>
                <input className="form-control" type="text" id='street-name' placeholder='post office'  onChange={(e)=> setPermanentPostOffice(e.target.value)}/>
                </div>
            </div>
            <div className='state name-field-width-reduce'>
            <label htmlFor="">State</label>
           <div  className='input-group flex-nowrap'>
           <span className="input-group-text" id="addon-wrapping"><MdMap className='input-icon' /></span>
           <select className="form-control"  id="state" onChange={(e)=> setPermanentState(e.target.value)} >

            <option value="not selected"> Select State</option>
            {
                state?.map(s => (
                    <option value={s.name} key={s.isoCode}>{s.name}</option>
                ))
            }

            </select>
           </div>
            </div>
            <div className='district name-field-width-reduce'>
                <label htmlFor="street-name">District</label>
               <div className='input-group flex-nowrap'>
               <span className="input-group-text" id="addon-wrapping"><MdLocationCity className='input-icon' /></span>
               <input className="form-control"  type="text" id='street-name' placeholder='district' onChange={(e)=> setPermanentDistrict(e.target.value)} required/>
               </div>
            </div>
            <div className='pincode name-field-width-reduce'>
                <label htmlFor="street-name">Pincode</label>
                <div className='input-group flex-nowrap'>
                <span className="input-group-text" id="addon-wrapping"><MdFormatListNumbered className='input-icon' /></span>
                <input className="form-control" type="number" id='street-name' placeholder='pincode' onChange={(e)=> setPermanentPincode(e.target.value)} required/>
                </div>
            </div>
        </div>): ("")}
        
        <div className='state-city-div name-field-width-reduce'>
           <div className='state'>
           <label htmlFor="state">Exam Center State</label>
           <div className='input-group flex-nowrap'>
           <span className="input-group-text" id="addon-wrapping"><BsFillPinMapFill className='input-icon' /></span>
           <select  className="form-control" id="state" onChange={(e)=> setChooseState(e.target.value)} >
            <option value="not selected">Select State</option>
            {
                state?.map(s => (
                    <option value={[s.isoCode,s.name]} key={s.isoCode}>{s.name}</option>
                ))
            }

            </select>
           </div>
           </div>

           <div className='city'>
           <label htmlFor="city">Exam Center City</label>
           <div className='input-group flex-nowrap'>
           <span className="input-group-text" id="addon-wrapping"><MdPinDrop className='input-icon' /></span>
           <select  className="form-control" id="city" onChange={(e)=> setChooseCity(e.target.value)} >
               <option value="not Selected">Select City</option>
               {
                   city?.map(c => (
                       <option value={c.name} key={c.name}>{c.name}</option>
                   ))
               }
           </select>
           </div>
           </div>
        </div>
        </div>

            <div className='declaration'>
               <h2 className='details-heading-color text-decoration-underline' >Declaration</h2>
              <div className='disclaim-inner-div'>
              <input  className='form-check-input'  type="checkbox" required  onChange={declartionFunc} />
               <p className='text-muted'>
               I declare that the name, class, date of birth, address and other information given by me in the online application form is correct to the best of my knowledge and belief. Which I declare to be truely correct. If the above information is found incomplete or incorrect, my candidature is liable to be terminated at any time.
               </p>
              </div>
            </div> 

            <div className='submit'>
                <button className='submit-btn btn btn-primary' type='submit' disabled={loading ?  true : false}>Sumbit Form</button>
               <div>
               {loading ? (
                    <>
                  <div className='form-loading-div'>
                  <img src="/images/loading.svg" alt="aloding" />
                  <h6>Loading...</h6>
                  <p>Please wait we try to submit your form <br/>
                    Do not go back or refresh this page<br/>
                    You'll be redirect to your application form soon !!
                  </p>
                  </div>
                    </>
                ) : null }
               </div>
            </div>

    </div>
            </form>


    </div>
  )
}


export default Form