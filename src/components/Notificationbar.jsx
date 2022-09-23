import React from 'react'
import './css/notificationbar.css'



const Notificationbar = (props) => {


  return (
    <div className='notification-main-div'>

      <div className='notifi-heading border'>
        <h4>Latest <br/> 
        Updates and Alerts</h4>
      </div>

      <div className='notifi-lists'>
      {props.data.map((d)=>{
        return(
        <p key={d.id} className='noti-list'>{d.desc}</p>
        )
      })}
      </div>
    </div>
  ) 
}

export default Notificationbar