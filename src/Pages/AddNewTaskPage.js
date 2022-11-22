import React from "react";
import { changeActiveButton } from "../Components/Buttom";
import { FooterComponent } from "../Components/FooterComponent";
export const AddNewTaskPage = () => {
  window.onload = () => changeActiveButton();
  return (
    <div className="container" id="portfolio-links-container">
      <div className="new_task">
        <h3>New Task</h3>
        <div>
          <p>Task name</p>
          <p>Short description</p>
        </div>
      </div>
      <div>
        <h3>Task priority</h3>
        <div className="bar_container">
          <p className="hight">Hight</p>
          <p className="hight">Medium</p>
          <p className="hight low">Low</p>
        </div>
      </div>
      <div>
        <h3>Task calendar</h3>
        <div className="task_calendar">
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Task</h3>
              <h4>Intervels</h4>
            </div>
            <div className="task_intervel">
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Work intervel</h3>
              <h4>minutes</h4>
            </div>
            <div className="task_intervel">
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Short Break</h3>
              <h4>minutes</h4>
            </div>
            <div className="task_intervel">
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};
