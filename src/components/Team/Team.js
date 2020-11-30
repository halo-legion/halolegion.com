import React, { useState } from "react";

import { teamMembers } from "../team-members";

export default function Team() {
  const [index, setIndex] = useState(0);
  const length = teamMembers.length;

  const teamMember = teamMembers[index];

  const previousSlide = () => {
    let nIndex = index;
    if (nIndex < 1) {
      nIndex = length - 1;
    } else {
      nIndex--;
    }

    setIndex(nIndex);
  };

  const nextSlide = () => {
    let nIndex = index;

    if (nIndex === length - 1) {
      nIndex = 0;
    } else {
      nIndex++;
    }

    setIndex(nIndex);
  };
  return (
    <div className="w-full">
      <div className="px-5 py-2 mx-auto flex justify-center">
        <button
          className="sm:px-12 sm:py-4 px-8 py-1 bg-white font-vg5000 text-4xl mx-2 focus:outline-none hover:bg-primary hover:text-white border-2 border-white"
          onClick={() => {
            nextSlide();
          }}
        >
          {"<"}
        </button>
        <button
          className="sm:px-12 sm:py-4 px-8 py-1 bg-white font-vg5000 text-4xl mx-2 focus:outline-none hover:bg-primary hover:text-white border-2 border-white"
          onClick={() => {
            previousSlide();
          }}
        >
          {">"}
        </button>
      </div>
      <div className="team__carousel__frame px-5 py-2 mx-auto flex justify-center">
        <div className="hidden sm:contents">
          <div className="team__carousel__frame--outline h-screen w-screen"></div>
        </div>

        <div className="bg-white h-auto sm:h-screen w-screen px-8 sm:transform sm:translate-x-5 sm:translate-y-5">
          <div>
            <div className="w-full sm:px-10 sm:py-24 mx-8 pr-8 my-10">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="sm:w-3/6 lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <div className="team__carousel__frame--main__content">
                    <div className="team__carousel__frame--main__content--title font-vg5000">
                      <h1 className="sm:text-6xl text-3xl py-4">
                        {teamMember.name}
                      </h1>
                      <span className="text-primary sm:text-xl">
                        ~ {teamMember.designation}
                      </span>
                    </div>
                    <div className="sm:text-display text-sm team__carousel__frame--main__content--description py-2 sm:py-8">
                      <p>{teamMember.description}</p>
                    </div>
                    <div className="text-display team__carousel__frame--main__content--socials -ml-2 flex">
                      {teamMember.socials.twitter ? (
                        <a href={teamMember.socials.twitter}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31.5"
                            height="31.5"
                            viewBox="0 0 31.5 31.5"
                            className="mx-2"
                          >
                            <path
                              id="Icon_awesome-twitter-square"
                              data-name="Icon awesome-twitter-square"
                              d="M28.125,2.25H3.375A3.376,3.376,0,0,0,0,5.625v24.75A3.376,3.376,0,0,0,3.375,33.75h24.75A3.376,3.376,0,0,0,31.5,30.375V5.625A3.376,3.376,0,0,0,28.125,2.25ZM24.687,13.416c.014.2.014.4.014.6a13.031,13.031,0,0,1-13.12,13.12A13.06,13.06,0,0,1,4.5,25.066a9.715,9.715,0,0,0,1.111.056,9.246,9.246,0,0,0,5.723-1.969,4.618,4.618,0,0,1-4.31-3.2,4.97,4.97,0,0,0,2.081-.084,4.612,4.612,0,0,1-3.691-4.528v-.056A4.608,4.608,0,0,0,7.5,15.87,4.6,4.6,0,0,1,5.442,12.03,4.554,4.554,0,0,1,6.068,9.7a13.094,13.094,0,0,0,9.506,4.823,4.621,4.621,0,0,1,7.868-4.212A9.036,9.036,0,0,0,26.367,9.2a4.6,4.6,0,0,1-2.025,2.538A9.177,9.177,0,0,0,27,11.025,9.707,9.707,0,0,1,24.687,13.416Z"
                              transform="translate(0 -2.25)"
                              fill="#6c63ff"
                            />
                          </svg>
                        </a>
                      ) : null}
                      {teamMember.socials.linkedin ? (
                        <a href={teamMember.socials.linkedin}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31.5"
                            height="31.5"
                            viewBox="0 0 31.5 31.5"
                            className="mx-2"
                          >
                            <path
                              id="Icon_awesome-linkedin"
                              data-name="Icon awesome-linkedin"
                              d="M29.25,2.25H2.243A2.26,2.26,0,0,0,0,4.521V31.479A2.26,2.26,0,0,0,2.243,33.75H29.25a2.266,2.266,0,0,0,2.25-2.271V4.521A2.266,2.266,0,0,0,29.25,2.25Zm-19.73,27H4.852V14.217H9.527V29.25ZM7.186,12.164A2.707,2.707,0,1,1,9.893,9.457a2.708,2.708,0,0,1-2.707,2.707ZM27.021,29.25H22.352V21.938c0-1.744-.035-3.987-2.426-3.987-2.433,0-2.805,1.9-2.805,3.86V29.25H12.452V14.217h4.479V16.27h.063a4.917,4.917,0,0,1,4.423-2.426c4.725,0,5.6,3.115,5.6,7.165Z"
                              transform="translate(0 -2.25)"
                              fill="#6c63ff"
                            />
                          </svg>
                        </a>
                      ) : null}
                      {teamMember.socials.instagram ? (
                        <a href={teamMember.socials.instagram}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31.518"
                            height="31.51"
                            viewBox="0 0 31.518 31.51"
                          >
                            <path
                              id="Icon_awesome-instagram"
                              data-name="Icon awesome-instagram"
                              d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z"
                              transform="translate(0.005 -2.238)"
                              fill="#6c63ff"
                            />
                          </svg>
                        </a>
                      ) : null}
                      {teamMember.socials.github ? (
                        <a href={teamMember.socials.github}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31.5"
                            height="31.5"
                            viewBox="0 0 31.5 31.5"
                            className="mx-2"
                          >
                            <path
                              id="Icon_awesome-github-square"
                              data-name="Icon awesome-github-square"
                              d="M28.125,2.25H3.375A3.376,3.376,0,0,0,0,5.625v24.75A3.376,3.376,0,0,0,3.375,33.75h24.75A3.376,3.376,0,0,0,31.5,30.375V5.625A3.376,3.376,0,0,0,28.125,2.25ZM19.5,29.229c-.591.105-.809-.26-.809-.562,0-.38.014-2.32.014-3.888a2.74,2.74,0,0,0-.795-2.159c2.6-.288,5.344-.647,5.344-5.14a3.61,3.61,0,0,0-1.2-2.742,4.4,4.4,0,0,0-.12-3.164c-.977-.3-3.213,1.259-3.213,1.259a11.061,11.061,0,0,0-5.85,0s-2.236-1.561-3.213-1.259a4.364,4.364,0,0,0-.12,3.164,3.531,3.531,0,0,0-1.1,2.742c0,4.472,2.623,4.852,5.224,5.14a2.548,2.548,0,0,0-.745,1.568,2.467,2.467,0,0,1-3.4-.977,2.45,2.45,0,0,0-1.793-1.2c-1.139-.014-.077.717-.077.717.759.352,1.294,1.7,1.294,1.7.682,2.088,3.945,1.385,3.945,1.385,0,.977.014,2.566.014,2.855s-.211.668-.809.563A11.665,11.665,0,0,1,4.2,18.1,11.158,11.158,0,0,1,15.6,6.743,11.408,11.408,0,0,1,27.281,18.1,11.558,11.558,0,0,1,19.5,29.229Zm-6.9-4.3c-.134.028-.26-.028-.274-.12s.077-.2.211-.225.26.042.274.134S12.741,24.9,12.6,24.933Zm-.668-.063c0,.091-.105.169-.246.169s-.26-.063-.26-.169.105-.169.246-.169S11.932,24.764,11.932,24.87Zm-.963-.077c-.028.091-.169.134-.288.091s-.225-.134-.2-.225.169-.134.288-.105C10.912,24.6,11,24.7,10.969,24.792Zm-.865-.38c-.063.077-.2.063-.3-.042s-.134-.225-.063-.288.2-.063.3.042S10.167,24.356,10.1,24.412Zm-.64-.64c-.063.042-.183,0-.26-.105s-.077-.225,0-.274.2-.014.26.091a.206.206,0,0,1,0,.288Zm-.457-.682c-.063.063-.169.028-.246-.042-.077-.091-.091-.2-.028-.246s.169-.028.246.042C9.056,22.936,9.07,23.041,9.007,23.091Zm-.471-.52a.132.132,0,0,1-.2.028c-.091-.042-.134-.12-.105-.183a.165.165,0,0,1,.2-.028C8.522,22.437,8.564,22.514,8.536,22.57Z"
                              transform="translate(0 -2.25)"
                              fill="#6c63ff"
                            />
                          </svg>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:contents lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
                  <img alt="ecommerce" src={teamMember.image} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
