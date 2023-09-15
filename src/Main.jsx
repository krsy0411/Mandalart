import { useState, useEffect } from "react";
import { Box } from "./components/Box";
import "./css/main.style.css";

export const Main = () => {
  const [mainTopicData, setMainTopicData] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
  });
  const [isEditing, setIsEditing] = useState(null);
  const [tempData, setTempData] = useState({});

  const handleDataChange = (position, data) => {
    setMainTopicData((prev) => ({ ...prev, [position]: data }));
  };

  const handleEdit = (position) => {
    setIsEditing(position);
    setTempData((prev) => ({ ...prev, [position]: mainTopicData[position] }));
  };

  const handleBlur = (position) => {
    handleDataChange(position, tempData[position]);
    setIsEditing(null);
  };

  const positions = [
    "one",
    "two",
    "three",
    "four",
    "center",
    "five",
    "six",
    "seven",
    "eight",
  ];

  useEffect(() => {
    setMainTopicData({
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: "",
    });
  }, []);

  return (
    <>
      <div className="nav">
        <p className="logo">MANDARAT</p>
        <div className="user-icon">
          <a href="{() => false}">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>
      <div className="grid-container">
        {positions.map((position, index) => {
          if (index < 4) {
            return (
              <Box
                key={position}
                centerData={mainTopicData[position]}
                isActive={mainTopicData[position] !== ""}
              />
            );
          }

          if (index === 4) {
            return (
              <div className="box-container main-box">
                {positions.map((position, index) => (
                  <div key={index} className={position}>
                    {isEditing === position ? (
                      <input
                        type="text"
                        value={tempData[position] ?? ""}
                        onChange={(e) =>
                          setTempData((prev) => ({
                            ...prev,
                            [position]: e.target.value,
                          }))
                        }
                        onBlur={() => handleBlur(position)}
                        className="input-style"
                        placeholder=""
                      />
                    ) : (
                      <i onClick={() => handleEdit(position)}>
                        {tempData[position] || (
                          <span style={{ color: "#888" }}>데이터 입력</span>
                        )}
                      </i>
                    )}
                  </div>
                ))}
              </div>
            );
          }

          return (
            <Box
              key={position}
              centerData={mainTopicData[position]}
              isActive={mainTopicData[position] !== ""}
            />
          );
        })}
      </div>
    </>
  );
};
