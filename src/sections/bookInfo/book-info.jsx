import { MyNavigation } from "../../components/Navigation/navigation";
import { HeroImage } from "../../components/heroImage/heroImage";
import imageLink from "../../images/book-person.jpg";

export const BookInfo = () => {
    return(
        <>
            <HeroImage imageLink={imageLink} />
            <MyNavigation />
            <p>hola</p>
        </>
    )
}
