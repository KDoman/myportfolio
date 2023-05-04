import { Link } from "react-scroll";
import { HamburgerMenu } from "../hambMenu/HambMenu";

export function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-container_navigation">
        <HamburgerMenu />
        <ul className="full-screen-ul">
          <li>
            <Link
              className="a-no-decoration"
              to="href-about"
              offset={-250}
              ignoreCancelEvents={true}
              duration={1000}
              smooth={true}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              className="a-no-decoration"
              to="href-experience"
              offset={-230}
              ignoreCancelEvents={true}
              duration={1500}
              smooth={true}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              className="a-no-decoration"
              to="href-projects"
              offset={-300}
              ignoreCancelEvents={true}
              duration={1500}
              smooth={true}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="a-no-decoration"
              to="href-skills"
              offset={-80}
              ignoreCancelEvents={true}
              duration={1500}
              smooth={true}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="a-no-decoration"
              to="href-contact"
              offset={-170}
              ignoreCancelEvents={true}
              duration={1500}
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
