import React, { useEffect, useState } from "react";
import sound from "../Audio/round-start.mp3";

export const ProgressMove = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    document.querySelector(
      ".circuler_progress_bar"
    ).style.background = `conic-gradient(#6d7aff ${second * 5}deg, #393939 ${
      second * 6
    }deg)`;
    if (startTimer) {
      const timerId = setInterval(() => {
        if (second === minutes) {
          clearInterval(timerId);
        }
        setSecond(second + 1);
        if (second === 59) {
          setStartTimer(false);
          setSecond(0);
          clearInterval(timerId);
          setStart(false);
        }
      }, 1000);
      return () => clearInterval(timerId);
    }
  });
  const toggleBtn = () => {
    setStart(!start);
    setStartTimer(!startTimer);
    if (second === 1) {
      const soundStop = setInterval(() => {
        new Audio(sound).play();
      }, 1000);
      setTimeout(() => {
        clearInterval(soundStop);
      }, 3000);
    }
    if (second === 57) {
      const soundStop = setInterval(() => {
        new Audio(sound).play();
      }, 1000);
      setTimeout(() => {
        clearInterval(soundStop);
      }, 3000);
    }
  };
  const stop = () => {
    setMinutes(0);
    setSecond(0);
    setStartTimer(false);
    setStart(false);
  };
  return (
    <div className="responsive_container">
      <div className="outer_boder_bar">
        <div className="circuler_progress_bar">
          <span className="progress_value">
            {minutes <= 9 ? "0" + minutes : minutes}:
            {second <= 9 ? "0" + second : second}
          </span>
        </div>
      </div>
      <div className="buttons">
        <button className="stop_btn" onClick={stop}>
          Stop
        </button>
        <button className="pause_btn" onClick={() => toggleBtn()}>
          {start ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};
