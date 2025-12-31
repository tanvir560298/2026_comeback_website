import React from "react";
import logo from "../assets/New Project.jpg";
import name from "../assets/New name.jpg";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-violet-900 via-indigo-700 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 py-14">
        {/* ✅ TOP GRID */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/15 overflow-hidden flex items-center justify-center">
                <img
                  src={logo}
                  alt="TA Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>

              {/* Name */}
              <div className="h-12 px-3 rounded-xl bg-white/10 border border-white/15 flex items-center">
                <img
                  src={name}
                  alt="TA Learning Platform"
                  className="h-7 object-contain"
                />
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-white/70 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, in
              optio maxime odio, nemo esse molestiae facilis maiores fuga rerum
              cupiditate dicta quae, reprehenderit sapiente.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-center">
            <h4 className="text-sm font-extrabold tracking-wide">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a className="hover:text-white transition" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Course
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h4 className="text-sm font-extrabold tracking-wide">Contact us</h4>

            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-lg bg-white/10 border border-white/15 grid place-items-center">
                  {/* Facebook */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M13.5 22v-8h2.7l.5-3h-3.2V9.1c0-.9.3-1.6 1.7-1.6H17V4.7c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5V11H6v3h3v8h4.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>


                <a
                  href="https://www.facebook.com/jamil.uddinsarker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition underline-offset-2 hover:underline"
                >
                  Tanvir Ahmad
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-lg bg-white/10 border border-white/15 grid place-items-center">
                  {/* mail */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 6h16v12H4V6Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="text-white"
                    />
                    <path
                      d="m4 7 8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="text-white"
                    />
                  </svg>
                </span>
                <span>tahmadium@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ✅ DIVIDER + BOTTOM BAR */}
        <div className="mt-12 border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/70">
            Copyright 2025 | All Rights Reserved
          </p>

          {/* Socials placeholder */}
          <div className="flex items-center gap-3 text-white/70">
            {/* keep your social icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
