import React, { useState } from "react";

// imports
import { Layout } from "../../components/exports";
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

export default function Legal() {
  const [toggle, setToggle] = useState(true);
  return (
    <Layout>
      <section id="hero__join" className="hero__bg">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1
              className="w-128 sm:text-5xl mb-4 font-black text-primaryIndigo font-inter"
              style={{ fontSize: 90 }}
            >
              We've got ourselves covered. Pls don't sue us Hooli.
            </h1>
            <div className="flex justify-center py-4">
              <button
                className="register__card__button bg-white text-black font-inter font-extrabold py-6 px-24 rounded inline-flex items-center focus:outline-none shadow-lg hover:shadow-2xl"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <span className="text-primary">
                  {toggle ? "View Terms & Conditions" : "View Privacy Policy"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="privacy__policy p-16">
        {toggle ? <PrivacyPolicy /> : <TermsAndConditions />}
      </section>
    </Layout>
  );
}
