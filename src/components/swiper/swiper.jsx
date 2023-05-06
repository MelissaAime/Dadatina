import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Cards } from "../Cards/cards";

export const MySwiper = () => {
    
    const projects = [
        {
            'id': 1,
            'title': 'uno',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum',
            'image' : 'https://via.placeholder.com/300',
        },
        {
            'id': 2,
            'title': 'dos',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum',
            'image' : 'https://via.placeholder.com/300',
        },
        {
            'id': 3,
            'title': 'tres',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum',
            'image' : 'https://via.placeholder.com/300',
        },
        {
            'id': 4,
            'title': 'cuatro',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum',
            'image' : 'https://via.placeholder.com/300',
        },
        {
            'id': 5,
            'title': 'cinco',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum',
            'image' : 'https://via.placeholder.com/300',
        },
        {
            'id': 6,
            'title': 'seis',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum',
            'image' : 'https://via.placeholder.com/300',
        },
    ]

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
        }}
        modules={[Navigation]}
        className="mySwiper swiper"
      >
            {projects.map(({id, title, text, image}) => (
            <SwiperSlide key={id}>   
                <Cards  title={title} text={text} image={image} alt={title}/>
            </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}