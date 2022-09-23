import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useLocation} from 'react-router-dom';

const ViewCandidatesDetails = () => {
    
    const location = useLocation();
    
    const [data,setData] = useState(0);

  //  console.log("params",location.state.id);

    // let getLoggedinuser = localStorage.getItem('userinfo')
    // let user = JSON.parse(getLoggedinuser)
    //console.log("testing",user.id)

  
 
    const getData = async ()=>{

        await axios.get(`${process.env.REACT_APP_HOSTURL}/api/v1/formdata/${location.state.id}`).then(res=>{
            console.log(res.data);
            setData(res.data.response);
            }).catch(err=>{
                console.log("error",err);
            })
          } 


    
      useEffect(()=>{
        getData()
        // eslint-disable-next-line
    }, []);

    
    const PublicFolder =  `${process.env.REACT_APP_HOSTURL}/api/v1/`
    
  return (
    <>
    <div className='viewCandi-main-container '>

    <div className='container'>
         <div className='view-form-container-inner-div'>
                <div className='heading-title-form-div d-print-none'>
                <h3>Your Application Form</h3>
                </div>
                <div className='candidate-form-main-div border border-secondary shadow-sm'>
                      <div className='candidate-view-form-inner-hading-div'>
                            <img className='cand-form-logo-img'  src="/images/logo.png"  alt="nia logo" />
                            <div className='form-inner-heading-div'>
                            <h2>NIA Aviation Services Pvt Ltd.</h2>
                            <h5>( Registered Under Ministery Of Corporate Affairs )</h5>
                            </div>
                      </div>  

                    <div className='border border-secondary border-bottom-0   hr-line-form-div'></div>

            <div className='candi-form-details-div'>
                <div className='candidate-detail-left-div border'>
                    <div className='inner-detail-div'>
                        <h5>Registration No:</h5>
                        <p>{data?.registrationNumber}</p>
                    </div>
                    <div className='inner-detail-div'>
                        <h5>Candidate Name:</h5>
                        <p>{data?.candidatename}</p>
                    </div>
                    <div className='inner-detail-div'>
                        <h5>Last Name:</h5>
                        <p>{data?.lastname}</p>
                    </div>
                    <div className='inner-detail-div'>
                        <h5>Father/Husband/Name:</h5>
                        <p>{data?.fatherhusbandname}</p>
                    </div>
                    <div className='inner-detail-div'>
                        <h5>Mother Name:</h5>
                        <p>{data?.mothername}</p>
                    </div>
                    <div className='inner-detail-div'>
                        <h5>Date Of Birth:</h5>
                        <p>{data?.dateofbirth}</p>
                    </div>
                    <div className='inner-detail-div'>
                        <h5>Gender:</h5>
                        <p>{data?.gender}</p>
                    </div>
                    <div className='inner-detail-div'>
                        <h5>Categories (cast):</h5>
                        <p>{data?.categorycast}</p>
                    </div>
                    <div className='inner-detail-div'>
                        <h5>Marital Status:</h5>
                        <p>{data?.maritalstatus}</p>
                    </div>
                    <div className='inner-detail-div'>
                        <h5>Apply For:</h5>
                        <p>{data?.postapply}</p>
                    </div>
                </div>
                <div className='candidate-detail-right-div border'>
                    <div className='application-n-div'>
                        <h6>Application No:</h6>
                        <p>{data?.applicationnumber}</p>
                    </div>
                    <div className='form-cand-photo-div'>
                        <h6>Photo:</h6>
                        <img className='cand-phot-form' src={PublicFolder+data?.uploadphoto} alt="" />
                    </div>
                    <div className='form-cand-sign-div'>
                        <h6>Signature:</h6>
                        <img className='cand-sign-form' src={PublicFolder+data?.uploadsignature} alt="" />
                    </div>
                </div>      
            </div>

            <div className='border border-secondary border-bottom-0   hr-line-form-div'></div>

            <div className='form-edu-main-div'>
                <div className='form-edu-left-inner-div'>
                    <div className='form-edu-detail-div'>
                        <h5>Email:</h5>
                        <p>{data?.email}</p>
                    </div>
                    <div className='form-edu-detail-div'>
                        <h5>Education Type:</h5>
                        <p>{data?.educationalqualification}</p>
                    </div>
                    <div className='form-edu-detail-div'>
                        <h5>Intermediate:</h5>
                        <p>{data?.intermediate}
                        </p>
                    </div>
                    <div className='form-edu-detail-div'>
                        <h5>High School:</h5>
                        <p>{data?.highschool}</p>
                    </div>

                </div>
                <div className='form-ed-right-inner-div'>
                    <div className='form-ed-right'>
                        <h6>Mobile No:</h6>
                        <p>{data?.mobile}</p>
                    </div>
                    <div className='form-ed-right education-type-division'>
                        <h6>Division:</h6>
                        <p>{data?.educationdivision}</p>
                    </div>
                    <div className='form-ed-right intermediate-type-division'>
                        <h6>Division:</h6>
                        <p>{data?.intermediatedivision}</p>
                    </div>
                    <div className='form-ed-right highschool-type-division'>
                        <h6>Division:</h6>
                        <p>{data?.highschooldivision}</p>
                    </div>

                </div>
            </div>

            <div className='border border-secondary border-bottom-0   hr-line-form-div'></div>

            <div className='form-address-main-div'>
                <div className='form-present-address-div'>
                    <h5>Present Address:</h5>
                </div>

                <div className='form-present-add-detail  container'>
                    <div className='form-prsnt-add-data'>
                        <div className='prsnt-add-detail'>
                            <h5>Street:</h5>
                            <p>{data?.address?.present?.street}</p>
                        </div>
                    </div>  
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>House No:</h5>
                            <p>{data?.address?.present?.houseno}
                        </p>
                        </div>
                    </div>  
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>Village:</h5>
                            <p>{data?.address?.present?.village}
                        </p>
                        </div>  
                    </div>  
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>City:</h5>
                            <p>{data?.address?.present?.village}
                        </p>
                        </div>  
                    </div>  
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>Post Office:</h5>
                            <p>{data?.address?.present?.postoffice}
                        </p>
                        </div>  
                    </div>   
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>State:</h5>
                            <p>{data?.address?.present?.state}
                        </p>
                        </div>  
                    </div>   
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>District:</h5>
                            <p>{data?.address?.present?.district}
                        </p>
                        </div>  
                    </div>   
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>Pincode:</h5>
                            <p>{data?.address?.present?.pincode}
                            </p>
                        </div>  
                    </div>   
                </div>
            </div>

            <div className='border same-add-div'>
                <h5>Same Address: </h5>
                <p>{data?.isPresent ? '---' : "Yes Same As Above"}</p>
                
            </div>

            <div className='form-address-main-div'>
                <div className='form-present-address-div'>
                    <h5>Permanent Address:</h5>
                </div>

                <div className='form-present-add-detail  container'>
                    <div className='form-prsnt-add-data'>
                        <div className='prsnt-add-detail'>
                            <h5>Street:</h5>
                            <p>{data?.address?.permanent?.pr_street}</p>
                        </div>
                    </div>  
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>House No:</h5>
                            <p>{data?.address?.permanent?.pr_houseno}
                        </p>
                        </div>
                    </div>  
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>Village:</h5>
                            <p>{data?.address?.permanent?.pr_village}
                        </p>
                        </div>  
                    </div>  
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>City:</h5>
                            <p>{data?.address?.permanent?.pr_city}
                        </p>
                        </div>  
                    </div>  
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>Post Office:</h5>
                            <p>{data?.address?.permanent?.pr_postoffice}
                        </p>
                        </div>  
                    </div>   
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>State:</h5>
                            <p>{data?.address?.permanent?.pr_state}
                        </p>
                        </div>  
                    </div>   
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>District:</h5>
                            <p>{data?.address?.permanent?.pr_district}
                        </p>
                        </div>  
                    </div>   
                    <div className='form-prsnt-add-data'>
                    <div className='prsnt-add-detail'>
                            <h5>Pincode:</h5>
                            <p>{data?.address?.permanent?.pr_pincode}
                        </p>
                        </div>  
                    </div>   
                </div>
            </div>

            <div className='border border-secondary border-bottom-0   hr-line-form-div'></div>

            <div className='desclaimer-div'>
                    <h5>Declaration:</h5>
                    <p>
                    {data?.isDeclaration ? ' I declare that the name, class, date of birth, address and other information given by me in the online application form is correct to the best of my knowledge and belief. Which I declare to be truely correct. If the above information is found incomplete or incorrect, my candidature is liable to be terminated at any time.': 'Not Selected'}
                   
                    </p>
            </div>

                <div className='form-exam-centre-div'>
                    <div className='form-exam=cntr'>
                        <h5>Exam Centre State</h5>
                        <p>{data?.examCentreState}</p>
                    </div>
                    <div className='form-exam=cntr'>
                        <h5>Exam Centre City</h5>
                        <p>{data?.examCentreCity}</p>
                    </div>
                </div>


                <div className='form-payment-div'>
                    <h5 className='payment-detail'>Payment Details:</h5>

                    <div className='form-pay-detail-all'>
                        <h5>Application Fee:</h5>
                        <p>{data?.price}</p>
                    </div>
                    <div className='form-pay-detail-all'>
                        <h5>Payment ID:</h5>
                        <p>{data?.paymentId}</p>
                    </div>
                    <div className='form-pay-detail-all'>
                        <h5>Payment Status:</h5>
                        <p>{data?.paymentStatus}</p>
                    </div>
                </div>

                <div className='d-print-none  print-application-div'>
                <button className='btn btn-success'  onClick={()=> window.print()}>Print Application Form</button>
                </div>

                </div>
         </div>
    </div>
    </div>
    </>
  )
}

export default ViewCandidatesDetails