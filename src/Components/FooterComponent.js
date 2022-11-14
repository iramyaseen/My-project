import React from "react";
import { RiTimerLine, RiPieChart2Fill } from "react-icons/ri";
import { BsListTask } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
export const FooterComponent = () => {
  return (
    <div id="header-content" className="footer">
      <div>
        <RiTimerLine />
      </div>
      <div>
        <BsListTask />
      </div>
      <div>
        <FaUserAlt />
      </div>
      <div>
        <RiPieChart2Fill />
      </div>
    </div>
  );
};
