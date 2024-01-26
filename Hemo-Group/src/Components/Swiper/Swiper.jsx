import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.css'
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import BannerOne from '../../assets/Imagenes/banner1.jpeg'
import BannerTwo from '../../assets/Imagenes/banner2.jpeg'
import BannerThree from '../../assets/Imagenes/banner3.jpeg'
import BannerFour from '../../assets/Imagenes/banner4.jpeg'


export const SliderSwiper = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={BannerOne} alt="" /></SwiperSlide>
                <SwiperSlide><img src={BannerTwo} alt="" /></SwiperSlide>
                <SwiperSlide><img src={BannerThree} alt="" /></SwiperSlide>
                <SwiperSlide><img src={BannerFour} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
}