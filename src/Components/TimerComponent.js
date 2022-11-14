import React from "react";

export const TimerComponent = () => {
  return (
    <div id="header-content2">
      <div className="outer_boder_bar">
        <div className="inner_border_bar">21:50</div>
      </div>
      <div className="buttons">
        <button className="stop_btn">Stop</button>
        <button className="pause_btn">Pause</button>
      </div>
    </div>
  );
};
