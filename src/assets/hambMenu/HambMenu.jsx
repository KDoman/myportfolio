import { useState } from "react";
import { Link } from "react-scroll";

export function HamburgerMenu() {
  const [navbar, isNavbar] = useState(true);

  const buttonOnClick = () => {
    isNavbar(!navbar);
  };

  return (
    <div>
      <div className={navbar ? "sidebar hide" : "sidebar"}>
        <ul className="sidebar-ul">
          <li>
            <Link
              className="sidebar-a"
              to="href-about"
              offset={-250}
              ignoreCancelEvents={true}
              duration={1000}
              smooth={true}
              onClick={buttonOnClick}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              className="sidebar-a"
              to="href-experience"
              offset={-230}
              ignoreCancelEvents={true}
              duration={1500}
              smooth={true}
              onClick={buttonOnClick}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              className="sidebar-a"
              to="href-projects"
              offset={-300}
              ignoreCancelEvents={true}
              duration={1500}
              smooth={true}
              onClick={buttonOnClick}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="sidebar-a"
              to="href-skills"
              offset={-80}
              ignoreCancelEvents={true}
              duration={1500}
              smooth={true}
              onClick={buttonOnClick}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="sidebar-a"
              to="href-contact"
              offset={-170}
              ignoreCancelEvents={true}
              duration={1500}
              smooth={true}
              onClick={buttonOnClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={navbar ? "hambMenu" : "hambMenu white"}
        onClick={buttonOnClick}
      >
        <div className={navbar ? "hambLine" : "hambLine exit"}></div>
        <div className={navbar ? "hambLine" : "hambLine exit"}></div>
        <div className={navbar ? "hambLine" : "hambLine exit"}></div>
      </div>
    </div>
  );
}
