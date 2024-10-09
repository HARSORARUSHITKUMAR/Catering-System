import About from "../pages/About";
import Contact from "../pages/Contact";
import Menu from "../pages/Menu";
import { Link, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";

const Home = () => {
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                {/* <RouterLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4" style={{ cursor: 'pointer' }}>Gourmet au Catering</span>
                </RouterLink> */}
                {/* <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4" style={{
                        cursor: 'pointer'
                    }}>Gourmet au Catering</span>
                </Link> */}
                <Link
                    to="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                >
                    <span className="fs-4" style={{ cursor: "pointer" }}>
                        Gourmet au Catering
                    </span>
                </Link>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <ScrollLink to="about" className="nav-link" style={{ cursor: 'pointer' }}>
                            About
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="contact" className="nav-link" style={{ cursor: 'pointer' }}>
                            Contact
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="menu" className="nav-link" style={{ cursor: 'pointer' }}>
                            Menu
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <RouterLink to="/service" className="nav-link" style={{ cursor: 'pointer' }}>Service</RouterLink>
                    </li>
                </ul>
            </header>

            {/* <Element name="about"> */}
                <section id="about">
                    <About />
                </section>
            {/* </Element> */}

            {/* <Element name="contact"> */}
                <section id="contact">
                    <Contact />
                </section>
            {/* </Element> */}

            <Element name="menu">
                <section>
                    <Menu />
                </section>
            </Element>

            {/* <Service /> */}
        </div>
    );
};

export default Home;
