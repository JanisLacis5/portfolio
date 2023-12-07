import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<nav>
			<h4>lacis</h4>
			<div>
				<a href="#about">
					<p>About</p>
				</a>
				<Link to="/">
					<p>Skills</p>
				</Link>
				<Link to="/">
					<p>Projects</p>
				</Link>
				<Link to="/">
					<p>Services</p>
				</Link>
				<Link to="/">
					<p>Contact</p>
				</Link>
			</div>
		</nav>
	)
}
export default Navbar
