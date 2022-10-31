import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
    >
      {siteTitle}
    </Link>
    <Link to="#get-started">Playground</Link>
    <Link to="#get-started">Contact Us</Link>
    <Link to="#get-started">Get Started</Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
