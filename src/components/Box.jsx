import { useState, useEffect } from "react";
import "../css/box.style.css";
//
export const Box = ({
  centerData,
  isActive,
  color,
  onProgressUpdate,
  position,
}) => {
  const [boxTexts, setBoxTexts] = useState(Array(9).fill(""));
  const [completedIndexes, setCompletedIndexes] = useState([]);

  const handleTextChange = (index, text) => {
    setBoxTexts((prev) => {
      const newTexts = [...prev];
      newTexts[index] = text;
      return newTexts;
    });
  };

  const handleRightClick = (index, e) => {
    e.preventDefault();
    setCompletedIndexes((prev) => {
      const newCompletedIndexes = [...prev];
      if (newCompletedIndexes.includes(index)) {
        newCompletedIndexes.splice(newCompletedIndexes.indexOf(index), 1);
      } else {
        newCompletedIndexes.push(index);
      }

      return newCompletedIndexes;
    });
  };

  useEffect(() => {
    const newProgress = (completedIndexes.length / 8) * 100;
    onProgressUpdate(position, newProgress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedIndexes, position]);

  return (
    <div className="box-container">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className={`box ${index === 4 ? "center" : ""} ${
            isActive ? "active" : "inactive"
          } ${completedIndexes.includes(index) ? "completed" : ""}`}
          style={index === 4 ? { backgroundColor: color } : {}}
          contentEditable={isActive && index !== 4}
          suppressContentEditableWarning
          onBlur={(e) => handleTextChange(index, e.target.textContent)}
          onContextMenu={(e) => handleRightClick(index, e)}
        >
          {index === 4 ? centerData : boxTexts[index]}
        </div>
      ))}
    </div>
  );
};
