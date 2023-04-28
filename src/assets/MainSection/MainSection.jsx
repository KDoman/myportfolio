import { Link } from "react-scroll";

export function MainSection() {
  return (
    <div>
      <header>
        <div className="main-section-container_entry">
          <div className="main-section-container_logo">
            <div className="main-section-container_entry-text">
              <h1>Welcome on my website</h1>
              <p>
                I'm Kacper{" "}
                <span className="bold-puprle">Front-End-Developer</span>
              </p>
              <div className="main-section-container_entry-cv_div">
                <a className="cv-a" href="./Kacper_Domanski_CV.pdf" download>
                  Download CV
                  <img
                    src="Images/download.png"
                    alt="Download icon"
                    className="cv-download-logo"
                  ></img>
                </a>
              </div>
            </div>
            <img
              className="MyPhoto-img"
              src="Images/MyPhoto.png"
              alt="My Image"
            ></img>
          </div>
        </div>
      </header>
      <section className="about-me-container">
        <div id="href-about">
          <h1 className="entry-headline">
            <span>About me</span>
          </h1>
          <p className="main-text-inside-p">
            Hello, my name is Kacper. I am currently a second-year student of
            computer science. I have found in myself the desire to code and
            solve problems from which I enjoy a lot. I would like to find a job
            that will help me spread my wings so that I can become a true{" "}
            <span className="purple-span-text-element inline-block">
              Front-End-Developer.
            </span>
          </p>
        </div>
      </section>
      <section className="experience-container">
        <div id="href-experience">
          <h1 className="entry-headline">
            <span>Experience</span>
          </h1>
          <p className="main-text-inside-p">
            I am currently working as a Junior Customer Configuration
            Specialist. I am{" "}
            <span className="purple-span-text-element">responsible</span> for
            generating and distributing products to business partners. I am
            always <span className="purple-span-text-element">focused</span> on
            the needs of my customers and always try to meet their requirements.
            I have several projects that I have done fully on my own. I am
            constantly developing my skills through projects, online courses and
            participation in various forums and discussion groups. I am{" "}
            <span className="purple-span-text-element">creative</span>,{" "}
            <span className="purple-span-text-element">motivated</span>,{" "}
            <span className="purple-span-text-element">independent</span>, not
            afraid of challenges and always looking for innovative solutions.
          </p>
        </div>
      </section>
      <section className="projects-container">
        <div id="href-projects">
          <h1 className="entry-headline">
            <span>Projects</span>
          </h1>
          <p className="main-text-inside-p">
            Since I started working on my own projects, my skills began to
            develop dynamically, I learned how to deal with difficulties and
            learned about many technologies. I sorted projects from the simplest
            ones, which helped me learn the basics, to more complicated ones.
          </p>
          <div className="projects-container-for-div">
            <div className="project-contaier-for-div_project-img grid_left">
              <img
                src="Images/Flow_House_academy_logo.png"
                alt="Flow House Academy project Logo"
                className="project-img"
              ></img>
              <div className="technologies-div">
                <img
                  src="Images/html-5.png"
                  alt="html logo"
                  loading="lazy"
                  className="technology-img"
                ></img>
                <img
                  src="Images/css-3.png"
                  alt="html logo"
                  loading="lazy"
                  className="technology-img"
                ></img>
                <img
                  src="Images/sass.png"
                  alt="html logo"
                  loading="lazy"
                  className="technology-img"
                ></img>
              </div>
            </div>
            <p className="grid_right p-project">
              <h1>
                <span className="purple-span-text-element">
                  Flow House Academy
                </span>
              </h1>
              Project that presents, the website of a sports club dedicated to
              martial arts. During the development of this site, I learned the
              basics of{` `}
              <span className="purple-span-text-element">HTML</span>,{" "}
              <span className="purple-span-text-element">CSS</span> and{" "}
              <span className="purple-span-text-element">Sass</span>.
              <p className="link-to-project">
                <a
                  href="https://kdoman.github.io/FHA-Web/"
                  target="_blank"
                  className="purple-span-text-element"
                >
                  Go to project
                </a>
              </p>
            </p>
          </div>
          <div className="projects-container-for-div">
            <div className="project-contaier-for-div_project-img grid_right">
              <img
                src="Images/Card_game.png"
                alt="Card game project picture"
                className="project-img"
              ></img>
              <div className="technologies-div">
                <img
                  src="Images/html-5.png"
                  alt="html logo"
                  loading="lazy"
                  className="technology-img"
                ></img>
                <img
                  src="Images/css-3.png"
                  alt="html logo"
                  loading="lazy"
                  className="technology-img"
                ></img>
                <img
                  src="Images/sass.png"
                  alt="html logo"
                  loading="lazy"
                  className="technology-img"
                ></img>
                <img
                  src="Images/JS.png"
                  alt="html logo"
                  loading="lazy"
                  className="technology-img"
                ></img>
              </div>
            </div>

            <p className="grid_left p-project">
              <h1>
                <span className="purple-span-text-element">Card Game</span>
              </h1>
              Project that taught me the basics of{` `}
              <span className="purple-span-text-element">JavaScript</span>
              {` `}
              and introduced me to {` `}
              <span className="purple-span-text-element inline-block">
                Object Oriented Programming
              </span>
              <p className="link-to-project_left">
                <a
                  href="https://kdoman.github.io/CardGame-repo/"
                  target="_blank"
                  className="purple-span-text-element"
                >
                  Go to project
                </a>
              </p>
            </p>
          </div>
          <div className="projects-container-for-div">
            <div className="project-contaier-for-div_project-img grid_left">
              <img
                src="Images/Country_project.png"
                alt="Country research project picture"
                className="project-img"
              ></img>
              <div className="technologies-div">
                <img
                  src="Images/html-5.png"
                  alt="html logo"
                  loading="lazy"
                  className="technology-img"
                ></img>
                <img
                  src="Images/css-3.png"
                  alt="html logo"
                  loading="lazy"
                  className="technology-img"
                ></img>
                <img
                  src="Images/sass.png"
                  alt="html logo"
                  loading="lazy"
                  className="technology-img"
                ></img>
                <img
                  src="Images/react.png"
                  alt="html logo"
                  loading="lazy"
                  className="technology-img"
                ></img>
                <img
                  src="Images/API.png"
                  alt="html logo"
                  loading="lazy"
                  className="technology-img"
                ></img>
              </div>
            </div>
            <p className="grid_right p-project">
              <h1>
                <span className="purple-span-text-element">
                  Country Browser
                </span>
              </h1>
              The project that taught me JavaScript library. I learned{` `}
              <span className="purple-span-text-element">React</span>
              {` `}
              from scratch, basic hooks, component lifecycle, fetching data from
              {` `}
              <span className="purple-span-text-element">API</span>
              {` `}, react router DOM and custom hooks
              <p className="link-to-project">
                <a
                  href="https://kdoman.github.io/flags-projects/"
                  target="_blank"
                  className="purple-span-text-element"
                >
                  Go to project
                </a>
              </p>
            </p>
          </div>
        </div>
      </section>
      <section className="skills-container">
        <div id="href-skills">
          <h1 className="entry-headline">
            <span>Skills</span>
          </h1>
          <div className="div-skills">
            <div className="div-skills-set">
              <div className="div-skills-set-main_div">
                <img
                  src="Images/html-5.png"
                  alt="HTML Logo"
                  loading="lazy"
                  className="skills-img"
                ></img>
              </div>
              <div className="div-skills-set-main_div">
                <img
                  src="Images/css-3.png"
                  alt="CSS Logo"
                  loading="lazy"
                  className="skills-img"
                ></img>
              </div>
              <div className="div-skills-set-main_div">
                <img
                  src="Images/sass.png"
                  alt="SASS Logo"
                  loading="lazy"
                  className="skills-img"
                ></img>
              </div>
              <div className="div-skills-set-main_div">
                <img
                  src="Images/JS.png"
                  alt="JavaScript Logo"
                  loading="lazy"
                  className="skills-img"
                ></img>
              </div>
              <div className="div-skills-set-main_div">
                <img
                  src="Images/react.png"
                  alt="React Logo"
                  loading="lazy"
                  className="skills-img"
                ></img>
              </div>
              <div className="div-skills-set-main_div">
                <img
                  src="Images/API.png"
                  alt="API Logo"
                  loading="lazy"
                  className="skills-img"
                ></img>
              </div>
            </div>
            <div className="div-skills-set">
              <div className="div-skills-set-main_div">
                <img
                  src="Images/tailwind.png"
                  alt="Tailwind logo"
                  loading="lazy"
                  className="skills-img"
                ></img>
                <div className="div-skills-set-big-pinion">
                  <img src="Images/big-pinion.png" className="big-pinion"></img>
                </div>
                <div className="div-skills-set-small-pinion">
                  <img
                    src="Images/small-pinion.png"
                    className="small-pinion"
                  ></img>
                </div>
              </div>
              <div className="div-skills-set-main_div">
                <img
                  src="Images/typescript.png"
                  alt="Typescript logo"
                  loading="lazy"
                  className="skills-img"
                ></img>
                <div className="div-skills-set-big-pinion">
                  <img src="Images/big-pinion.png" className="big-pinion"></img>
                </div>
                <div className="div-skills-set-small-pinion">
                  <img
                    src="Images/small-pinion.png"
                    className="small-pinion"
                  ></img>
                </div>
              </div>
              <div className="div-skills-set-main_div">
                <img
                  src="Images/wordpress.png"
                  alt="Wordpress logo"
                  loading="lazy"
                  className="skills-img"
                ></img>
                <div className="div-skills-set-big-pinion">
                  <img src="Images/big-pinion.png" className="big-pinion"></img>
                </div>
                <div className="div-skills-set-small-pinion">
                  <img
                    src="Images/small-pinion.png"
                    className="small-pinion"
                  ></img>
                </div>
              </div>
              <div className="div-skills-set-main_div">
                <img
                  src="Images/php.png"
                  alt="Php logo"
                  loading="lazy"
                  className="skills-img"
                ></img>
                <div className="div-skills-set-big-pinion">
                  <img src="Images/big-pinion.png" className="big-pinion"></img>
                </div>
                <div className="div-skills-set-small-pinion">
                  <img
                    src="Images/small-pinion.png"
                    className="small-pinion"
                  ></img>
                </div>
              </div>
              <div className="div-skills-set-main_div">
                <img
                  src="Images/mysql.png"
                  alt="MySQL logo"
                  loading="lazy"
                  className="skills-img"
                ></img>
                <div className="div-skills-set-big-pinion">
                  <img src="Images/big-pinion.png" className="big-pinion"></img>
                </div>
                <div className="div-skills-set-small-pinion">
                  <img
                    src="Images/small-pinion.png"
                    className="small-pinion"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-container">
        <div id="href-contact">
          <div className="contact-form-div">
            <form
              action="https://formsubmit.co/itdoman1999@gmail.com"
              method="POST"
            >
              <h1>Contact me!</h1>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="email">Your message</label>
              <textarea
                typeof="textarea"
                id="email"
                name="email"
                required
                cols={50}
                rows={10}
              />
              <button>Send Message</button>
            </form>
          </div>
          <button className="button-to-top">
            <Link
              to="nav-container"
              offset={0}
              ignoreCancelEvents={true}
              duration={1000}
              smooth={true}
            >
              <img
                src="Images/top.png"
                alt="arrow to"
                className="arrow-top"
              ></img>
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}
