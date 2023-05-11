import { MySwiper } from '../../components/Swiper/swiper';
import imageLink from "../../images/kit1.png"

export const Home = () => {
    return(
        <>
            <div 
                className="home-background"
                style={{
                    background: `url(${imageLink})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}> 
            </div>


            <div className='swiper-container'>
                <MySwiper/>
                <MySwiper/>
                <MySwiper/>
            </div>
        </>
    )
}