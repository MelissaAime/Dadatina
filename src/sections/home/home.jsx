import { MySwiper } from '../../components/Swiper/swiper';
import { Lanzamiento } from '../../components/lanzamiento/lanzamiento';
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

            <Lanzamiento/>

            <div className='container-home'>
                <Subtitle 
                    title="Productos destacados:" 
                    href="/productos" 
                    text="ver todos los productos"
                />
                <MySwiper/>
            </div>

            <div className='container-home'>
                <Subtitle 
                    title="Posts de instagram:"
                    href="/redes"
                    text="todas las redes sociales"
                />
                <div data-mc-src="19902743-aa32-49ba-a939-6b338c64f109#instagram"></div>
            </div>
        </>
    )
}