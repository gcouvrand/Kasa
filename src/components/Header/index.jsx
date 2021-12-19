import { Link } from "react-router-dom"
import logo from "../../assets/LOGO.svg";

function Header() {
    return (
        <div className="header_nav">
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/About">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header