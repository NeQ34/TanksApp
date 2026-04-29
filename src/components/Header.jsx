import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#hero" className="logo">WW2<span>Tanks</span></a>

        <button
          className="nav-toggle"
          aria-label="Otwórz menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          <ul>
            <li><a href="#hero">Start</a></li>
            <li><a href="#overview">Przegląd</a></li>
            <li><a href="#tanks">Czołgi</a></li>
            <li><a href="#timeline">Chronologia</a></li>
            <li><a href="#resources">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
