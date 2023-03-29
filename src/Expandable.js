import React from "react";
import "./App.css";

const ExpandableCard = ({ image, about }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div
      style={{
        height: isExpanded ? "720px" : "450px",
        transition: "all 0.3s ease-in-out",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        width: "600px",
        marginRight: '2rem'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={image}
        alt=""
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
        }}
      />
      <p
        style={{
          margin: 0,
          display: isExpanded ? "block" : "none",
        }}
      >
        {about}
      </p>
    </div>
  );
};

export default ExpandableCard;
