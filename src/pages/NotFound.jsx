import { Link } from 'react-router-dom';
import '../styles/App.css';

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="back-home-btn">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;