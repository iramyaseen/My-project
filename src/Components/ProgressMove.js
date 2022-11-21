import React, { useEffect, useState } from "react";
import sound from "../Audio/clock sound.wav";

let circuler_progress_bar = document.querySelector(".circuler_progress_bar");
export const ProgressMove = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  var timer;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(() => {
      // ignore prettier
      circuler_progress_bar.style.background = `conic-gradient(#6d7aff ${
        second * 5
      }deg, #393939 ${second * 6}deg)`;
      if (second === minutes) {
        clearInterval(timer);
      }
      setSecond(second + 1);
      if (second === 59) {
        setMinutes(minutes + 1);
        setSecond(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  if (second === 1) {
    new Audio(sound).play();
  }
  if (second === 57) {
    new Audio(sound).play();
  }

  const pause = () => {
    clearInterval(timer);
  };
  const stop = () => {
    setMinutes(0);
    setSecond(0);
  };

  return (
    <div>
      {" "}
      <div className="outer_boder_bar">
        <div className="circuler_progress_bar">
          <span className="progress_value">
            {minutes <= 10 ? "0" + minutes : minutes}:
            {second <= 10 ? "0" + second : second}
          </span>
        </div>
      </div>
      <div className="buttons">
        <button className="stop_btn" onClick={stop}>
          Stop
        </button>
        <button className="pause_btn" onClick={pause}>
          Pause
        </button>
      </div>
    </div>
  );
};
