import React from 'react'
import Header from './Header/index';
import Footer from './Footer/index'

const index = (props) => {
  return (
    <div className={props.children}>
        <Header/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default index