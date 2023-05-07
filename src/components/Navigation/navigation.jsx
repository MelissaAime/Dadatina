import { Link, useLocation } from 'react-router-dom';

export const MyNavigation = () => {
  const location = useLocation();
  const parts = location.pathname.split('/').filter(Boolean);

  return (
    <div className='breadcrumb-container' aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Inicio</Link>
        </li>
        {parts.map((part, i) => {
          const isLastPart = i === parts.length - 1;
          const linkTo = `/${parts.slice(0, i + 1).join('/')}`;
          return (
            <li className="breadcrumb-item" key={part}>
              {isLastPart ? (
                <span>{part}</span>
              ) : (
                <Link to={linkTo}>{part}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
