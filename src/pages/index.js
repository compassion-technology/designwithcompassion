import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import InterstitialHero from "../components/interstitial-hero";
import InterstitialMain from "../components/interstitial-main";
import InterstitialFooter from "../components/interstitial-footer";

import { Button } from "@compassion-global-experience/react";

import brick from "../images/brick.svg";
import iconFigmaLibrary from "../images/icon-figma-library.svg";
import iconReportABug from "../images/icon-report-a-bug.svg";
import iconContactUs from "../images/icon-contact-us.svg";

import "../images/animation.scss";
import YellowCircleLegos from "../images/YellowCircleLegos";
import YellowGridLegos from "../images/YellowGridLegos";
import BlueLegos from "../images/BlueLegos";

const IndexPage = () => (
  <Layout className="_cds-light-theme">
    <main>
      <section class="intro__hero intro__section">
        <div className="intro__section__content has-fade hero-svg">
          <BlueLegos
            className="intro__section__illustration"
            alt="Blue building blocks falling into place."
          />
          <div className="intro__section__copy">
            <div className="cds-title no-wrap">
              <img src={brick} alt="A single blue building block." />
              <span>Compassion Design System</span>
            </div>
            <div className="intro__hero__heading">
              <h1>
                <span className="no-wrap">Here for you.</span>
                <br />
                <span className="no-wrap">Let's create.</span>
              </h1>
            </div>
            <p>
              Helping your creativity thrive; as you build meaningful
              experiences for neighbours across the globe.
            </p>

            <p>
              The Compassion Design System is a powerful, reusable collection of
              resources, components and guidelines that make it simple for you
              to design with Compassion.
            </p>
            <Link to="#get-started" className="cta-button primary">
              <Button label="Get Started" mode="primary" />
            </Link>
          </div>
        </div>
      </section>
      <InterstitialHero />
      <section class="intro__for-designers intro__section" id="get-started">
        <div className="intro__section__content">
          <div className="intro__section__copy">
            <h2>For Designers</h2>
            <p>
              The Compassion Design System offers tools to streamline your work,
              infuse consistency and support your neighbour-centered designs.
            </p>
            <ul className="intro__list">
              <li className="intro__list-item">
                <Link
                  to="https://www.figma.com/community/file/1170436462932763303"
                  className="cta-button tertiary"
                >
                  <Button label="Figma Library" mode="tertiary" />
                </Link>
              </li>
              <li className="intro__list-item">
                {/* <Link
                  to="https://www.figma.com/community/file/1170436462932763303"
                  className="cta-button tertiary"
                >
                  <Button label="Design Tokens" mode="tertiary" />
                </Link> */}
              </li>
            </ul>
          </div>
          <div className="designer-svg">
            <YellowCircleLegos alt="Yellow legos in a circle" />
          </div>
        </div>
      </section>
      <InterstitialMain />
      <section class="intro__for-developers intro__section">
        <div className="intro__section__content">
          <div className="intro__section__copy">
            <h2>For Developers</h2>
            <p>
              Building with the Compassion Design System makes implementation
              seamless and precise, fast-tracking your coding journey to
              pixel-perfect, neighbour-centered outcomes.
            </p>
            <ul className="intro__list">
              <li className="intro__list-item">
                <Link
                  to="https://www.figma.com/community/file/1170436462932763303"
                  className="cta-button tertiary"
                >
                  <Button label="Figma Library" mode="tertiary" />
                </Link>
              </li>
              <li className="intro__list-item">
                <Link
                  to="https://www.npmjs.com/package/@compassion-global-experience/cds-tokens"
                  className="cta-button tertiary"
                >
                  <Button label="Developer Tokens" mode="tertiary" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="developer-svg">
            <YellowGridLegos alt="Yellow legos on a grid" />
          </div>
        </div>
      </section>
      <InterstitialFooter />
      <section class="intro__support intro__section" id="support">
        <div className="intro__section__content has-fade">
          <div className="intro__section__copy">
            <h2 className="heading">Support</h2>
            <p>We're here for you.</p>
          </div>
          <ul className="intro__list">
            <li className="intro__list-item">
              <Link
                to="https://www.figma.com/community/file/1170436462932763303"
                className="intro__list-item__link"
              >
                <h3 className="heading">
                  <img src={iconFigmaLibrary} className="icon-left" alt="" />{" "}
                  Figma Library
                </h3>
                <p className="intro__section__description">
                  Libraries and resources at your fingertips.
                </p>
                <hr className="intro__support__hr" />
                <p className="intro__section__cta">
                  <Button label="Get Started" mode="tertiary" />
                </p>
              </Link>
            </li>
            <li className="intro__list-item">
              <Link
                to="https://airtable.com/shruj0AzDMKj7pzsn"
                className="intro__list-item__link"
              >
                <h3 className="heading">
                  <img src={iconReportABug} className="icon-left" alt="" />{" "}
                  Report a Bug
                </h3>
                <p className="intro__section__description">
                  Notice something that isn't right? Let us know.
                </p>
                <hr className="intro__support__hr" />

                <p className="intro__section__cta">
                  <Button label="Report Now" mode="tertiary" />
                </p>
              </Link>
            </li>
            <li className="intro__list-item">
              <Link to="/contact" className="intro__list-item__link">
                <h3 className="heading">
                  <img src={iconContactUs} className="icon-left" alt="" />{" "}
                  Contact Us
                </h3>
                <p className="intro__section__description">
                  Got a question? Request? We want to know.
                </p>
                <hr className="intro__support__hr" />
                <p className="intro__section__cta">
                  <Button label="Contact Us" mode="tertiary" />
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
