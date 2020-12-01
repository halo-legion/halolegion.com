import React from "react";

// imports
import { Layout } from "../../components/exports";
import { Link } from "react-router-dom";
import { links } from "./links";

export default function Resources() {
  return (
    <Layout>
      <section className="hero__bg">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="animated__highlight text-3xl sm:text-8xl mb-4 font-black text-primaryIndigo font-inter">
              Learning Resources
            </h1>
            <div className="flex justify-center my-24">
              <Link to="/join">
                <button className="button-pink">
                  think you are a great fit?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="hero__content-block" className="sm:px-32 -mt-24">
        <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <h1 className="sm:text-5xl text-2xl font-vg5000 text-center">
              Leverage these resources
              <span className="bg-yellow-300 px-1 m-1">for your good</span>.
            </h1>
          </div>
        </div>
      </section>
      <section className="sm:px-32 px-8 py-10 sm:py-10 mt-8 sm:mt-10 bg-primary text-white sm:flex sm:justify-center sm:items-center">
        <div>
          <h1 className="sm:text-5xl text-3xl font-bold">Links</h1>
          <div className="text-2xl flex flex-col space-y-1 font-vg5000 py-4 underline">
            {links.map((link) => (
              <a href={link.url} key={link.name}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
