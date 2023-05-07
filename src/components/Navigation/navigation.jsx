import { Link, useLocation } from 'react-router-dom';

export const MyNavigation = () => {
  const location = useLocation();
  const parts = location.pathname.split('/').filter(Boolean);

  return (
    <div aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Inicio</Link>
        </li>
        {parts.map((part, i) => (
          <li className="breadcrumb-item" key={part}>
            <Link to={`/${parts.slice(0, i + 1).join('/')}`}>{part}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
