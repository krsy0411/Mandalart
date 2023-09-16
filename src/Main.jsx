import { useState, useEffect, useCallback } from "react";
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

  const COLORS = [
    "#FCE1DD",
    "#FAEDDC",
    "#FDFCE8",
    "#EBE9E6",
    "#AEDFF7",
    "#E9F2DF",
    "#D8D5EC",
    "#C7D3EC",
    "#DCEFFC",
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

  const [progressData, setProgressData] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
  });

  useEffect(() => {
    console.log("progressData changed", progressData);
  }, [progressData]);

  const handleProgressUpdate = (position, progress) => {
    console.log("handleProgressUpdate called", { position, progress });
    setProgressData((prev) => ({
      ...prev,
      [position]: progress,
    }));
  };

  return (
    <>
      {/* top: navbar section */}
      <div className="nav">
        <p className="logo blink">MANDARAT</p>
        <div className="user-icon">
          <a href="{() => false}">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>

      <div className="container">
        {/* left: grid-container section */}
        <div className="grid-container">
          {positions.map((position, index) => {
            if (index !== 4) {
              return (
                <Box
                  key={position}
                  centerData={mainTopicData[position]}
                  isActive={mainTopicData[position] !== ""}
                  color={
                    mainTopicData[position] !== "" ? COLORS[index] : undefined
                  }
                  onProgressUpdate={(position, progress) =>
                    handleProgressUpdate(position, progress)
                  }
                  position={position}
                />
              );
            }

            if (index === 4) {
              return (
                <div className="box-container main-box">
                  {positions.map((position, index) => (
                    <div
                      key={index}
                      className={position}
                      style={{ backgroundColor: COLORS[index] }}
                    >
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
          })}
        </div>

        {/* right: progress-bar section */}
        <div className="progress-bar-container-wrapper">
          <div className="progress-intro-text">
            준혁님의 목표 달성률이에요. 조금만 더 힘내봐요 💪🏻
          </div>
          {Object.keys(mainTopicData).map((key, index) =>
            index !== 8 ? (
              <div key={index} className="progress-bar-container">
                <span className="bar-text">
                  {mainTopicData[key] || "데이터 없음"}
                </span>
                <div className="bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: (progressData[key] ?? 0) + "%" }}
                  ></div>
                </div>
                {(progressData[key] ?? 0) + "%"}
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};
