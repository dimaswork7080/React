import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Header() {
    const { theme, toggleTheme} = useTheme();

    return (
        <header className={`header theme-${theme}`}>
            <h1>SOCIAL MEDIA KILLED ROMANCE</h1>
            <p>for communication</p>

            <nav className="navigation">
                <Link className={`nav-link theme-${theme}`} to="/">
                    Главная
                </Link>
                <Link className={`nav-link theme-${theme}`} to="/profile">
                    Моя страница
                </Link>
                <Link className={`nav-link theme-${theme}`} to="/settings">
                    Настройки
                </Link>
                <Link className={`nav-link theme-${theme}`} to="/about">
                    О проекте
                </Link>
                <button onClick={toggleTheme}>
                    {theme === "light" ? "🌙" : "☀"}
                </button>
            </nav>
        </header>

    )
}
export default Header;