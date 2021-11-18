import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import home from '../../images/home.jpg'
import fitness from '../../images/fitness.jpg'
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/pagination/pagination.scss'
import "./Swipe.scss"
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation]);


function Swipe() {



    return (
        <>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 2000,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide key={ImageData.Id}>
                    <img src={home} alt='' height='800'
                        width='1500' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fitness} alt='' height='800'
                        width='1500' />
                </SwiperSlide>


            </Swiper>
        </>
    )
}
export default Swipe