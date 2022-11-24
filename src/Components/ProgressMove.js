import React, { useEffect, useState } from "react";
import sound from "../Audio/round-start.mp3";
export const ProgressMove = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
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
        setSecond(second + 1);
        if (second === 59) {
          setStartTimer(false);
          setSecond(0);
          clearInterval(timerId);
          setStart(false);
          setIsPlaying(false);
        }
      }, 1000);
      if (second === 3) {
        setIsPlaying(false);
      }
      if (second === 56) {
        setIsPlaying(true);
      }
      const intervel = setInterval(() => {
        var myAudio = document.getElementById("myAudio");
        isPlaying ? myAudio.play() : console.log("sound end");
        return () => clearInterval(intervel);
      }, 700);
      return () => clearInterval(timerId);
    }
  }, [second, startTimer, isPlaying, minutes]);
  const toggleBtn = () => {
    setStart(!start);
    setStartTimer(!startTimer);
    setIsPlaying(!isPlaying);
  };
  const stop = () => {
    setMinutes(0);
    setSecond(0);
    setStartTimer(false);
    setStart(false);
    name.pause();
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
