import { useNavigate } from 'react-router-dom';

export const MyButton = ({ content }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/libro/comprar');
    };

    return (
        <button className="my-button" type="button" onClick={handleClick}>
            {content}
        </button>
    );
};