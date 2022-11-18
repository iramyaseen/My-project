import React from "react";
import { BarComponents } from "../Components/BarComponents";
import { BsCircle, BsCheckCircle, BsPlus } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { FooterComponent } from "../Components/FooterComponent";
import { ComponentsSilder } from "../Components/ComponentsSlider";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { BsCheckCircle } from "react-icons/bs";
export const ListTaskPage = () => {
  return (
    <div className="container">
      <ComponentsSilder />
      <div>
        <h2>All Tasks</h2>
        <BarComponents
          className="bar_component"
          circleIcon={<BsCircle className="circle_icon" />}
          name="Mobile app design"
          minutes="30 minutes"
          percentage="1/4"
          min="24 min"
          icon={<FaPlayCircle className="close_icon play_icon" />}
        />
        <BarComponents
          className="bar_component"
          circleIcon={<BsCircle className="circle_icon yellow" />}
          name="Ui animation"
          minutes="0 minutes"
          percentage="0/2"
          min="24 min"
          icon={<FaPlayCircle className="close_icon play_icon" />}
        />
        <BarComponents
          className="bar_component"
          circleIcon={<BsCircle className="circle_icon green" />}
          name="Study languages"
          minutes="0 minutes"
          percentage="0/1"
          min="24 min"
          icon={<FaPlayCircle className="close_icon play_icon" />}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
          }}
        >
          <h3>Completed</h3>
          <h3 className="hide">Hide</h3>
        </div>
        <BarComponents
          className="bar_component"
          circleIcon={<BsCheckCircle className="circle_icon check_icon" />}
          name="Mobile app design"
          minutes="30 minutes"
          percentage="1/4"
          min="24 min"
          icon={<AiOutlineCloseCircle className="close_icon change_color" />}
        />
        <div style={{ marginTop: "25px", marginBottom: "25px" }}>
          <button className="new_task_btn">
            <BsPlus className="plus" />
            Add new task
          </button>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};
