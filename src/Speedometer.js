import React, { useState, useEffect } from "react";
import "./App.css";

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
      <h1>The new Porsche 911 Turbo S has a top speed of: </h1>
      <h1 style={{ color: `hsl(${hue}, 100%, 50%)`, marginLeft: '10px'}}>
        {Math.round(speedInKmh)} km/h
      </h1>
    </div>
  );
};

export default SpeedText;
