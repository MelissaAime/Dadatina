import { MySwiper } from '../../components/Swiper/swiper';

export const Home = () => {
    return(
        <>
            <div className="home-background"> </div>

            <div className='swiper-container'>
                <MySwiper/>
                <MySwiper/>
                <MySwiper/>
            </div>
        </>
    )
}