import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay]);

const Slider = () => {
  return (

    <>
        <div className="container-fluid slider-div g-0">
            <Swiper 
                spaceBetween={0}
                centeredSlides={false}
                loop={true}
                slidesPerView={'1'}
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                }}>
                <SwiperSlide>
                <div className="slider-div">
                 <img src="/images/noidaairport.png" width={800} height={400} alt=""/>
                </div>
             </SwiperSlide>
                <SwiperSlide>
                <div className="slider-div">
                <img src="/images/noidaairport.png" width={800} height={400} alt=""/>
                </div>
             </SwiperSlide>
                <SwiperSlide>
                <div className="slider-div">
                <img src="/images/noidaairport.png" width={800} height={400} alt=""/>
                </div>
             </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default Slider