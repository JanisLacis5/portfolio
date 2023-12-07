import { LandingPage } from "."
import About from "./About/About"
import "./main.css"

const MainPageLayout = () => {
	return (
		<section className="main-page-layout">
			<LandingPage />
			<About />
		</section>
	)
}

export default MainPageLayout
