import { MySwiper } from '../../components/Swiper/swiper';
import { Subtitle } from '../../components/subtitle/subtitle';
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

            <div className='container-home'>
                <Subtitle text="Productos destacados:"/>
                <MySwiper/>
            </div>

            <div className='container-home'>
                <Subtitle text="Posts de instagram:"/>
            </div>
        </>
    )
}