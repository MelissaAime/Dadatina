import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Cards } from "../Cards/cards";

import { MyData } from "../../Data";

export const MySwiper = () => {

    const projects = MyData();
    
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        breakpoints={{
            640: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
            1024: {
            slidesPerView: 4,
            spaceBetween: 40,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }}
        modules={[Navigation]}
        className="mySwiper swiper"
      >
            {projects.filter(project => [1, 3, 5].includes(project.id)).map(({id, title, text, image}) => (
            <SwiperSlide key={id} className="swiper-slide"> 
              <div className="card-wrapper">
                <Cards  title={title} text={text} image={image} alt={title}/>
              </div>  
            </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}