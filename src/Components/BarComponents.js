import React from "react";
export const BarComponents = ({
  name,
  minutes,
  percentage,
  min,
  icon,
  circleIcon,
}) => {
  return (
    <div className="bar_container">
      <div className="circle">{circleIcon}</div>
      <div className="bar_name">
        <div>
          <h3 style={{ fontWeight: "lighter" }}>{name}</h3>
        </div>
        <div style={{ color: "#7b7b7b", fontWeight: "bold" }}>{minutes}</div>
      </div>
      <div>
        <div className="time_in_min">{percentage}</div>
        <div style={{ color: "#7b7b7b", fontWeight: "bold" }}>{min}</div>
      </div>
      <div>{icon}</div>
    </div>
  );
};
