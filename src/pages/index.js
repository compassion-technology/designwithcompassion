import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Interstitial from "../components/interstitial"

const IndexPage = () => (
  <Layout className="_cds-light-theme">
    <main>
      <section class="intro__hero intro__section">
        <div className="intro__section__content">
          <StaticImage
            src="../images/hero.svg"
            imgClassName="intro__hero__illustration"
            objectFit="contain"
            placeholder="tracedSVG"
          />
          <span className="no-wrap">Compassion Design System</span>
          <div className="intro__section__copy">
            <h1>
              Here for you.
              <br />
              Let's create.
            </h1>
            <p>
              A collection of reusable resources, components, and guidelines
              that make it easy for you to{" "}
              <span className="no-wrap">Design With Compassion.</span>
            </p>
            <Link to="#get-started" className="cta-button">
              Get Started <StaticImage src="../images/arrow-right.svg" />
            </Link>
          </div>
        </div>
      </section>
      <Interstitial />
      <section class="intro__for-designers intro__section" id="get-started">
        <div className="intro__section__content">
          <div className="intro__section__copy">
            <h2>For Designers</h2>
            <p>
              Jumpstart your designs with ready-to-use components and templates.
            </p>
            <ul className="intro__list">
              <li className="intro__list-item">
                <Link to="/" className="intro__list-item__link">
                  Figma Library
                </Link>
              </li>
              <li className="intro__list-item">
                <Link to="/" className="intro__list-item__link">
                  Design Tokens
                </Link>
              </li>
            </ul>
          </div>
          <StaticImage
            src="../images/for-designers.svg"
            imgClassName="intro__for-designers__illustration"
            objectFit="contain"
            placeholder="tracedSVG"
          />
        </div>
      </section>
      <Interstitial />
      <section class="intro__for-developers intro__section">
        <div className="intro__section__content">
          <div className="intro__section__copy">
            <h2>For Developers</h2>
            <p>
              Fast track implementation with Compassion-branded components,
              themes, and sample apps.
            </p>
            <ul className="intro__list">
              <li className="intro__list-item">
                <Link to="/" className="intro__list-item__link">
                  Figma Library
                </Link>
              </li>
              <li className="intro__list-item">
                <Link to="/" className="intro__list-item__link">
                  Developer Tokens
                </Link>
              </li>
            </ul>
          </div>
          <StaticImage
            src="../images/for-developers.svg"
            imgClassName="intro__for-developers__illustration"
            objectFit="contain"
            placeholder="tracedSVG"
          />
        </div>
      </section>
      <Interstitial />
      <section class="intro__support intro__section">
        <div className="intro__section__content">
          <h2 className="heading">Support</h2>
          <p>We're here for you.</p>
          <ul className="intro__list">
            <li className="intro__list-item">
              <Link to="/" className="intro__list-item__link">
                <h3 className="heading">Figma Library</h3>
                <p>Libraries and resources at your fingertips.</p>
                <hr className="intro__support__hr" />
                <p className="intro__section__cta">Get Started</p>
              </Link>
            </li>
            <li className="intro__list-item">
              <Link to="/" className="intro__list-item__link">
                <h3 className="heading">Report a Bug</h3>
                <p>Notice something that isn't right? Let us know.</p>
                <hr className="intro__support__hr" />
                <p className="intro__section__cta">Report Now</p>
              </Link>
            </li>
            <li className="intro__list-item">
              <Link to="/" className="intro__list-item__link">
                <h3 className="heading">Contact Us</h3>
                <p>Got a question? Request? We want to know!</p>
                <hr className="intro__support__hr" />
                <p className="intro__section__cta">Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
