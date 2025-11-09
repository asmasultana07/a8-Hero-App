import React from "react";
import logoImage from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex-1">
      <div className="footer sm:footer-horizontal bg-base-200 text-[#627382]  p-10 md:p-20">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            className="fill-current"
          ></svg>
          <img src={logoImage} alt="" className="w-8 h-8" />
          <p className="font-medium text-lg text-[#627382]">
            Apps.Io
            <br />
            Enjoy millions of the latest apps
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Apps.io</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Feature</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <p>Copyright © 2025 - All right reserved by Hero Apps Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
