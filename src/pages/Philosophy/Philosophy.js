import React from "react";

// imports
import { Layout } from "../../components/exports";
import Parallax from "react-rellax";
import { philosophyData } from "./data";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Philosophy() {
  return (
    <Layout>
      <Parallax>
        <section className="hero__bg">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="animated__highlight text-3xl sm:text-8xl mb-4 font-black text-primaryIndigo font-inter">
                Our philosophy is what makes us a legion.
              </h1>
              <div className="flex justify-center my-24">
                <Link to="/join">
                  <button className="button-pink">think you can help?</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="hidden sm:contents flex">
          <Parallax speed={6}>
            <div className="hero__hexagon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="317"
                height="317"
                viewBox="0 0 317 317"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient-hexagon"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stopColor="#ec4899" />
                    <stop offset="1" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>
                <path
                  id="Polygon_1"
                  data-name="Polygon 1"
                  d="M224.153,0,317,92.847V224.153L224.153,317H92.847L0,224.153V92.847L92.847,0Z"
                  fill="url(#linear-gradient-hexagon)"
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
      </Parallax>
      <section id="hero__content-block" className="sm:px-32 -mt-24">
        <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <h1 className="sm:text-5xl text-2xl font-vg5000 text-center">
              We are at our best when we are
              <span className="bg-yellow-300 px-1 m-1">together</span>.
            </h1>
            <div className="philosophy__cards sm:my-8">
              {philosophyData.map((philosophyCard) => (
                <Card data={philosophyCard} key={philosophyCard.name} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="hero__quote-block bg-primary sm:p-32 p-8">
        <div className="flex justify-center align-center flex-col">
          <h1 className="text-center font-vg5000 text-xl sm:text-4xl text-white">
          Either she froze time, met and married the man of her dreams, unfroze time, and hopped back on to vid chat with you, or... you're the dogface. Which do you think it is? I'm on the fence.
          </h1>
          <p className="text-white text-center text-white font-vg5000 text-lg sm:text-2xl pt-6">
            ~ Gilfoyle
          </p>
        </div>
      </section>
    </Layout>
  );
}
