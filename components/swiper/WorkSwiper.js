// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper'
import Card from '../cards/Card'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

export default function WorkSwiper ({cards}){
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
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
