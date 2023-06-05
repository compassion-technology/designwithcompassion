import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import InterstitialHero from "../components/interstitial-hero";

import { Button } from "@compassion-global-experience/react";

import componentsWithShadow from "../images/componentsWithShadow.png";
import arrowRight from "../images/arrow-right.svg";

const DesignSystemPage = () => (
  <Layout>
    <main>
      <div className="isometric__image design__system">
        <img src={componentsWithShadow} />
      </div>
      <section class="intro__hero intro__section">
        <div className="intro__isometric__background has-fade">
          <div className="intro__section__copy isometric__background">
            <div className="intro__hero__heading">
              <h1>Unleash your creativity with the Compassion Design System</h1>
            </div>
            <p>
              Ignite your creative prowess and accelerate your development speed
              with the Compassion Design System.
            </p>
            <p>
              Seamlessly build captivating experiences that resonate with our
              mission while making your work more efficient and consistent.
            </p>
            <Link to="/#get-started" className="cta-button primary">
              <Button label="Get Started" mode="primary" />
            </Link>
          </div>
        </div>
      </section>
      <InterstitialHero />
      <section>
        <div className="page__section__content page__section__indented ">
          <div className="intro__section__copy">
            <h2>What is the Compassion Design System?</h2>
            <p>
              The Compassion Design System offers a unified language and shared
              set of tools that make it easier for designers and developers to
              collaborate. It brings consistency and cohesion to your work,
              speeding up the design and development process while ensuring that
              the end product aligns perfectly with Compassion’s visual identity
              and brand expression. Experience the Compassion Design System:
              where efficiency meets excellence.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="page__section__content page__section__2columns">
          <div className="intro__section__copy">
            <h2>For Designers</h2>
            <p>
              Jumpstart your designs with ready-to-use templates templates and
              components.
            </p>
            <p>
              <strong>To get you started…</strong>
            </p>
            <ol className="circle-numbers">
              <li>
                Contact the Global UX team to walkthrough the UI Kit & Tokens
              </li>
              <li>
                The Global UX team will get Figma access set up for your team
              </li>
              <li>
                Complete our onboarding sandbox to learn how to use the
                Compassion Design System
              </li>
              <li>
                Connect your projects to the Compassion Design System’s Figma
                libraries
              </li>
              <li>Drag and drop components onto your design</li>
            </ol>
          </div>
          <div className="intro__section__copy">
            {" "}
            <h2>For Developers</h2>
            <p>
              Fast track implementation with Compassion branded sample apps,
              themes, and components.
            </p>
            <p>
              <strong>To get you started…</strong>
            </p>
            <ol className="circle-numbers">
              <li>
                Contact the Global UX team for a walkthrough of the coded
                component ecosystem
              </li>
              <li>
                If needed, the Global UX team can show you how to install the
                Compassion Design System components to your HTML/CSS or React
                project
              </li>
              <li>
                Get comfy with the Compassion Design System’s Storybook
                documentation
              </li>
              <li>
                If you’d like to contribute back, the Global UX team can happily
                grant you access to our GitHub organization
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export const Head = () => <Seo title="Design System" />;

export default DesignSystemPage;
