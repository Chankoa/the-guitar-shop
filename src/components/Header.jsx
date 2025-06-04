import { useOffCanvas } from '../hooks/useOffCanvas';
import styles from '../../web-components-library/src/styles/variables.module.css';
import '../css/Header.css';

function Header() {
  const { isMenuOpen, toggleMenu } = useOffCanvas();

  return (
    <header className={`banner underline-flame ${isMenuOpen ? 'nav-open' : ''}`}>
      <nav className="main-nav container">
        <a href="/" className="logo">Guitar Shop</a>
        
        <button 
          className="nav-toggle" 
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span className="hamburger"></span>
        </button>

        <div className="nav-overlay" onClick={toggleMenu}></div>
        <div className="nav-wrapper">
          <ul className="main-menu">
            <li><a href="#guitares" onClick={toggleMenu}>Guitares</a></li>
            <li><a href="#amplis" onClick={toggleMenu}>Amplis</a></li>
            <li><a href="#effets" onClick={toggleMenu}>Effets</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;