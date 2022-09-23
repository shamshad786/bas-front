import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './admin.css'
import { ExportJsonCsv } from 'react-export-json-csv';
import { MdOutlineCancel } from "react-icons/md";
import { MdFileUpload,MdOutlineDeleteOutline,MdDeleteForever } from "react-icons/md";

const Admin = () => {
  //`${process.env.REACT_APP_HOSTURL}`

  const dataUrl = `${process.env.REACT_APP_HOSTURL}/api/v1/formdata`;
  const usersUrl = `${process.env.REACT_APP_HOSTURL}/api/v1/allregisteredusers`;
  const notificationDownloadUrl = `${process.env.REACT_APP_HOSTURL}/api/v1/notificationdownload`;
  const contactQueries = `${process.env.REACT_APP_HOSTURL}/api/v1/ContactForm`;
  const fetchGalleryUrl = `${process.env.REACT_APP_HOSTURL}/api/v1/admin/gallery`;

  const [data,setData] = useState([]);
  const [query, setQuery] = useState([]);
  const [allqueries, setAllQuary] = useState(false);
  const [allRegisteredUsers, setAllRegisteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isNotificationUpdateUrl, setIsNotificationUrl] = useState(false);
  const [hindiNotificationUrl, setHindiNotificationUrl] = useState('');
  const [engNotificationUrl, setEngNotificationUrl] = useState('');
  const [notificationUrl, setNotificationUrl] = useState({});
  const [notificationURLUpdated, setNotificationURLUpdated] = useState({});
  const [galleryImage, setGalleryImage] = useState('')
  const [galleyImageStore, setGalleryImageStore] = useState([])
  const [uploadImgMsg,setUploadImgMsg]= useState();


const [currentPage, setCurrentPage] =  useState(1);
const [itemsPerpage, setItemsPerPage] = useState(15);


const indexOfLastitems =  currentPage * itemsPerpage;
const indexOfFirstItems =  indexOfLastitems -  itemsPerpage;
const currentItems = data.slice(indexOfFirstItems, indexOfLastitems);


const [pageNumberLimit, setPageNumberLimit] = useState(5);
const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
const [minPageNumberLimit, setminPageNumberLimit]  = useState(0);



  const fetcData = async()=>{
    setLoading(true);

    const adminData = localStorage.getItem('admininfo');

    if(adminData){

      try {
        const res = await axios.get(dataUrl)
        setData(res.data.body);
        setLoading(false);
  
      }catch(err){
        console.log('Error Fetching Candidate Data : ', err)
      }
    }else{
      navigate('/admin/login');
    }
  }

  const fetchQueriesData = async() => {
        try{

          const res = await axios.get(contactQueries);
          setQuery(res.data.response);

        }catch(err){
          console.log(err);
        }
  }

  const allRegUsers = async() =>{

      try{

        const res =  await axios.get(usersUrl);

       // console.log('registered Users: ', res.data.response);
       setAllRegisteredUsers( res.data.response);

      }catch(err){
        console.log('error in users fething: ', err);
      }
  }

  const enableNotificationUrlUpdate = ()=>{
    setIsNotificationUrl(true)
  }

  const closeNotifucationUrl = ()=>{
    setIsNotificationUrl(false)
  }

  const fetchNotificationUrlDownlaod =  async()=>{

      try{

        const res = await axios.get(notificationDownloadUrl)
        setNotificationUrl(res.data)
        // console.log(res.data.notification.url[0].notificationurlenglish);
        // console.log(res.data.notification.url[0].notificationurlhindi);

      }catch(err){
          console.log('Error: ', err);
      }
}

//TODO: Notification URL Update Path

  const updateHindiNotificationUrl = async(e)=>{
    e.preventDefault()

    const notificationUrlId = notificationUrl.notification.url[0]._id;
      try{
        const res = await axios.patch(`${process.env.REACT_APP_HOSTURL}/api/v1/notificationdownload/${notificationUrlId}`,{
          notificationurlhindi: hindiNotificationUrl
        });
       // console.log(res.data);
        setNotificationURLUpdated(res.data)
        setHindiNotificationUrl('')

      }catch(err){
        console.log(err);
      }

   
  }



  const updateEnglishNotificationUrl =  async(e)=>{
      e.preventDefault()

      const notificationUrlId = notificationUrl.notification.url[0]._id;
      try{
        const res = await axios.patch(`${process.env.REACT_APP_HOSTURL}/api/v1/notificationdownload/${notificationUrlId}`,{
          notificationurlenglish: engNotificationUrl
        });
       // console.log(res.data);
        setNotificationURLUpdated(res.data)
        setEngNotificationUrl('')


      }catch(err){
        console.log(err);
      }
  }

//TODO:

    const fetchGalleryImgs = async()=>{
      try{
        const res = await axios.get(fetchGalleryUrl);
      console.log('gallery Image Fetched: ',res.data.imageResponse);

      setGalleryImageStore(res.data.imageResponse)


      }catch(err){
        console.log('Gallery Image not fetched ', err);
      }
    }


  const navigate = useNavigate();

 useEffect(()=>{
    fetcData()
    fetchQueriesData()
    allRegUsers()
    fetchNotificationUrlDownlaod()
    fetchGalleryImgs()
 },[]);


 const logoutAdmin = ()=>{
  localStorage.removeItem('admininfo')
  navigate('/')
 }

 const queryHandler = () =>{
 setAllQuary(true)
  }
  const goBackHandler = () =>{
    setAllQuary(false)
  }
 


 const getSingleFromData = (e)=>{
    
  console.log(e.target.id);

  let listId = e.target.id

  if(listId){ 
          const id = listId
          navigate(`/viewcandidatesdetails/${id}`,{
              state:{
              id:id
              }
          });
         }
         console.log('list-ID', listId);
 
} 
const headers = [
  {
    key: 'formId',
    name: 'Form ID',
  },

  {
    key: 'userId',
    name: 'User ID'

  },
  {
    key: 'registerId',
    name: 'Registration ID'
  },
  {
    key: 'applicationId',
    name: 'Application ID'

  },

  {
    key: 'fname',
    name: 'First Name',
  },
  {
    key: 'lastname',
    name: 'Last Name'
  },
  {
    key: 'fatherHusbandName',
    name: 'Father/Husband Name'
  },

  {
    key: 'motherName',
    name:'Mother Name',
  },
  {
    key: 'dob',
    name:'Date Of Birth',

  },
  {
    key: 'gender',
    name:'Gender',
  },
  {
    key: 'categoryCast',
    name: 'Categories Cast',
  },
  {
    key: 'maritalStatus',
    name: 'Marital Status',
  },
  {
    key: 'postapply',
    name: 'Post Apply',
  },
  {
    key:'price',
    name: 'Application Fees',

  },
  {
    key: 'postId',
    name: 'Post ID',
  },
  {
    key: 'email',
    name: ' E-mail',

  },
  {
    key: 'mobile',
    name: ' Mobile',
  },
  {
    key: 'educationalqualification',
    name: 'Educational Qualification',
  },
  
  {
    key: 'educationaldivision',
    name: 'Educational Division',
  }, 
  {
    key: 'intermediate',
    name: 'Intermediate',
  },
  {
    key: 'intermediatedivision',
    name: 'Intermediate Divison',
  },
  {
    key: 'highschool',
    name: 'High School',
  },
  {
    key: 'highschooldivision',
    name: 'High School Division',
  },
  {
    key: 'uploadPhoto',
    name: 'Upload Photo',
  },

  {
    key: 'firebasestudentprofile',
    name:'Firebase Profile Image',

  }, 

  {
    key: 'uploadSignature',
    name: 'Upload Signature',
  },

  {
    key:'firebasestudentsignature',
    name: 'Firebase Signature Image',

  },

  {
    key: 'add_Present_Street',
    name: 'Address Present Street',
  },
  {
    key: 'add_Present_houseno',
    name: 'Address Present houseno',
  },
  {
    key: 'add_Present_village',
    name: 'Address Present village',
  },
  {
    key: 'add_Present_city',
    name: 'Address Present city',
  },
  {
    key: 'add_Present_postoffice',
    name: 'Address Present postoffice',
  },
  {
    key: 'add_Present_state',
    name: 'Address Present state',
  },
  {
    key: 'add_Present_district',
    name: 'Address Present district',
  },
  {
    key: 'add_Present_pincode',
    name: 'Address Present pincode',
  },

  {
    key: 'sameAdd',
    name:'Same Address'

  },
  {
    key: 'declaration',
    name:'Declaration'

  },

  {
    key: 'addPermanent_PR_Street',
    name: 'Address Permanent Street'
  },
  {
    key: 'addPermanent_PR_houseno',
    name: 'Address Permanent houseno'
  },
  {
    key: 'addPermanent_PR_village',
    name: 'Address Permanent village'
  },
  {
    key: 'addPermanent_PR_city',
    name: 'Address Permanent city'
  },
  {
    key: 'addPermanent_PR_postoffice',
    name: 'Address Permanent postoffice'
  },
  {
    key: 'addPermanent_PR_state',
    name: 'Address Permanent state'
  },
  {
    key: 'addPermanent_PR_district',
    name: 'Address Permanent district'
  },
  {
    key: 'addPermanent_PR_pincode',
    name: 'Address Permanent pincode'
  },
  {
    key: 'createdAt',
    name: 'Created At',
  },
  {
    key: 'updatedAt',
    name: 'Updated At',
  },
]

const datas = [
  {},
  
]

   data?.map((a,index)=>{

  let obj ={

  formId: data[index]._id,
  userId : data[index].userId,
  registerId: data[index].registrationNumber,
  applicationId: data[index].applicationnumber,
  fname: data[index].candidatename,
  lastname: data[index].lastname,
  fatherHusbandName: data[index].fatherhusbandname,
  motherName: data[index].mothername,
  dob: data[index].dateofbirth,
  gender: data[index].gender,
  categoryCast: data[index].categorycast,
  maritalStatus: data[index].maritalstatus,
  postapply: data[index].postapply,
  price: data[index].price,
  postId: data[index].postId,
  email: data[index].email,
  mobile: data[index].mobile,
  educationalqualification: data[index].educationalqualification,
  educationaldivision: data[index].educationdivision,
  intermediate: data[index].intermediate,
  intermediatedivision: data[index].intermediatedivision,
  highschool: data[index].highschool,
  highschooldivision: data[index].highschooldivision,
  uploadPhoto: data[index].uploadphoto,
  firebasestudentprofile: data[index].firebasestudentprofile,
  uploadSignature: data[index].uploadsignature,
  firebasestudentsignature: data[index].firebasestudentsignature,
  add_Present_Street: data[index].address.present.street,
  add_Present_houseno: data[index].address.present.houseno,
  add_Present_village: data[index].address.present.village,
  add_Present_city: data[index].address.present.city,
  add_Present_postoffice: data[index].address.present.postoffice,
  add_Present_state : data[index].address.present.state,
  add_Present_district: data[index].address.present.district,
  add_Present_pincode: data[index].address.present.pincode,
  sameAdd: data[index].isPresent,
  declaration: data[index].isDeclaration,
  addPermanent_PR_Street: data[index].address.permanent.pr_street,
  addPermanent_PR_houseno: data[index].address.permanent.pr_houseno,
  addPermanent_PR_village: data[index].address.permanent.pr_village,
  addPermanent_PR_city: data[index].address.permanent.pr_city,
  addPermanent_PR_postoffice: data[index].address.permanent.pr_postoffice,
  addPermanent_PR_state: data[index].address.permanent.pr_state,
  addPermanent_PR_district: data[index].address.permanent.pr_district,
  addPermanent_PR_pincode: data[index].address.permanent.pr_pincode,  
  createdAt: data[index].createdAt,
  updatedAt: data[index].updatedAt,
  }
  datas.push(obj);
  return a;
});

console.log('Data: ', data)

const pages = []

const handleClick = (e) => {
  setCurrentPage(Number(e.target.id));
}


const handleNextBtn = () => {
  setCurrentPage(currentPage +1);

  if(currentPage +1 > maxPageNumberLimit){
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  }
}

const  handlePrevBtn = () =>{

  setCurrentPage(currentPage - 1);

  if((currentPage -1)% pageNumberLimit ===0){
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  }
}


let increamentBtn = null;
if(pages.length > maxPageNumberLimit){
  increamentBtn = <li onClick={handleNextBtn}> &hellip;  </li>
}



for (let i =0; i <= Math.ceil(data.length/itemsPerpage); i++  ){
    pages.push(i);
}


const renderPageNumber = pages.map((number)=> {
   if(number <  maxPageNumberLimit +1 && number > minPageNumberLimit){
    return(
        <li  key={number} id={number} onClick={handleClick} className={currentPage === number ? 'active' : null}>
       {number}
       </li>
    )  
   }else{
       return null;
   }
})

  //  console.log(engNotificationUrl);


  //! upload Gallery Images

    const galleryUpload = async(e)=>{

        e.preventDefault();

        const imageObj = {}

      if(galleryImage){

          const gImage =  new FormData();
          const fileName = galleryImage.name;

          gImage.append('name', fileName);
          gImage.append('file', galleryImage);

          try{

            const res = await axios.post(`${process.env.REACT_APP_HOSTURL}/api/v1/upload`,gImage)
            console.log('Gallery Image: ',res.data);
            imageObj.galleryImgPath = res.data.response

            
            const gRes = await axios.post(`${process.env.REACT_APP_HOSTURL}/api/v1/admin/gallery`,{
              galleryImageUrl: imageObj.galleryImgPath
            });
           // console.log("Upload Frontend: ",gRes.data.status);
           //setGalleryImageStore(gRes.data)
            setUploadImgMsg(gRes.data.status);
            setGalleryImage('')
          }catch(err){
            console.log(err);
          }
      }
    }

    const galleryImageDelHandler = async(e)=>{
      const id = e.currentTarget.id
      //console.log(id);

      try{
        const res = await axios.delete(`${process.env.REACT_APP_HOSTURL}/api/v1/admin/gallery/${id}`)
        //console.log(res.data);

   const delImgGal =  galleyImageStore.filter(d => d._id !== id)

   setGalleryImageStore(delImgGal)

        
      }catch(err){
        console.log('not deleted: ',err);
      }
    }


    const delAllGalImg = async()=>{
      try{

        const res = await axios.delete(`${process.env.REACT_APP_HOSTURL}/api/v1/admin/gallery`);
        console.log(res.data);
        setGalleryImageStore([])

      }catch(err){

        console.log('Error: in Delete', err);

      }
    }

    const PublicFolder =  `${process.env.REACT_APP_HOSTURL}/api/v1/`
  return (
    <>
    <div className='admin-heading-div container'>
        <div className='admin-header-div shadow-sm p-3 mb-1 bg-body rounded'>
            <h1>Admin Dashboard</h1>
            <div className='admin-buttons'>
            <div className='queries-div'>
            <button className='contact-query-btn' onClick={queryHandler} >Contact Form Queries</button>
            <span>{`Total Registred Users: ${allRegisteredUsers.length}`}</span>
            {isNotificationUpdateUrl ?  (
              <div className='update-notification-url-div mt-3'>
              <div  className='notification-url-close'> 
                <MdOutlineCancel id='notification-url-icon' onClick={()=> closeNotifucationUrl()}   />
              </div>
              <span>{notificationURLUpdated.message}</span>
                <div className='mb-3'>
                <form onSubmit={updateHindiNotificationUrl}>
                    <label htmlFor="">Update Hindi Notification Url</label>
                    <input type="text" placeholder='Enter Your NotificationUrl Here' value={hindiNotificationUrl}  onChange={(e)=> setHindiNotificationUrl(e.target.value)}  required />
                    <button type='submit'> Update </button>
                </form>
                </div>
                <div className='mb-3'>
                <form onSubmit={updateEnglishNotificationUrl}>
                    <label htmlFor="">Update English Notification Url</label>
                    <input type="text" placeholder='Enter Your NotificationUrl Here' value={engNotificationUrl}  onChange={(e)=> setEngNotificationUrl(e.target.value)}  required />
                    <button type='submit' >Update</button>
                </form>
                </div>
            </div>
            ) : (
             <div className='mt-3' style={{  marginLeft: '-165px'}}>
               <button className='btn btn-primary' onClick={()=> enableNotificationUrlUpdate()}>Update Notification Url</button>
             </div>
            )}
            </div>
            <div className='adm-btn'>
            <ExportJsonCsv style={{padding: '8px' , borderRadius: '4px', backgroundColor: 'teal', color: 'white'}}  headers={headers} items={datas}>Export to CSV</ExportJsonCsv>
            <button className='admin-logout'  onClick={logoutAdmin}>Admin Logout</button>
            </div> 
         
            </div>
            <div className='pages-btn-div border'>
            <ul className='pageNumbers'>

            <li>
                <button onClick={handlePrevBtn} disabled={currentPage === pages[1] ? true :  false} >PREV</button>
            </li>

            {renderPageNumber}
            {increamentBtn} 
            <li>
                <button onClick={handleNextBtn}  disabled={currentPage === pages[pages.length -1 ] ? true :  false} >NEXT</button>
            </li>
            </ul>
            </div>
        </div>

        {loading ? <h4>Loading...</h4> : null}

  <div className='table-div table'>

      {
        allqueries ? (
          <div className='contact-query-div'>
          <div className='go-back-div'>
            <button className='go-back' onClick={goBackHandler}>Go Back</button>
          </div>
            <div className='contact-tables table'>
            <table className='query-table'>
          <tbody>
       <tr className='table-danger sticky-top'>
    <th>User Id</th>
    <th>Name</th>
    <th>E-mail</th>
    <th>Phone</th>
    <th>Queries</th>
    <th>Date</th>

      </tr>
      {query?.map((d)=>{
        return(
          <tr className='table-info'  key={d._id}>
    <td>{d._id}</td>
    <td>{d.name}</td>
    <td>{d.email}</td>
    <td>{d.phone}</td>
    <td>{d.message}</td>
    <td>{new Date(d.createdAt).toDateString()}</td>
  </tr>
        )
      })}
    
  </tbody>
</table>
            </div>
          </div>
        ) : (
          
          <table >
          <tbody>
       <tr className='table-danger sticky-top'>
    <th>Registration Number</th>
    <th>Candidate Name</th>
    <th>Father/Husband Name</th>
    <th>Mother Name</th>
    <th>D.O.B</th>
    <th>E-mail</th>
    <th>Phone</th>
    <th>Apply For</th>
    <th>Application Fees</th>
    <th>Payment Status</th>
    <th>More...</th>
      </tr>
      {currentItems?.map((d)=>{
        return(
          <tr className='table-warning'  key={d._id}>
    <td>{d.registrationNumber}</td>
    <td>{d.candidatename}</td>
    <td>{d.fatherhusbandname}</td>
    <td>{d.mothername}</td>
    <td>{d.dateofbirth}</td>
    <td>{d.email}</td>
    <td>{d.mobile}</td>
    <td>{d.postapply}</td>
    <td>{d.price}</td>
    <td>{d.paymentStatus}</td>
    <td><button className='btn btn-secondary'  onClick={getSingleFromData} id={d._id}>View</button></td>
  </tr>
        )
      })}
    
  </tbody>
</table>
        )
      }
        </div>
    
    </div>
    <div className='gallery-main-div container' >
          <h1>Gallery Section</h1>
          <div className='mb-5 mt-5'>
           <label className='gallery-upload-icon-bg' htmlFor="gallery-upload"><MdFileUpload className='gallery-upload-icon'  /></label>
           <img src={galleryImage ? URL.createObjectURL(galleryImage): "/images/dummyimage.jpeg"} width={100} height={80} alt="" />
            <input  accept='.jpg, .png, .jpeg'   className='gallery-upload-input'  type="file" id='gallery-upload' onChange={(e)=> setGalleryImage(e.target.files[0])} />

            <button className='ms-3 btn btn-warning' onClick={galleryUpload} >Upload Image</button>
          </div>
            <div>
              <p >{uploadImgMsg}</p>
              <span onClick={delAllGalImg} className='p-5'>Delete All Images<MdDeleteForever className='galleryImgDelIcon'/></span>
            </div>

          <div className='gallery-image-list  border'>

          {
            galleyImageStore.map((d)=>{
              return( <div className='galerry-list' key={d._id}>
                  <img src={PublicFolder+d.galleryImageUrl}  width={100} height={80}  alt="" />
                 <span onClick={galleryImageDelHandler} id={d._id} ><MdOutlineDeleteOutline className='galleryImgDelIcon'/></span>
              </div>)
            })
          }
              
          </div>
       </div>
    </>
  )
}

export default Admin