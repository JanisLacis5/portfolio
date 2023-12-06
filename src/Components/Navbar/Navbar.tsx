import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<nav>
			<h3>lacis</h3>
			<div>
				<Link to="/">
					<h6>About</h6>
				</Link>
				<Link to="/">
					<h6>Skills</h6>
				</Link>
				<Link to="/">
					<h6>Projects</h6>
				</Link>
				<Link to="/">
					<h6>Services</h6>
				</Link>
				<Link to="/">
					<h6>Contact</h6>
				</Link>
			</div>
		</nav>
	)
}
export default Navbar
