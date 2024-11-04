import './NavBar.css';

export default function NavBar() {
    return (
        <nav>
            <div className="brand-container">
                <a href="#ancla-1"className="brand-name">Alexandr Chichizola</a>
            </div>
            <ul>
                <li><a href="#ancla-1">About me</a></li>
                <li><a href="#ancla-2">Projects</a></li>
                <li><a href="#ancla-3">Contact</a></li>
            </ul>
        </nav>
    )
}