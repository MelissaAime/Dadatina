import { MyNavigation } from "../../components/Navigation/navigation";
import { MyButton } from "../../components/button/myButton";
import { HeroImage } from "../../components/heroImage/heroImage";
import imageLink from "../../images/book-person.jpg";

export const MyBook = () => {

    const bookImage = 'https://pedidosfarma.vtexassets.com/arquivos/ids/182814-1200-auto?v=637565885549970000&width=1200&height=auto&aspect=true';
    
    return(
     <>
        <HeroImage imageLink={imageLink} />
        <MyNavigation />

        <div className="book">
            <img src={bookImage} alt="book" className="book-image" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium voluptates quisquam, ipsum harum optio quae ipsa, ipsam consectetur ducimus dolorem quos molestiae repudiandae vitae! Repellat eum dolores perspiciatis saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo quaerat quam perferendis deleniti accusantium laboriosam quasi sequi ratione nihil, veniam illum cum aspernatur. Rerum suscipit voluptatum quidem perferendis nobis.</p>
            <div>
                <MyButton content="dónde comprar"/>
            </div>
        </div>
     </>
    )
}