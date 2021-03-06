import React, { useState } from "react";
import { selectedEvents as selectedEventsState } from "../../statedrive/atoms";
import { useSharedState } from "../../statedrive/index";

export default function Card(props) {
  const [active, setActive] = useState(props.isActive || false);
  const [selectedEvents, setSelectedEvents] = useSharedState(selectedEventsState);

  return (
    <div
      onClick={() => {
        setActive(!active);
        if(!active) {
          setSelectedEvents([...selectedEvents, props.name]);
        } else {
          setSelectedEvents(selectedEvents.filter(event => event !== props.name));
        }
      }}
      className="flex-grow"
    >
      <div
        className={`box-border ${active ? "bg-white text-primary border-4 border-primary" : "bg-primary text-white"} m-4 font-vg5000 text-xl flex justify-center p-16 h-full`}
        key={props.name}
        style={{flex: '1 1 30%'}}
      >
        <span className="block relative rounded overflow-hidden capitalize">
          {active ? <>{"✔️" + props.name}</> : <>{props.name}</>}
        </span>
      </div>
    </div>
  );
}
