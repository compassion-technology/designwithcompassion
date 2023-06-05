import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import iconFigmaLibrary from "../images/icon-figma-library.svg";
import arrowRight from "../images/arrow-right.svg";
import iconReportABug from "../images/icon-report-a-bug.svg";
import iconContactUs from "../images/icon-contact-us.svg";
import iconMail from "../images/icon-mail.svg";
import iconMessageCircle from "../images/icon-message-circle.svg";
import iconCalendly from "../images/icon-calendly.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__connect">
        <ul className="footer__list">
          <li className="footer__list-item">
            <img src={iconMail} className="icon-left" alt="" />
            <h3 className="heading">Send us an email</h3>
            <p className="footer__section__description">
              <Link to="mailto:globalux@us.ci.org">globalux@us.ci.org</Link>
            </p>
          </li>
          <li className="footer__list-item">
            <img src={iconMessageCircle} className="icon-left" alt="" />
            <h3 className="heading">Connect on Slack or Teams</h3>
            <p className="footer__section__description">
              <Link to="https://compassionun.slack.com/app_redirect?channel=C05B05MNKL7">
                <strong>Slack:</strong> #compassion_design_system
              </Link>
              <br />
              <Link to="https://teams.microsoft.com/l/channel/19%3a4b57bf85bbb04737afced2d42ed5749a%40thread.t[…]-512f2602dbbb&tenantId=d3c08eb3-7c4c-4a01-bc01-6c67b56c8da9">
                <strong>Teams:</strong> Compassion Design System
              </Link>
            </p>
          </li>
          <li className="footer__list-item">
            <img src={iconCalendly} className="icon-left" alt="" />
            <h3 className="heading">Schedule a Meeting</h3>
            <p className="footer__section__cta">
              <Link to="https://calendly.com/d/g7c-b9g-64y/global-ux-team-says-hi?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=005eb8">
                Calendar
              </Link>
            </p>
          </li>
        </ul>
      </div>
      <div className="footer__details">
        <ul>
          <li>© {new Date().getFullYear()} Compassion International</li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            Design system
            <br />
            v1.1
          </li>
          <li>
            Design tokens
            <br />
            v1.1
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
