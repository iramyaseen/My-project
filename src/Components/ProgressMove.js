import React, { useEffect, useState } from "react";
import sound from "../Audio/round-start.mp3";
export const ProgressMove = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [start, setStart] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [btnstart, setbtnstart] = useState(false);
  const [disabled, setDisabled] = useState(false);
  var name = new Audio(sound);
  useEffect(() => {
    document.querySelector(
      ".circuler_progress_bar"
    ).style.background = `conic-gradient(#6d7aff ${minutes * 6}deg, #393939 ${
      minutes * 6
    }deg,  rgb(128, 128, 233) ${second * 7}deg)`;
    if (startTimer) {
      setbtnstart(true);
      const timerId = setInterval(() => {
        if (second === minutes) {
          clearInterval(timerId);
        }
        setSecond(second - 1);
        if (second === 0) {
          setStartTimer(true);
          setSecond(60);
          setMinutes(minutes - 1);
          clearInterval(timerId);
          setStart(true);
          setIsPlaying(false);
        }
      }, 1000);

      if (minutes === 0) {
        setbtnstart(false);

        if (second <= 4) {
          setIsPlaying(true);
        }
        if (second === 0) {
          setMinutes(0);
          setSecond(0);
          setStart(false);
          setStartTimer(false);
          setIsPlaying(false);
        }
      }
      return () => clearInterval(timerId);
    }
    console.log("okkk", second, minutes);
    if (second === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
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
    setIsPlaying(false);
  };
  const stop = () => {
    setbtnstart(false);
    setMinutes(0);
    setSecond(0);
    setStartTimer(false);
    setStart(false);
    name.pause();
  };
  const increase = () => {
    if (second !== 60) {
      setSecond(second + 30);
    } else {
      setMinutes(minutes + 1);
      setSecond(second - 30);
    }
  };
  const decrease = () => {
    if (second) {
      setSecond(second - 30);
    } else if (minutes) {
      setMinutes(minutes - 1);
      setSecond(second + 30);
    }
  };
  return (
    <div className="responsive_container">
      <div className="buttons">
        <button
          className={btnstart ? "disabled" : "stop_btn"}
          disabled={btnstart}
          onClick={increase}
        >
          Increase
        </button>
        <button
          className={btnstart ? "disabled_change_color" : "pause_btn"}
          disabled={btnstart}
          onClick={decrease}
        >
          decrease
        </button>
      </div>
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
        <button
          className={disabled ? "disabledStop" : "pause_btn changeColor"}
          disabled={disabled}
          onClick={stop}
        >
          Stop
        </button>
        <button
          className={disabled ? "disabled2" : "pause_btn"}
          disabled={disabled}
          onClick={() => toggleBtn()}
        >
          {start ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};
