import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { links } from "../links";
import SofaSVG from "./SofaSVG";
import { useSharedStateValue } from "../../statedrive/index";
import { loggedIn } from "../../statedrive/atoms";

export default function Footer() {
  const loginStatus = useSharedStateValue(loggedIn);
  return (
    <div>
      <footer className="block align-center pt-10">
        <div className="sm:px-5 sm:py-12 flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex justify-center flex-col">
          <div className="sm:w-64 w-3/4 flex-shrink-0 sm:ml-8 mx-auto text-center md:text-left">
            <p className="font-inter text-primaryIndigo text-xl sm:text-4xl font-bold">
              Don't do it alone, do it with a legion, Halo.
            </p>
          </div>
          <div
            className="sm:flex-grow sm:flex sm:flex-wrap font-vg5000 md:pl-20 -mb-10 md:mt-0 mt-2 md:text-left text-center"
          >
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                {links.map((link) => (
                  <li className="my-2" key={link.name}>
                    <Link
                      className="mr-5 lowercase text-primary hover:text-primaryIndigo"
                    smooth
                      to={link.src}
                    >
                      {window.location.pathname === link.src ? (
                        <>
                          {">"}
                          {link.name}
                        </>
                      ) : (
                        <>{link.name}</>
                      )}
                    </Link>
                  </li>
                ))}
                {loginStatus ? (
                  <li className="my-2" key="dashboard">
                    <Link
                      className="mr-5 lowercase text-primary hover:text-primaryIndigo"
                      smooth
                      to="/dashboard"
                    >
                      {window.location.pathname === "/dashboard" ? (
                        <>
                          {">"}
                          dashboard
                        </>
                      ) : (
                        <>dashboard</>
                      )}
                    </Link>
                  </li>
                ) : (
                  <li className="my-2" key="join">
                    <Link
                      className="mr-5 lowercase text-primary hover:text-primaryIndigo"
                      smooth
                      to="/join"
                    >
                      {window.location.pathname === "/join" ? (
                        <>
                          {">"}
                          join
                        </>
                      ) : (
                        <>join</>
                      )}
                    </Link>
                  </li>
                )}
              </nav>
            </div>
          </div>
          <div className="hidden sm:contents flex-shrink-0 float-right">
            <SofaSVG />
          </div>
          <div></div>
        </div>
        <div className="py-4 text-center" style={{ fontFamily: "VG5000" }}>
          <span>
            Made with a lot of coughs(literally) and Hydroxychloroquine by{" "}
            <a
              href="https://utkarsh.co"
              rel="noreferrer"
              className="text-primary"
              target="_blank"
            >
              Utkarsh
            </a>
            .
          </span>
        </div>
      </footer>
    </div>
  );
}
