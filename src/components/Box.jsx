import React, { useState } from "react";
import "../css/box.style.css";

export const Box = ({ centerData, isActive, color }) => {
  const [boxTexts, setBoxTexts] = useState(Array(9).fill(""));

  const handleTextChange = (index, text) => {
    setBoxTexts((prev) => {
      const newTexts = [...prev];
      newTexts[index] = text;
      return newTexts;
    });
  };

  return (
    <div className="box-container">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className={`box ${index === 4 ? "center" : ""} ${
            isActive ? "active" : "inactive"
          }`}
          style={index === 4 ? { backgroundColor: color } : {}}
          contentEditable={isActive && index !== 4}
          suppressContentEditableWarning
          onBlur={(e) => handleTextChange(index, e.target.textContent)}
        >
          {index === 4 ? centerData : boxTexts[index]}
        </div>
      ))}
    </div>
  );
};