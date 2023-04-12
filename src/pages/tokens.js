import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import InterstitialHero from "../components/interstitial-hero";
import InterstitialMain from "../components/interstitial-main";
import InterstitialFooter from "../components/interstitial-footer";

import brick from "../images/brick.svg";
import heroIllustration from "../images/hero-tokens.svg";

const TokensPage = () => (
  <Layout className="_cds-light-theme">
    <main>
      <h1>Design Tokens</h1>
      <span>Tolkien loved tokens.</span>
      <img src={heroIllustration} alt="Yellow and white building blocks." />

      <h2>Installation options</h2>
      <h3>npm</h3>
      <h3>CDN</h3>
      <h3>Figma</h3>
      <h3>Download</h3>
      <section>
        <h2>Why are tokens important?</h2>
        <p>
          Compassion Design Tokens represent the small, repeated design
          decisions that make up a Compassion’s Visual and Branding style on the
          web. Tokens were created to help solve common problems (like
          consistency) across developer and design teams at Compassion, but
          without stifling creativity.
        </p>
        <p>
          Using Compassion Tokens instead of hardcoded values can streamline the
          work of building, maintaining, and scaling Compassion products. Tokens
          enable Compassion to have a single source of truth. They provide a
          place for recording and tracking style choices and changes. Tokens are
          a platform-agnostic format, but they can be used in platform-specific
          code.
        </p>
      </section>
      <section>
        <h2>Token Naming Explained</h2>
        <h3>Reading token names</h3>
        <p>
          The parts of a token name are separated by periods and progress from
          the most general information (color) to the most specific
          (label-color)
        </p>
        <ol type="A">
          <li>
            All token names in our design system start with our core or most
            broad category.
          </li>
          <li>
            The next part of the naming sequence references the component layer
            of the object.
          </li>
          <li>
            The next part of the token name describes the specific purpose or
            role of the token.
          </li>
        </ol>
        <aside>color.form.label-color</aside>
      </section>
      <section>
        <h2>Token Values</h2>
        <h3>What are design tokens?</h3>
        <p>
          Design Tokens are sets of values shared across components. For
          example, the body font size token can be defined as 14px, or
          the accent color token set to #51AA51 to reduce repetition and
          increase the ease of customization. They are compiled from JSON into
          CSS, SCSS, JavaScript, and any other format needed.
        </p>
      </section>
      <section>
        <h3>Design Token Types</h3>
        <dl>
          <dt>Core tokens</dt>
          <dl>
            Core Tokens store the primitive values represented by
            context-agnostic names, like gray-1000, and are mainly responsible
            for the look of the final product by defining all values that can be
            directly used.
            <aside>[Core tokens example]</aside>
          </dl>
          <dt>Semantic tokens</dt>
          <dl>
            Semantic Tokens inherit Core Tokens to describe intended use and
            purpose for specific context and would be used the most throughout
            the projects and products. Represent choices or intent that appears
            in multiple places.
            <aside>[Semantic tokens example]</aside>
          </dl>
          <dt>Component tokens</dt>
          <dl>
            Component Tokens inherit Semantic Tokens and are tied to specific
            component values (or overwrites). Component tokens allow teams to be
            as specific as needed within components.
            <aside>[Component tokens example]</aside>
          </dl>
        </dl>
      </section>
      <section>
        <h3>Usage Guidelines</h3>
        <ul>
          <li>
            <span>Use core tokens sparingly.</span>
            <p>
              Core Tokens are the easiest to reference for the varoius
              attributes in the Compassion Design System. While they’re the
              building blocks of CDS, they’re also the token type that is the
              least tied to the logic of our design patterns and components.
              Only use Core Tokens when there are no aliases for your use case.
            </p>
          </li>
          <li>
            <span>Use semantic tokens when applicable.</span>
            <p>
              Semantic tokens are the recommended type to use when building your
              product with design tokens. This is where more content about it
              can go. This is where more content about it can go.
            </p>
          </li>
          <li>
            <span>
              Use component-specific tokens only within their referenced
              component.
            </span>
            <p>
              Semantic tokens are the recommended type to use when building your
              product with design tokens. This is where more content about it
              can go. This is where more content about it can go.
            </p>
          </li>
        </ul>
      </section>
    </main>
  </Layout>
);

export default TokensPage;
