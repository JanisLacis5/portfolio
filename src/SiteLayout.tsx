import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Navbar } from "./Components"
import "./index.css"

const SiteLayout = () => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate("/landing")
	}, [])

	return (
		<main>
			<Navbar />
			<Outlet />
		</main>
	)
}
export default SiteLayout
