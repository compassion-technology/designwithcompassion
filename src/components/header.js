import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Logo from "../images/logo.svg";
import "./header.scss";

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/">
      <img src={Logo} alt="Compassion International logo" />
    </Link>
    <div className="header__links">
      <Link to="#get-started">Get Started</Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
