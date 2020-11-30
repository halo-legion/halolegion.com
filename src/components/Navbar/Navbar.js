import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
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
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleLogout = () => {
    logout();
    setLoginStatus(false);
    setRedirect("/join");
    toast.dark("✅ Logged out successfully...");
  };

  const handleError = (res) => {
    toast.error("❌ Oops! Something weird happened...");
    console.log(res);
  }

  return (
    <>
      {redirect ? <Redirect to={redirect} /> : null}

      <div>
        <header className="navbar hidden sm:contents font-vg5000">
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
                    <>{">"} dashboard</>
                  ) : (
                    <>dashboard</>
                  )}
                </Link>
              ) : (
                <Link
                  className="mr-5 lowercase hover:text-primary"
                  smooth
                  to="/join"
                  key="join"
                >
                  {window.location.pathname === "/join" ? (
                    <>{">"} join</>
                  ) : (
                    <>join</>
                  )}
                </Link>
              )}
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
        <header className="sm:hidden z-10">
          <div className="m-4">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={() => {
                setMobileToggle(!mobileToggle);
              }}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div
              className={`sm:hidden p-6 m-6 shadow-2xl rounded-xl ${
                mobileToggle ? "" : "hidden"
              }`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {links.map((link) => (
                  <Link
                    to={link.src}
                    className={`block lowercase p-3 rounded-md text-base font-vg5000 hover:text-white hover:bg-primary ${
                      window.location.pathname === link.src
                        ? "bg-primary text-white"
                        : "text-primary border-2 border-primary"
                    }`}
                    smooth
                    key={link.name}
                  >
                    {link.name}
                  </Link>
                ))}
                {loginStatus ? (
                  <Link
                    smooth
                    to="/dashboard"
                    key="dashboard"
                    className={`block lowercase p-3 rounded-md text-base font-vg5000 hover:text-white hover:bg-primary ${
                      window.location.pathname === "/dashboard"
                        ? "bg-primary text-white"
                        : "text-primary border-2 border-primary"
                    }`}
                  >
                    dashboard
                  </Link>
                ) : (
                  <Link
                    className={`block lowercase p-3 rounded-md text-base font-vg5000 hover:text-white hover:bg-primary ${
                      window.location.pathname === "/join"
                        ? "bg-primary text-white"
                        : "text-primary border-2 border-primary"
                    }`}
                    smooth
                    to="/join"
                    key="join"
                  >
                    join
                  </Link>
                )}
              </div>
              <div className="">
                {loginStatus ? (
                  <GoogleLogout
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="button-pink button-block"
                      >
                        logout
                      </button>
                    )}
                    onLogoutSuccess={handleLogout}
                    onFail={handleError}
                  />
                ) : (
                  <Link to="/join" className="button-pink button-block">
                    login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
