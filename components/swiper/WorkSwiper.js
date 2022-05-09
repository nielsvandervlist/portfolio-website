// Import Swiper React components
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper'
import Card from '../cards/Card'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

export default function WorkSwiper ({cards}){
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
            onSlideChange={() => console.log('slide change')}
            className={'mySwiper'}
            breakpoints={{
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
        >
            {
                cards.map((card, index) => {
                    return <SwiperSlide key={index}>
                        <Card/>
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
};
