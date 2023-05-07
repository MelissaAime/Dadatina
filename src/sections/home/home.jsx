import { MySwiper } from '../../components/Swiper/swiper';

export const Home = () => {
    return(
        <>
            <div className="home-background">
            </div>

            <div className='container'>
                <MySwiper/>
            </div>
            <MySwiper/>
            <MySwiper/>
            <MySwiper/>
        </>
    )
}