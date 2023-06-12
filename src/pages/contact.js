import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import ContactForm from "../components/ContactForm";
import Seo from "../components/seo";
import InterstitialHero from "../components/interstitial-hero";

import emailIcon from "../images/icon-line-email.svg";
import chatIcon from "../images/icon-line-chat.svg";
import calendarIcon from "../images/icon-line-calendar.svg";

const ContactPage = () => (
  <Layout>
    <main>
      <section class="intro__hero intro__section">
        <div className="intro__section__content has-fade intro__content__left ">
          <div className="intro__hero__2column">
            <div className="contact__copy">
              <h1>Contact Us</h1>
              <div className="contact__options">
                <img src={emailIcon} className="icon-left" alt="Email icon" />
                <div>
                  <h3>Email</h3>
                  <p>
                    Shoot us an email at{" "}
                    <Link to="mailto:globalux@us.ci.org">
                      globalux@us.ci.org
                    </Link>
                  </p>
                </div>
                <img src={chatIcon} className="icon-left" alt="Chat icon" />
                <div>
                  <h3>Chat</h3>
                  <p>
                    Looking for a more casual chat? We’re on{" "}
                    <Link to="https://compassionun.slack.com/app_redirect?channel=C05B05MNKL7">
                      Slack
                    </Link>{" "}
                    and{" "}
                    <Link to="https://teams.microsoft.com/l/channel/19%3a4b57bf85bbb04737afced2d42ed5749a%40thread.t[…]-512f2602dbbb&tenantId=d3c08eb3-7c4c-4a01-bc01-6c67b56c8da9">
                      Teams
                    </Link>{" "}
                    too.
                  </p>
                </div>
                <img
                  src={calendarIcon}
                  className="icon-left"
                  alt="Calendar icon"
                />
                <div>
                  <h3>Book a time</h3>
                  <p>
                    Hop on our{" "}
                    <Link to="https://calendly.com/d/g7c-b9g-64y/global-ux-team-says-hi?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=005eb8">
                      Calendar
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="contact__form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <InterstitialHero />
    </main>
  </Layout>
);

export const Head = () => <Seo title="Contact us" />;

export default ContactPage;
