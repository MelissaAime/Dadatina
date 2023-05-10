import { MyNavigation } from "../../components/Navigation/navigation";
import { HeroImage } from "../../components/heroImage/heroImage";


export const SocialMedia = () => {

    const imageLink = 'https://via.placeholder.com/300';

    return(
     <>
        <HeroImage imageLink={imageLink} />
        <MyNavigation />

        <div className="social-media">
            <div data-mc-src="19902743-aa32-49ba-a939-6b338c64f109#instagram"></div>
            <div data-mc-src="59dad293-f5c1-483f-a1a0-c1aa09306eb5#youtube"></div>
        </div>
        
     </>
    )
}