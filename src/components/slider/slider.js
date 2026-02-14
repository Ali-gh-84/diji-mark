import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

const Slider = ({
                    slides,
                    spaceBetween = 20,
                    slidesPerView = 1,
                    loop = false,
                }) => {
    return (
        <Swiper
            spaceBetween={spaceBetween}
            loop={loop}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: slidesPerView,
                },
            }}
        >
            {slides.map((item, index) => (
                <SwiperSlide key={index}>
                    {item}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
