import React, { useEffect, useState } from 'react'
import './css/gallery.css'
import ImageGallery from 'react-image-gallery';
import axios from 'axios';



const Gallery = () => {


  const [data, setData] = useState([]);

  const PublicFolder =  `${process.env.REACT_APP_HOSTURL}/api/v1/`

  const fetchImages = async(req,res)=>{
      try{

        const res = await axios.get(`${process.env.REACT_APP_HOSTURL}/api/v1/admin/gallery`);
       // console.log(res.data.imageResponse)
        setData(res.data.imageResponse)

      }catch(err){
        console.log('error fetch img: ',err)
      }
  }

useEffect(()=>{
  fetchImages()
},[])


  const imgData = data.map((d)=>{
    return d 
    
  })
  //console.log('Image data: ',imgData)

  
  const dataImages = [
   
  ]

//     const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//   },
// ];

imgData.forEach((el)=>{
  //console.log('for each: ',el.galleryImageUrl)

  const dataObj = {
    original: PublicFolder+el.galleryImageUrl,
    thumbnail:  PublicFolder+el.galleryImageUrl,
  }
  dataImages.push(dataObj)
})

console.log('empty ARR:',dataImages)
//
//console.log('imahges Obj', images)

  return (
   <>
        <div className='gallery-main-container'>
        <ImageGallery items={dataImages} />
        </div>
   </>
  )
}

export default Gallery