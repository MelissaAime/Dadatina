export const Subtitle = ({ title, href, text }) => {
    return (
        <div className="subtitle">
            <h2 className="subtitle-text">{title}</h2>
            <a className="see-more" href={href}>{text}</a>
        </div>
    )
}