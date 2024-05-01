import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle'


const Slider = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://i.ibb.co/qJ7L90F/26-Starry-Night-Over-The-Rhone.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/qdvm4BT/100-famous-paintings-big.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/qJ7L90F/26-Starry-Night-Over-The-Rhone.jpg" alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default Slider;