import { Link } from 'react-router-dom';
import '../styles/App.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__brand">
        CountryPeek
      </Link>
      <nav className="header__nav">
        <Link to="/" className="header__link">Home</Link>
        <Link to="/favourites" className="header__link">Favourites</Link>
      </nav>
    </header>
  );
}

export default Header;