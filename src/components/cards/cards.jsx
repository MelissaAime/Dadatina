export const Cards = ({product}) => {
    return (
        <figure className="card swiper-slide">
            <img src={product.image} alt={product.title}/>
            <figcaption>
                <h2>{product.title}</h2>
                <p>{product.text}</p>
            </figcaption>
        </figure>
    );
}