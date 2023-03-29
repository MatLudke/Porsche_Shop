import React, { useState, useEffect } from "react";
import './App.css'

const SpeedText = () => {
  const [speed, setSpeed] = useState(0);
  const maxSpeed = 205;

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((prevSpeed) =>
        prevSpeed < maxSpeed ? prevSpeed + 1 : prevSpeed
      );
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const speedInKmh = speed * 1.60934;
  const maxSpeedInKmh = maxSpeed * 1.60934;
  const percentage = (speedInKmh / maxSpeedInKmh) * 100;
  const hue = ((100 - percentage) * 120) / 100;

  return (
    <div className="top-speed">
      <h1>
        Say 👋Hi to new Porsche 911 Turbo S with a top speed of {" "}
        <span>
          <span className="speed" style={{ color: `hsl(${hue}, 100%, 50%)`, marginLeft: "10px" }}>
            {Math.round(speedInKmh)}
          </span>{" "}
          km/h
        </span>
      </h1>
      <img src="/Red_Porsche.png" alt="" />
    </div>
  );
};

function nothing() {
  return (
    <div className="introducing">
      <h1 className="intro">
        Welcome to <h1 id="brand-name">Porsche</h1>
      </h1>
      <SpeedText />
    </div>
  );
}

export default nothing;
