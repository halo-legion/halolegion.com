import React from "react";

// imports
import { Layout } from "../../components/exports";
import Parallax from "react-rellax";
import { contactList } from "./data";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Layout>
      <Parallax>
        <section className="hero__bg">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="animated__highlight text-3xl sm:text-8xl mb-4 font-black text-primaryIndigo font-inter">
                Interested in talking? Contact us here.
              </h1>
              <div className="flex justify-center my-24">
                <Link to="/join">
                  <button className="button-pink">or help us hehe</button>
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
            <h1 className="sm:text-5xl text-2xl leading-loose font-vg5000 text-center">
              We'd love to talk about stuff and
              <span className="bg-yellow-300 px-1 m-1">memes</span>.
            </h1>
          </div>
        </div>
      </section>
      <section className="relative h-screen mt-32">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Delhi+Public+School+Indore&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
        </div>
        <div className="container px-5 py-32 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-10 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-primary font-vg5000 text-3xl">
              Email: hi@halolegion.com
            </h2>
            <div className="mt-5">
              <h2 className="text-primary font-vg5000 text-3xl">Phone:</h2>
              {contactList.map((contact) => (
                <div
                  className="contact__person font-vg5000 text-primaryIndigo text-2xl py-2"
                  key={contact.name}
                >
                  <h4 className="contact__person_name">
                    {contact.name} ({contact.designation})
                  </h4>
                  <p className="contact__person_phone text-primary text-xl">
                    {contact.phone}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-primary font-vg5000 text-3xl">Socials:</h2>
              <div className="flex mt-2">
                <a href="https://instagram.com/halolegion_">
                  <svg
                    id="Icon_ionic-logo-instagram"
                    data-name="Icon ionic-logo-instagram"
                    xmlns="http://www.w3.org/2000/svg"
                    width="31.824"
                    height="31.824"
                    viewBox="0 0 31.824 31.824"
                    className="mr-2"
                  >
                    <path
                      id="Path_53"
                      data-name="Path 53"
                      d="M27.042,7.152a6.649,6.649,0,0,1,6.63,6.63v13.26a6.649,6.649,0,0,1-6.63,6.63H13.782a6.649,6.649,0,0,1-6.63-6.63V13.782a6.65,6.65,0,0,1,6.63-6.63h13.26m0-2.652H13.782A9.309,9.309,0,0,0,4.5,13.782v13.26a9.309,9.309,0,0,0,9.282,9.282h13.26a9.309,9.309,0,0,0,9.282-9.282V13.782A9.309,9.309,0,0,0,27.042,4.5Z"
                      transform="translate(-4.5 -4.5)"
                    />
                    <path
                      id="Path_54"
                      data-name="Path 54"
                      d="M25.614,12.978A1.989,1.989,0,1,1,27.6,10.989,1.984,1.984,0,0,1,25.614,12.978Z"
                      transform="translate(-1.083 -3.696)"
                    />
                    <path
                      id="Path_55"
                      data-name="Path 55"
                      d="M19.206,13.9a5.3,5.3,0,1,1-5.3,5.3,5.309,5.309,0,0,1,5.3-5.3m0-2.652a7.956,7.956,0,1,0,7.956,7.956,7.958,7.958,0,0,0-7.956-7.956Z"
                      transform="translate(-3.294 -3.294)"
                    />
                  </svg>
                </a>
                <a href="https://google.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.833"
                    height="31.769"
                    viewBox="0 0 28.833 31.769"
                    className="mr-2"
                  >
                    <path
                      id="Icon_awesome-facebook-square"
                      data-name="Icon awesome-facebook-square"
                      d="M25.743,2.25H3.089A3.258,3.258,0,0,0,0,5.654V30.615a3.258,3.258,0,0,0,3.089,3.4h8.833v-10.8H7.868V18.135h4.055V14.26c0-4.407,2.381-6.842,6.028-6.842a22.365,22.365,0,0,1,3.573.343v4.326H19.511a2.434,2.434,0,0,0-2.6,2.746v3.3h4.427l-.708,5.084H16.91v10.8h8.833a3.258,3.258,0,0,0,3.089-3.4V5.654a3.258,3.258,0,0,0-3.089-3.4Z"
                      transform="translate(0 -2.25)"
                    />
                  </svg>
                </a>
                <a href="https://twitter.com/realhalolegion">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31.863"
                    height="31.863"
                    viewBox="0 0 31.863 31.863"
                    className="mr-2"
                  >
                    <path
                      id="Icon_awesome-twitter-square"
                      data-name="Icon awesome-twitter-square"
                      d="M28.449,2.25H3.414A3.415,3.415,0,0,0,0,5.664V30.7a3.415,3.415,0,0,0,3.414,3.414H28.449A3.415,3.415,0,0,0,31.863,30.7V5.664A3.415,3.415,0,0,0,28.449,2.25ZM24.971,13.544c.014.2.014.405.014.6A13.181,13.181,0,0,1,11.714,27.421,13.21,13.21,0,0,1,4.552,25.33a9.827,9.827,0,0,0,1.124.057,9.352,9.352,0,0,0,5.789-1.991,4.671,4.671,0,0,1-4.36-3.236,5.027,5.027,0,0,0,2.105-.085,4.665,4.665,0,0,1-3.734-4.58v-.057a4.662,4.662,0,0,0,2.105.59A4.655,4.655,0,0,1,5.5,12.143a4.606,4.606,0,0,1,.633-2.354,13.245,13.245,0,0,0,9.616,4.879,4.675,4.675,0,0,1,7.959-4.26,9.141,9.141,0,0,0,2.959-1.124,4.652,4.652,0,0,1-2.048,2.568,9.283,9.283,0,0,0,2.688-.725A9.818,9.818,0,0,1,24.971,13.544Z"
                      transform="translate(0 -2.25)"
                    />
                  </svg>
                </a>
                <a href="https://github.com/halolegion">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31.91"
                    height="31.91"
                    viewBox="0 0 31.91 31.91"
                  >
                    <path
                      id="Icon_awesome-github-square"
                      data-name="Icon awesome-github-square"
                      d="M28.491,2.25H3.419A3.42,3.42,0,0,0,0,5.669V30.741A3.42,3.42,0,0,0,3.419,34.16H28.491a3.42,3.42,0,0,0,3.419-3.419V5.669A3.42,3.42,0,0,0,28.491,2.25Zm-8.74,27.33c-.6.107-.819-.264-.819-.57,0-.385.014-2.351.014-3.939a2.775,2.775,0,0,0-.8-2.187c2.635-.292,5.413-.655,5.413-5.207A3.657,3.657,0,0,0,22.337,14.9a4.455,4.455,0,0,0-.121-3.205c-.99-.306-3.255,1.275-3.255,1.275a11.205,11.205,0,0,0-5.926,0S10.77,11.389,9.78,11.695A4.42,4.42,0,0,0,9.659,14.9a3.577,3.577,0,0,0-1.111,2.778c0,4.53,2.657,4.915,5.292,5.207a2.582,2.582,0,0,0-.755,1.588,2.5,2.5,0,0,1-3.44-.99,2.481,2.481,0,0,0-1.816-1.218c-1.154-.014-.078.727-.078.727.769.356,1.311,1.724,1.311,1.724.691,2.115,4,1.4,4,1.4,0,.99.014,2.6.014,2.892s-.214.677-.819.57A11.817,11.817,0,0,1,4.259,18.3,11.3,11.3,0,0,1,15.8,6.8,11.556,11.556,0,0,1,27.637,18.3,11.708,11.708,0,0,1,19.752,29.58Zm-6.988-4.352c-.135.028-.264-.028-.278-.121s.078-.2.214-.228.264.043.278.135S12.907,25.2,12.764,25.228Zm-.677-.064c0,.093-.107.171-.249.171s-.264-.064-.264-.171.107-.171.249-.171S12.087,25.057,12.087,25.164Zm-.976-.078c-.028.093-.171.135-.292.093s-.228-.135-.2-.228.171-.135.292-.107C11.055,24.886,11.147,24.993,11.112,25.086Zm-.876-.385c-.064.078-.2.064-.306-.043s-.135-.228-.064-.292.2-.064.306.043S10.3,24.644,10.236,24.7Zm-.648-.648c-.064.043-.185,0-.264-.107s-.078-.228,0-.278.2-.014.264.093a.209.209,0,0,1,0,.292Zm-.463-.691c-.064.064-.171.028-.249-.043-.078-.093-.093-.2-.028-.249s.171-.028.249.043C9.174,23.205,9.188,23.312,9.124,23.362Zm-.477-.527a.134.134,0,0,1-.2.028c-.093-.043-.135-.121-.107-.185a.168.168,0,0,1,.2-.028C8.633,22.7,8.676,22.778,8.647,22.835Z"
                      transform="translate(0 -2.25)"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
