import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import InterstitialHero from "../components/interstitial-hero";

import { Button } from "@compassion-global-experience/react";

import screenshots from "../images/screenshots.png";
import arrowRight from "../images/arrow-right.svg";
import arrowRightBlue from "../images/arrow-right-blue.svg";
import threeUsersIcon from "../images/icon-white-3users.svg";
import codeIcon from "../images/icon-white-code.svg";
import designIcon from "../images/icon-white-magic-wand.svg";
import noteIcon from "../images/icon-white-note.svg";
import checkeredFlagIcon from "../images/icon-white-checkered-flag.svg";
import globalFoodCrisis from "../images/globalFoodCrisis.png";
import compassionCauses from "../images/compassionCauses.png";
import manyHandsNFT from "../images/manyHandsNFT.png";
import dottedArrow from "../images/dotted-arrow.svg";
import iconLargeCode from "../images/icon-large-code.svg";
import iconLargeTestTube from "../images/icon-large-test-tube.svg";
import iconLargeTreeStructure from "../images/icon-large-tree-structure.svg";

const PartnerWithUs = () => (
  <Layout>
    <main>
      <div className="isometric__image partner">
        <img src={screenshots} />
      </div>
      <section class="intro__hero intro__section">
        <div className="intro__isometric__background has-fade">
          <div className="intro__section__copy isometric__background">
            <div className="intro__hero__heading">
              <h1>Partner with Us</h1>
            </div>
            <p>
              Contact us with your project needs. We’ll get the collaboration
              process started.
            </p>
            <Link to="/contact" className="cta-button primary">
              <Button label="Contact Us" mode="primary" />
            </Link>
          </div>
        </div>
      </section>
      <InterstitialHero />
      <section>
        <div className="page__section__content">
          <div className="intro__section__copy">
            <div>
              <h3 className="upper">What we do</h3>
              <h2>We’d love to partner with you!</h2>
            </div>

            <ul className="text__card">
              <li>
                <img src={designIcon} alt="Magic wand icon" />
                <h3>Design</h3>
                <p>
                  We’re eager to supplement you at any stage in crafting
                  intuitive, impactful designs that put the needs of our
                  neighbours first.
                </p>
              </li>
              <li>
                <img src={codeIcon} alt="Code icon" />
                <h3>Development</h3>
                <p>
                  We can join you in turning beautiful designs into functional
                  realities! Let's shape the digital landscape for our
                  neighbours together, one pixel at a time.
                </p>
              </li>
              <li>
                <img src={threeUsersIcon} alt="Users icon" />
                <h3>Usability Testing</h3>
                <p>
                  We’ll help you ensure your products are as user-friendly as
                  they are transformative, partnering together on robust
                  usability testing that helps meet real-world needs.
                </p>
              </li>
              <li>
                <img src={checkeredFlagIcon} alt="Checkered flag icon" />
                <h3>Design Sprints</h3>
                <p>
                  {" "}
                  We’ll rally with you in accelerating innovation through design
                  sprints, streamlining your path to solutions that genuinely
                  matter.
                </p>
              </li>
              <li>
                <img src={noteIcon} alt="Note icon" />
                <h3>UX Research</h3>
                <p>
                  Let’s combine forces in pursuit of neighbour understanding,
                  exploring their needs and behaviors through our comprehensive
                  mixed methods research.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="page__section__content">
          <div className="intro__section__copy">
            <div>
              <h3 className="upper">Our work</h3>
              <h2>See what we can do</h2>
            </div>

            <ul className="image__card">
              <li>
                <img src={compassionCauses} />
                <h3>Compassion Causes</h3>
                <p>Compassion Causes landing page.</p>
                <Link
                  to="https://compassioncauses.com/"
                  className="cta-button tertiary"
                >
                  <Button label="View Project" mode="tertiary" />
                </Link>
              </li>
              <li>
                <img src={globalFoodCrisis} />
                <h3>Global Food Crisis</h3>
                <p>Global Food Crisis campaign hub.</p>
                <Link
                  to="https://compassioncampaigns.global/"
                  className="cta-button tertiary"
                >
                  <Button label="View Project" mode="tertiary" />
                </Link>
              </li>
              <li>
                <img src={manyHandsNFT} />
                <h3>Many Hands NFT</h3>
                <p>Many Hands NFT landing page.</p>

                <Link
                  to="https://www.manyhandsnft.com/"
                  className="cta-button tertiary"
                >
                  <Button label="View Project" mode="tertiary" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="page__section__content">
          <div className="intro__section__copy">
            <div>
              <h3 className="upper">What You Get</h3>
              <h2>
                We believe in empowering our partners around the world to create
                neighbour-centered experiences.
              </h2>
            </div>

            <div className="process-grid">
              <img src={iconLargeTreeStructure} />
              <img src={dottedArrow} className="arrow-column" />
              <img src={iconLargeTestTube} />
              <img src={dottedArrow} className="arrow-column" />
              <img src={iconLargeCode} />

              <h3>Design</h3>
              <h3>Test</h3>
              <h3>Develop</h3>

              <p>
                From ideation to designs to fully functioning prototypes... more
                about design here.
              </p>
              <p>
                Have confidence in your next steps. Something about testing
                here.
              </p>
              <p>Something about our developers and the design system here.</p>
            </div>

            <Link to="#">
              <Button label="How does UX fit into NCD?" mode="secondary" />
            </Link>
          </div>
        </div>
      </section> */}
      {/* <section>
        <div className="page__section__content">
          <h2>Testimonials</h2>
        </div>
      </section>
      <section>
        <div className="page__section__content">
          <h2>Let's get started.</h2>
          <Link to="/contact" className="cta-button">
            Contact Us
            <img src={arrowRight} className="icon-inline" alt="" />
          </Link>
        </div>
      </section> */}
    </main>
  </Layout>
);

export const Head = () => <Seo title="Partner with us" />;

export default PartnerWithUs;
