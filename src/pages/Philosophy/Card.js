import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div>
      <div
        className="philosophy__card p-32 flex justify-center m-4 flex-col text-center"
        style={{ backgroundColor: props.data.color }}
      >
         <div className="mx-auto" style={{width: "100%"}}>
            <h1 className="philosophy__card_title font-extrabold font-inter text-white text-3xl">
              {props.data.name}
            </h1>
            <p className="philosophy__card_description font-vg5000 text-white text-xl text-left m-8">
              {props.data.description}
            </p>
          </div>
      </div>
    </div>
  );
}
