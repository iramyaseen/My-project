import React from "react";
import { BarComponents } from "../Components/BarComponents";
import { TimerComponent } from "../Components/TimerComponent";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
export const TimerMainPage = () => {
  return (
    <div className="main_container">
      <div className="container responsive_container">
        <BarComponents
          circleIcon={<BsCircle className="circle_icon" />}
          name="Mobile app design"
          minutes="30 minutes"
          percentage="1/4"
          min="24 min"
          icon={<AiOutlineCloseCircle className="close_icon" />}
        />
        <TimerComponent />
      </div>
    </div>
  );
};
