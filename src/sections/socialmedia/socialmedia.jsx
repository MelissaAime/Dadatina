import { MyNavigation } from "../../components/Navigation/navigation";
import { HeroImage } from "../../components/heroImage/heroImage";

export const SocialMedia = () => {

    const imageLink = 'https://via.placeholder.com/300';

    return(
     <>
        <HeroImage imageLink={imageLink} />
        <MyNavigation />
     </>
    )
}