// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper'
import Card from '../cards/Card'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function WorkSwiper ({cards}){
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
        >
            {
                cards.map((card, index) => {
                    return <SwiperSlide key={index}>
                        <Card>Test</Card>
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
};
