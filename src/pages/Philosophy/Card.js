import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div>
      <div
        className="philosophy__card p-24 sm:p-32 flex justify-center m-4 flex-col text-center"
        style={{ backgroundColor: props.data.color }}
      >
         <div className="mx-auto">
            <h1 className="philosophy__card_title font-extrabold font-inter text-white text-3xl">
              {props.data.name}
            </h1>
            <p className="philosophy__card_description font-vg5000 text-white sm:text-xl text-left mt-8">
              {props.data.description}
            </p>
          </div>
      </div>
    </div>
  );
}
