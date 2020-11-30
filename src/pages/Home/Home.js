import React from "react";

// imports
import { Layout, Team } from "../../components/exports";
import Parallax from "react-rellax";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <Parallax>
        <section className="hero__bg">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="hero__circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="300"
                viewBox="0 0 359 359"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stopColor="#ec4899" />
                    <stop offset="1" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>
                <circle
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  cx="179.5"
                  cy="179.5"
                  r="179.5"
                  fill="url(#linear-gradient)"
                />
              </svg>
            </div>
            <div className="text-center lg:w-2/3 w-full">
              <h1
                className="text-2xl mb-4 font-black text-primaryIndigo font-inter"
              >
                Don't do it alone, do it with a legion, Halo.
              </h1>
              <div className="flex justify-center">
                <p
                  className="my-8 md:w-1/2 break-words leading-relaxed text-lg font-medium font-display"
                >
                  Halo is the official technology club of DPS Indore. Besides
                  that, we just hang around and try putting things together.
                </p>
              </div>
              <div className="flex justify-center">
                <Link to="/join">
                  <button className="button-pink">get in</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
      <div className="flex">
        <Parallax speed={6}>
          <div className="hero__circle_two">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="393"
              height="393"
              viewBox="0 0 393 393"
            >
              <defs>
                <linearGradient
                  id="linear-gradient-2"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#2dd4bf" />
                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <circle
                id="Ellipse_2"
                data-name="Ellipse 2"
                cx="196.5"
                cy="196.5"
                r="196.5"
                fill="url(#linear-gradient-2)"
              />
            </svg>
          </div>
        </Parallax>
        <div className="hero__square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="338.544"
            height="313.606"
            viewBox="0 0 338.544 313.606"
          >
            <defs>
              <linearGradient
                id="linear-gradient-3"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#d946ef" />
                <stop offset="1" stopColor="#9333ea" />
              </linearGradient>
            </defs>
            <rect
              id="Rectangle_8"
              data-name="Rectangle 8"
              width="270"
              height="230"
              transform="translate(0 46.93) rotate(-9)"
              fill="url(#linear-gradient-3)"
            />
          </svg>
        </div>
      </div>
      <section id="hero__content-block" className="p-32">
        <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <h1 className="hero__content-block--title font-vg5000 text-center my-12">
              Definitely more than a{" "}
              <span className="bg-yellow-300 p-1"> high school club </span>.
            </h1>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <p className="text-primary font-display font-bold text-xl">
                At Halo, we are more than a high school club. Indeed, we don't
                define as one either. Halo is about making. It's about its
                members. A legion is dysfunctional unless a cavalry is present.
                Thus, Halo cares about its cavalry. Halo is consists of
                like-minded individuals possessing a diverse skill-set. Halo has
                a foundation built on its{" "}
                <span className="text-black italic">philosophy</span> —
                building, teaming up, losing and more importantly setting apart.
              </p>
            </div>
            <div className="flex justify-center w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-1/2 w-full lg:h-80 object-cover object-center rounded"
                width="353"
                height="327"
                viewBox="0 0 353 327"
              >
                <g
                  id="Group_15"
                  data-name="Group 15"
                  transform="translate(-1356 -1597)"
                >
                  <text
                    id="h"
                    transform="translate(1482 1810)"
                    fill="rgba(12,5,63,0.35)"
                    fontSize="213"
                    fontFamily="VG5000-Regular, VG5000"
                  >
                    <tspan x="0" y="0">
                      h
                    </tspan>
                  </text>
                  <text
                    id="fof_qhn_osmiywaewm_qotb_bs_"
                    data-name="fof qhn osmiywaewm qotb bs
"
                    transform="translate(1356 1883)"
                    fill="rgba(12,5,63,0.35)"
                    fontSize="29"
                    fontFamily="VG5000-Regular, VG5000"
                  >
                    <tspan x="0" y="0">
                      fof qhn osmiywaewm qotb bs
                    </tspan>
                    <tspan x="0" y="35"></tspan>
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="px-32">
        <div className="register__card container px-5 mx-auto">
          <div className="flex justify-center">
            <div className="register__card--graybox h-96 rounded-3xl"></div>
          </div>
          <div className="flex justify-center">
            <div className="register__card--pinkbox h-96 rounded-3xl shadow-2xl">
              <div className="register__card__content w-full h-full flex justify-center items-center flex-col">
                <h1 className="text-white font-inter text-4xl font-extrabold">
                  Do you have what it takes?
                </h1>
                <p className="text-white m-6" style={{ width: "60%" }}>
                  We are looking for like-minded individuals to make this legion
                  stronger. Do you think you have it in you? Register for our
                  annual inductions or{" "}
                  <span className="font-black">get more information</span> about
                  it.
                </p>
                <button className="register__card__button bg-white text-black font-inter font-extrabold py-6 px-24 rounded inline-flex items-center focus:outline-none border-4 border-dashed border-primary shadow-lg hover:shadow-2xl">
                  <div className="mr-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34.313"
                      height="34.875"
                      className=""
                      viewBox="0 0 34.313 34.875"
                    >
                      <path
                        id="Icon_awesome-google"
                        data-name="Icon awesome-google"
                        d="M34.313,18.408c0,9.949-6.813,17.03-16.875,17.03a17.438,17.438,0,0,1,0-34.875A16.769,16.769,0,0,1,29.13,5.126L24.384,9.689C18.176,3.7,6.63,8.2,6.63,18A10.923,10.923,0,0,0,17.438,29.011c6.9,0,9.492-4.95,9.9-7.516h-9.9v-6h16.6A15.287,15.287,0,0,1,34.313,18.408Z"
                        transform="translate(0 -0.563)"
                        fill="#6c63ff"
                      />
                    </svg>
                  </div>

                  <span>Sign up with @dpsindore.org</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="team__section px-32 py-24 my-20 bg-primary">
        <div className="flex justify-center items-center flex-col">
          <h1 className="team__section_title text-white font-bold text-inter uppercase text-5xl">
            The team
          </h1>
          <p className="team__section_description text-white font-medium text-opensans text-lg my-6">
            As said previously, Halo is more about its members than the club
            itself. Well, here goes our cavalry.
          </p>
          <Team />
        </div>
      </section>
    </Layout>
  );
}
