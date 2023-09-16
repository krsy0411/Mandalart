import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../css/guide.style.css";
import SwiperSlide1 from "../assets/guide1.png";
import SwiperSlide2 from "../assets/guide2.png";
import SwiperSlide3 from "../assets/guide3.png";

export default function Guide() {

    return (
        <div className="guide-container">
            <Swiper className="swiper-container"
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{ clickable: true }}
                navigation={true}
            >
                <SwiperSlide>
                    <img src={SwiperSlide1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SwiperSlide2} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SwiperSlide3} alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
