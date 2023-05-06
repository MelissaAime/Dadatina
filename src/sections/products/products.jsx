import { Cards } from "../../components/Cards/cards";
import { MyData } from "../../Data";

export const Products = () => {

    const projects = MyData();

    return(
        <div>
            {projects.map(({id, title, text, image}) => (
                <Cards  title={title} text={text} image={image} alt={title}/>
            ))}
        </div>
    )
}