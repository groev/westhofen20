import React from "react";

export default function Project(props) {
  return (
    <div className="Project">
      <div className="front">
        {props.data.logo ? <img src={props.data.logo} /> : props.data.name}
      </div>
      <div className="back">
        <div>
          <p>{props.data.beschreibung}</p>
          {props.data.demo && (
            <a target="_blank" href={props.data.demo}>
              Demo
            </a>
          )}
          {props.data.github && (
            <a target="_blank" href={props.data.github}>
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
