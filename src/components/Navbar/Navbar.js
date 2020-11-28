import { HashLink as Link } from "react-router-hash-link";
import React, { useState } from "react";
import { links } from "../links";
import { loggedIn } from "../../statedrive/atoms";
import { useSharedState } from "../../statedrive/index";
import { GoogleLogout } from "react-google-login";
import { logout } from "../../pages/Join/authentication";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

export default function Navbar() {
  const [loginStatus, setLoginStatus] = useSharedState(loggedIn);
  const [redirect, setRedirect] = useState(null);

  const handleLogout = () => {
    logout();
    setLoginStatus(false);
    setRedirect("/join");
    toast.dark("Logged out successfully...");
  };

  return (
    <>
      {redirect ? <Redirect to={redirect} /> : null}
      <div>
        <header className="navbar" style={{ fontFamily: "VG5000, sans-serif" }}>
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex items-center mb-4 md:mb-0" href="/">
              <span className="ml-3 text-xl">halolegion</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              {links.map((link) => (
                <Link
                  className="mr-5 lowercase hover:text-primary"
                  smooth
                  to={link.src}
                  key={link.name}
                >
                  {window.location.pathname === link.src ? (
                    <>
                      {">"} {link.name}
                    </>
                  ) : (
                    <>{link.name}</>
                  )}
                </Link>
              ))}
              {loginStatus ? (
                <Link
                  className="mr-5 lowercase hover:text-primary"
                  smooth
                  to="/dashboard"
                  key="dashboard"
                >
                  {window.location.pathname === "/dashboard" ? (
                    <>
                      {">"} dashboard
                    </>
                  ) : (
                    <>dashboard</>
                  )}
                </Link>
              ) : null}
            </nav>
            {loginStatus ? (
              <GoogleLogout
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="button-pink"
                  >
                    logout
                  </button>
                )}
                onLogoutSuccess={handleLogout}
              />
            ) : (
              <Link to="/join" className="button-pink">
                login
              </Link>
            )}
          </div>
        </header>
      </div>
    </>
  );
}
