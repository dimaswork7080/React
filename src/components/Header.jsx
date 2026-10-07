import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1>SOCIAL MEDIA KILLED ROMANCE</h1>
            <p>for communication</p>

            <nav className="navigation">
                <Link to="/">
                    Главная
                </Link>
                <Link to="/profile">
                    Моя страница
                </Link>
                <Link to="/settings">
                    Настройки
                </Link>
                <Link to="/about">
                    О проекте
                </Link>
            </nav>
        </header>

    )
}
export default Header;