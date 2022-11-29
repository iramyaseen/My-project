import React, { useEffect, useState } from "react";
import sound from "../Audio/round-start.mp3";
export const ProgressMove = () => {
  const [second, setSecond] = useState(59);
  const [minutes, setMinutes] = useState(1);
  const [startTimer, setStartTimer] = useState(false);
  const [start, setStart] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  var name = new Audio(sound);
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
        setSecond(second - 1);
        if (second === 0) {
          setStartTimer(true);
          setSecond(59);
          setMinutes(minutes - 1);
          clearInterval(timerId);
          setStart(true);
          setIsPlaying(false);
        }
      }, 1000);
      if (minutes === 0) {
        if (second === 3) {
          setIsPlaying(true);
        }
        if (second === 0) {
          setMinutes(1);
          setSecond(59);
          setStart(false);
          setStartTimer(false);
          setIsPlaying(false);
        }
      }
      return () => clearInterval(timerId);
    }
  }, [second, startTimer, isPlaying, minutes]);
  useEffect(() => {
    let myAudio = document.getElementById("myAudio");
    if (isPlaying) {
      const intervel = setInterval(() => {
        isPlaying ? myAudio.play() : console.log("sound end");
      }, 600);
      return () => clearInterval(intervel);
    }
  }, [isPlaying]);
  const toggleBtn = () => {
    setStart(!start);
    setStartTimer(!startTimer);
  };
  const stop = () => {
    setMinutes(1);
    setSecond(59);
    setStartTimer(false);
    setStart(false);
    name.pause();
  };
  const increase = () => {
    // setSecond(second + 30);
  };
  const decrease = () => {};
  return (
    <div className="responsive_container">
      <button className="stop_btn" onClick={increase}>
        Increase
      </button>
      <button className="pause_btn" onClick={decrease}>
        decrease
      </button>
      <div className="outer_boder_bar">
        <div className="circuler_progress_bar">
          <span className="progress_value">
            {minutes <= 9 ? "0" + minutes : minutes}:
            {second <= 9 ? "0" + second : second}
          </span>
        </div>
      </div>
      <div className="buttons">
        <audio id="myAudio" src={sound} preload="auto"></audio>
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
