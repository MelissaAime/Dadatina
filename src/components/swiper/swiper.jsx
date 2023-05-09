import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Cards } from "../Cards/cards";

import { MyData } from "../../Data";

export const MySwiper = () => {

    const products = MyData();
    
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={2}
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
            {products.filter((product, index) => index % 2 === 0).map((product) => (
              <SwiperSlide key={product.id} className="swiper-slide"> 
                <div className="card-wrapper card-swiper">
                  <Link to={`/productos/${product.title}`} key={product.id}>
                    <Cards product={product} />
                  </Link>
                </div>  
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}