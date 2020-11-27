import React from "react";

// imports
import { Layout } from "../../components/exports";
import Parallax from "react-rellax";
import { philosophyData } from "./data";
import Card from './Card';

export default function Philosophy() {
  return (
    <Layout>
      <Parallax>
        <section className="hero__bg">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1
                className="animated__highlight w-128 sm:text-5xl mb-4 font-black text-primaryIndigo font-inter"
                style={{ fontSize: 90 }}
              >
                Our philosophy is what makes us a legion.
              </h1>
              <div className="flex justify-center my-24">
                <button className="button-pink">think you can help?</button>
              </div>
            </div>
          </div>
        </section>
        <div className="flex">
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
      <section id="hero__content-block" className="px-32">
        <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <h1 className="hero__content-block--title font-vg5000 text-center">
              We are at our best when we are
              <span className="bg-yellow-300 px-1 m-1"> together </span>.
            </h1>
            <div className="philosophy__cards my-8">
              {philosophyData.map((philosophyCard) => (
                <Card data={philosophyCard} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="hero__quote-block bg-primary p-32">
        <div className="flex justify-center align-center flex-col">
                <h1 className="text-center font-vg5000 text-4xl text-white">~ Kutteshna kutteshna kutteshna kutteshna kutteshna kutteshna. ~</h1>
                <p className="text-white text-center text-white font-vg5000 text-2xl pt-6">~ Utkarsh the son of God</p>
        </div>
      </section>
    </Layout>
  );
}
