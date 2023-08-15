import React from "react";
import data from "./dataGlasses.json";

export default function GlassIcon({ onChangeGlass }) {
  return (
    <div className="glass-icons-container">
      {data.map((icon) => (
        <div
          key={icon.id}
          className="glass-icon-card"
          onClick={() => onChangeGlass(icon.url)}
        >
          <img src={icon.url} alt={icon.name} width="80px" />
          {/* <div className="glass-icon-description">
            <h3>{icon.name}</h3>
            <b>{icon.desc}</b>
          </div> */}
        </div>
      ))}
    </div>
  );
}
