import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <h3>lacis</h3>
            <div>
                <Link to="/">About</Link>
                <Link to="/">Skills</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Services</Link>
                <Link to="/">Contact</Link>
            </div>
        </nav>
    )
}
export default Navbar
