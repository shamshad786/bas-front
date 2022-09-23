import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdDownload } from "react-icons/md";

const Candidate = () => {
 
    const [data,setData] = useState(0);
    const navigate = useNavigate();

    let getLoggedinuser = localStorage.getItem('userinfo')
    
    let user = JSON.parse(getLoggedinuser)

    console.log("User ID",user.id)

    const getData = async ()=>{
         await axios.get(`${process.env.REACT_APP_HOSTURL}/api/v1/userdash/${user.id}`).then(res=>{
            console.log(res.data);
            setData(res.data);
            }).catch(err=>{
                console.log("error",err);
            }) 
          }
      useEffect(()=>{
        getData()
    },[]);

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
    return (
      <>

    <div className='container candidate-main-div'>
           <h3>Your Submitted Applications Forms</h3> 
        <div className='container-inner-div'>
            <div className='candidate-form-table-div'> 
          <table className='table table-light table-hover shadow-sm'>
  <thead> 
    <tr>
      <th>Name</th>
      <th>D.O.B</th>
      <th>Father</th>
      <th>Apply For</th>
      <th>Payment Status</th>
      <th>Download</th>
    </tr>
  </thead>
  <tbody>
  {data.response?.map((d)=>{
         return(
            <tr key={d._id} >
            <td>{d.candidatename}</td>
            <td>{d.dateofbirth}</td>
            <td>{d.fatherhusbandname}</td>
            <td>{d.postapply}</td>
            <td>{d.paymentStatus}</td>
            <td><button className='btn btn-warning'  onClick={getSingleFromData} id={d._id}>Download</button></td>     
            </tr>
         )
     })}
   
  </tbody>
</table>
                 
                  
            </div>
        </div>
    </div>
      </>
  )
}

export default Candidate