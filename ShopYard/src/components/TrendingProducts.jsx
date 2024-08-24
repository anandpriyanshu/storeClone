import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';


const TrendingProducts = () => {


    const slidesData = [
        { "imgSrc": "images/9.jpg", "altText": "LEOTUDE Men T-Shirt", "description": "LEOTUDE Men T-Shirt || T-Shirt for Men" },
        { "imgSrc": "images/10.jpg", "altText": "GoSriKi Women's Kurta", "description": "GoSriKi Women's Kurta with Pant & Dupatta" },
        { "imgSrc": "images/6.jpg", "altText": "Nike Shoes", "description": "Nike Shoes" },
        { "imgSrc": "images/11.jpg", "altText": "Lenovo Backpack", "description": "Lenovo 15.6\" Casual Backpack B210" },
        { "imgSrc": "images/12.jpg", "altText": "Lymio Men Cargo", "description": "Lymio Men Cargo || Men Cargo Pants" },
        { "imgSrc": "images/13.jpg", "altText": "Lifelong Dumbbells", "description": "Lifelong PVC Hex Dumbbells Pack of 2 for Home Gym Equipment Fitness" }
    ]



    return (
        <>

            <h3 style={{ margin: "0% 12% " }}>Our Trending Products</h3>

            <Swiper

                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay]}
                className="mySwiper"
            >

                {
                    slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.imgSrc} alt={slide.altText} />
                            <p>{slide.description}</p>
                        </SwiperSlide>
                    ))

                }



            </Swiper>


        </>
    )
}

export default TrendingProducts