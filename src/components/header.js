import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import arrowRight from "../images/arrow-right.svg";
import navGradient from "../images/nav-gradient.svg";
import Logo from "../images/logo.svg";
import "./header.scss";
import { Button } from "@compassion-global-experience/react";

const Header = ({ siteTitle }) => {
  const [isSmallScreen, setIsSmallScreen] = useState();
  const [shouldShowMobileNav, setShouldShowMobileNav] = useState(false);

  useEffect(() => {
    // Setting the default for isSmallScreen needs to be in a useEffect
    // https://www.gatsbyjs.com/docs/debugging-html-builds/
    setIsSmallScreen(window.innerWidth < 768);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__images">
        <Link to="/">
          <img src={Logo} alt="Compassion International logo" />
        </Link>

        {isSmallScreen && (
          <button
            className="navButton"
            aria-label={`${shouldShowMobileNav ? "Close" : "Open"} navigation`}
          >
            <div
              id="nav-icon3"
              className={`${shouldShowMobileNav ? "open" : ""}`}
              onClick={() => {
                setShouldShowMobileNav(!shouldShowMobileNav);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          // </div>
        )}
      </div>
      <nav
        className={`header__links ${isSmallScreen ? "smallScreen" : ""} ${
          !shouldShowMobileNav && isSmallScreen ? "hideNav" : ""
        } `}
      >
        <Link to="/">Home</Link>
        <Link to="/#get-started">Get Started</Link>
        <Link to="/design-system">Design System</Link>
        <Link to="/contact">Contact Us</Link>
        {shouldShowMobileNav ? (
          <Link to="/partner-with-us">Partner With Us</Link>
        ) : (
          <Link className="cta-button primary" to="/partner-with-us">
            <Button label="Partner With Us" mode="primary" size="small" />
          </Link>
        )}
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
