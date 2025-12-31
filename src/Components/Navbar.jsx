import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/New Project.jpg";
import name from "../assets/New name.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItem = ({ isActive }) =>
    `hover:text-slate-900 ${
      isActive ? "text-indigo-700" : "text-slate-700"
    }`;

  return (
    <header className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-20 flex items-center justify-between gap-4">
          {/* Brand (clickable to home) */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              {/* Logo Icon */}
              <div className="h-20 w-20 rounded-xl  from-green-500 to-indigo-600 flex items-center justify-center p-1">
                <img
                  src={logo}
                  alt="TA Logo"
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>

              {/* Logo Name */}
              <div className="h-10 rounded-xl  from-green-500 to-indigo-600 flex items-center px-3">
                <img
                  src={name}
                  alt="TA Learning Platform"
                  className="h-full object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <NavLink className={navItem} to="/">
              Home
            </NavLink>
            <NavLink className={navItem} to="/courses">
              Courses
            </NavLink>
            <NavLink className={navItem} to="/blog">
              Blog
            </NavLink>
            <NavLink className={navItem} to="/notes">
              notes
            </NavLink>
            <NavLink className={navItem} to="/pages">
              Pages
            </NavLink>
            <NavLink className={navItem} to="/PortfolioLanding">
              Portfolio
            </NavLink>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden h-9 w-9 rounded-xl border border-slate-200 hover:bg-slate-50 grid place-items-center"
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              ☰
            </button>

            <button
              className="hidden sm:grid h-9 w-9 rounded-xl border border-slate-200 hover:bg-slate-50 place-items-center"
              aria-label="Search"
              title="Search"
              type="button"
            >
              🔍
            </button>

            <button
              className="hidden sm:grid h-9 w-9 rounded-xl border border-slate-200 hover:bg-slate-50 place-items-center"
              aria-label="User"
              title="User"
              type="button"
            >
              👤
            </button>

            {/* Login */}
            <Link
              className="hidden sm:inline text-sm font-bold text-slate-800 hover:text-slate-900"
              to="/login"
            >
              Login
            </Link>

            {/* Signup */}
            <Link
              to="/signup"
              className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm px-4 py-2"
            >
              Signup
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-3 space-y-2 text-sm font-semibold">
              <NavLink className={navItem} to="/" onClick={() => setOpen(false)}>
                Home
              </NavLink>
              <NavLink className={navItem} to="/courses" onClick={() => setOpen(false)}>
                Courses
              </NavLink>
              <NavLink className={navItem} to="/blog" onClick={() => setOpen(false)}>
                Blog
              </NavLink>
              <NavLink className={navItem} to="/Notes" onClick={() => setOpen(false)}>
                Notes
              </NavLink>
              <NavLink className={navItem} to="/pages" onClick={() => setOpen(false)}>
                Pages
              </NavLink>
              <NavLink className={navItem} to="/PortfolioLanding" onClick={() => setOpen(false)}>
                Portfolio
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
