export const Subtitle = ({ title, href, text, target }) => {
    return (
        <div className="subtitle">
            <h2 className="subtitle-text">{title}</h2>
            <a className="see-more" href={href} target={target}>{text}</a>
        </div>
    )
}