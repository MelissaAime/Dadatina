export const Bookshop = ({image, title, text, buttoncontent, handleClick}) => {

    return(
        <div className="bookshop">
            <div className="bookshop-img">
                <img src={image} alt={title} />
            </div>
            <div className="bookshop-content">
                <h3>{title}</h3>
                <button className="my-button" type="button" onClick={handleClick}>
                    {buttoncontent}
                </button>
            </div>
        </div>
    )
}