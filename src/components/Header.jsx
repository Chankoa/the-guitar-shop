function Header() {
  return (
    <header className="banner underline-flame">
      <nav className="main-nav container">
        <a href="/" className="logo">Guitar Shop</a>
        
        <button className="nav-toggle" aria-label="Menu">
          <span className="hamburger"></span>
        </button>

        <div className="nav-overlay"></div>
        <div className="nav-wrapper">
          <ul className="main-menu">
            <li><a href="#guitares">Guitares</a></li>
            <li><a href="#amplis">Amplis</a></li>
            <li><a href="#effets">Effets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;