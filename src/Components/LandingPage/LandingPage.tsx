import "./landing.css"
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa"

const LandingPage = () => {
    return (
        <section className="landing-page">
            <div className="landing-shape"></div>
            <div className="landing-main">
                <div className="socials">
                    <button type="button">
                        <FaWhatsapp />
                    </button>
                    <button type="button">
                        <FaGithub />
                    </button>
                    <button type="button">
                        <FaLinkedinIn />
                    </button>
                </div>
                <div className="info">
                    <div className="janis-pic"></div>
                    <div className="description">
                        <h1>
                            <span>{"<h1>"}</span>Janis{" "}
                            <span className="lacis">Lacis</span>
                            <span>{"</h1>"}</span>
                        </h1>
                        <h4>
                            <span>{"<h4>"}</span>Web Developer and Designer
                            <span>{"</h4>"}</span>
                        </h4>
                    </div>
                </div>
                <div></div>
                <button type="button">
                    <h5>Contact</h5>
                </button>
            </div>
        </section>
    )
}
export default LandingPage
