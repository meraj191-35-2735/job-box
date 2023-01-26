import React from "react";

const Footer = () => {
  return (
    <div className="mt-3">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title font-serif">Services</span>
          <a
            href="https://my-portfolio-meraj.web.app/"
            className="link link-hover font-serif"
          >
            Branding
          </a>
          <a
            href="https://my-portfolio-meraj.web.app/"
            className="link link-hover font-serif"
          >
            Design
          </a>
          <a
            href="https://my-portfolio-meraj.web.app/"
            className="link link-hover font-serif"
          >
            Marketing
          </a>
          <a
            href="https://my-portfolio-meraj.web.app/"
            className="link link-hover font-serif"
          >
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a
            href="https://my-portfolio-meraj.web.app/"
            className="link link-hover font-serif"
          >
            About us
          </a>
          <a
            href="https://my-portfolio-meraj.web.app/"
            className="link link-hover font-serif"
          >
            Contact
          </a>
          <a
            href="https://my-portfolio-meraj.web.app/"
            className="link link-hover font-serif"
          >
            Jobs
          </a>
          <a
            href="https://my-portfolio-meraj.web.app/"
            className="link link-hover font-serif"
          >
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title font-serif">Legal</span>
          <a
            href="https://my-portfolio-meraj.web.app/"
            className="link link-hover font-serif"
          >
            Terms of use
          </a>
          <a
            href="https://my-portfolio-meraj.web.app/"
            className="link link-hover font-serif"
          >
            Privacy policy
          </a>
          <a
            href="https://my-portfolio-meraj.web.app/"
            className="link link-hover font-serif"
          >
            Cookie policy
          </a>
        </div>
        <div>
          <span className="footer-title font-serif">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text font-serif">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Your Email Address"
                className="input input-bordered w-full pr-16 font-serif"
              />
              <button className="btn absolute top-0 right-0 rounded-l-none font-serif">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
