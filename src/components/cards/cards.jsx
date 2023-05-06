export const Cards = ({title, text, image, alt}) => {
    return (
        <figure className="card swiper-slide">
            <img src={image} alt={alt}/>
            <figcaption>
                <h2>{title}</h2>
                <p>{text}</p>
            </figcaption>
        </figure>
    );
}