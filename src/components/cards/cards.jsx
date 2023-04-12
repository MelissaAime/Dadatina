export const Cards = ({title, text, image, alt}) => {
    return (
        <div className="container">
            <div className='cards'>
                <div className="cards-img">
                    <img  src={image} alt={alt}/>
                </div>
                <div className="cards-details">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}