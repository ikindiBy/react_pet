import React from "react";

const AverageCircle = ({ average }) => {
  let avrg = average || "?";
  return (
    <div className="average-circle">
      <span>{avrg}</span>
    </div>
  );
};

export default AverageCircle;
