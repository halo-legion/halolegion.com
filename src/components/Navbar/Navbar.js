import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { links } from '../links';

export default function Navbar() {
  return (
    <div>
      <header className="navbar" style={{ fontFamily: "VG5000, sans-serif" }}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex items-center mb-4 md:mb-0" href="/">
            <span className="ml-3 text-xl">halolegion</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {links.map((link) => (
              <Link className="mr-5 lowercase hover:text-primary" smooth to={link.src} key={link.name}>
                {window.location.pathname === link.src ? (
                  <>
                    {">"} {link.name}
                  </>
                ) : (
                  <>{link.name}</>
                )}
              </Link>
            ))}
          </nav>
          <Link to="/join" className="button-pink">
              register
          </Link>
        </div>
      </header>
    </div>
  );
}
