import { MyNavigation } from "../../components/Navigation/navigation";
import { HeroImage } from "../../components/heroImage/heroImage";

export const MyBook = () => {

    const imageLink = 'https://via.placeholder.com/300';
    const bookImage = 'https://pedidosfarma.vtexassets.com/arquivos/ids/182814-1200-auto?v=637565885549970000&width=1200&height=auto&aspect=true';
    return(
     <>
        <HeroImage imageLink={imageLink} />
        <MyNavigation />

        <div className="book">
            <img src={bookImage} alt="book" className="book-image" />
        </div>
     </>
    )
}