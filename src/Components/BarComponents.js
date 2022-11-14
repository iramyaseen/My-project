import React from "react";
import { BsCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
export const BarComponents = () => {
  return (
    <div className="bar_container">
      <div className="circle">
        <BsCircle className="circle_icon" />
      </div>
      <div className="bar_name">
        <div>
          <h3 style={{ fontWeight: "lighter" }}>Mobile app design</h3>
        </div>
        <div style={{ color: "#7b7b7b", fontWeight: "bold" }}>30 minutes</div>
      </div>
      <div>
        <div className="time_in_min">1/4</div>
        <div style={{ color: "#7b7b7b", fontWeight: "bold" }}>24 min</div>
      </div>
      <div>
        <AiOutlineCloseCircle className="close_icon" />
      </div>
    </div>
  );
};
