import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  // Effect to handle scroll events for adding/removing classes and updating active navigation link
  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");

      // Add or remove "scroll-header" class based on scroll position
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }

      // Get all sections with an id attribute
      const sections = document.querySelectorAll("section[id]");
      if (!sections.length) {
        console.warn(
          "No sections with id found. Ensure all sections have proper id attributes."
        );
      }

      // Update active navigation link based on the current scroll position
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Adjust for offset
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          window.scrollY > sectionTop &&
          window.scrollY <= sectionTop + sectionHeight
        ) {
          setActiveNav(`#${sectionId}`);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // State to toggle the mobile menu
  const [Toggle, showMenu] = useState(false);

  // State to track the currently active navigation link
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        {/* Logo */}
        <a href="index.html" className="nav__logo">
          &lt;Rishabh Shah/&gt;
        </a>

        {/* Navigation menu */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {/* Navigation items */}
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={
                  activeNav === "#experience"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-bag-alt nav__icon"></i> Experience
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact Me
              </a>
            </li>
          </ul>

          {/* Close button for mobile menu */}
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        {/* Toggle button for mobile menu */}
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
