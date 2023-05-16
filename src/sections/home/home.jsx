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
                <div data-mc-src="19902743-aa32-49ba-a939-6b338c64f109#instagram"></div>
            </div>
        </>
    )
}