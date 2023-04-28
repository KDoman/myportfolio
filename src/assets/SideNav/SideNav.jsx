import { Link } from "react-scroll";

import { useState, useEffect } from "react";

export function SideNav() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(window.scrollY);
    };
    window.onload = () => {
      document.querySelector(".side-nav-container").classList.add("none");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        scrollY >= 550
          ? "side-nav-container pop"
          : "side-nav-container dissapear"
      }
    >
      <ul>
        <li className={scrollY >= 0 && scrollY <= 1319 ? "current-li" : ""}>
          <Link
            className="a-no-decoration"
            to="href-about"
            offset={-250}
            ignoreCancelEvents={true}
            duration={1000}
            smooth={true}
          >
            <img
              src="Images/about-me.png"
              alt="about me logo"
              className={
                scrollY >= 0 && scrollY <= 1319
                  ? "side-bar-img color-img-invert"
                  : "side-bar-img"
              }
            ></img>
          </Link>
        </li>
        <li className={scrollY >= 1320 && scrollY <= 1999 ? "current-li" : ""}>
          <Link
            className="a-no-decoration"
            to="href-experience"
            offset={-230}
            ignoreCancelEvents={true}
            duration={1500}
            smooth={true}
          >
            <img
              src="Images/experience.png"
              alt="experience logo"
              className={
                scrollY >= 1320 && scrollY <= 1999
                  ? "side-bar-img color-img-invert"
                  : "side-bar-img"
              }
            ></img>
          </Link>
        </li>
        <li className={scrollY >= 2000 && scrollY <= 4219 ? "current-li" : ""}>
          <Link
            className="a-no-decoration"
            to="href-projects"
            offset={-120}
            ignoreCancelEvents={true}
            duration={1500}
            smooth={true}
          >
            <img
              src="Images/projects.png"
              alt="projects logo"
              className={
                scrollY >= 2000 && scrollY <= 4219
                  ? "side-bar-img color-img-invert"
                  : "side-bar-img"
              }
            ></img>
          </Link>
        </li>
        <li className={scrollY >= 4220 && scrollY <= 5350 ? "current-li" : ""}>
          <Link
            className="a-no-decoration"
            to="href-skills"
            offset={-80}
            ignoreCancelEvents={true}
            duration={1500}
            smooth={true}
          >
            <img
              src="Images/skills.png"
              alt="skills logo"
              className={
                scrollY >= 4220 && scrollY <= 5350
                  ? "side-bar-img color-img-invert"
                  : "side-bar-img"
              }
            ></img>
          </Link>
        </li>
        <li className={scrollY >= 5351 ? "current-li" : ""}>
          <Link
            className="a-no-decoration"
            to="href-contact"
            offset={-170}
            ignoreCancelEvents={true}
            duration={1500}
            smooth={true}
          >
            <img
              src="Images/contact.png"
              alt="contact logo"
              className={
                scrollY >= 5351
                  ? "side-bar-img color-img-invert"
                  : "side-bar-img"
              }
            ></img>
          </Link>
        </li>
      </ul>
    </div>
  );
}
