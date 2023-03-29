import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Nothing from "./Test";
import ExpandableCard from "./Expandable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nothing />
    <App />
    <h1
      style={{
        textAlign: "center",
        marginTop: '4rem',
        marginBottom: '4rem'
      }}
    >
      Give a Look into ours Cars
    </h1>
    <div className="Porsches">
      <ExpandableCard
        image="/Porsche_one.jpeg"
        about="The Porsche 911 Turbo S is the latest high-performance model in the 911 range. It combines power, driving dynamics, and comfort. It is available as a coupe or a Cabriolet and boasts a new 3.8-liter boxer engine paired with two VTG turbochargers to deliver 650 PS and 478 kW of power 1. The 911 Turbo S reaches 60 mph in 2.6 seconds and covers the ¹/₄ mile in 10.5 seconds. Its top track speed is 205 mph"
      />
      <ExpandableCard
        image="/Porsche_two.jpeg"
        about="The Porsche 911 Turbo S Cabriolet is a high-performance convertible that combines power, driving dynamics, and comfort. It is powered by a new boxer engine with 3,745 cm³ and two VTG turbochargers, which delivers 478 kW (650 PS) 1. The 911 Turbo S Cabriolet can go from zero to 62mph in just 2.8 seconds"
      />
      <ExpandableCard
        image="/Porsche_three.png"
        about="The Porsche 911 is a two-door 2+2 high-performance rear-engined sports car introduced in September 1964 by Porsche AG of Stuttgart, Germany. It has a rear-mounted flat-six engine and originally a torsion bar suspension 1. The range is made up entirely of models from the current 992 generation. These begin at the common-or-garden 911 Carrera, then span through various combinations of rear- and all-wheel-drive, and couple, convertible and targa roofs"
      />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
