import React, { useState } from 'react';
import './NavBar.css';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={menuOpen ? 'show-menu' : ''}>
            <div className="brand-container">
                <a href="#ancla-1"className="brand-name">Alexandr Chichizola</a>
            </div>
            <button className="hamburger-button" onClick={toggleMenu}>
                {menuOpen ? '✖' : '☰'}
            </button>
            <ul className='nav-list'>
                <li><a href="#ancla-1" onClick={closeMenu}>About me</a></li>
                <li><a href="#ancla-2" onClick={closeMenu}>Projects</a></li>
                <li><a href="#ancla-3" onClick={closeMenu}>Contact</a></li>
            </ul>
        </nav>
    )
}
