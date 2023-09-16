import { useState, useEffect, useCallback } from "react";
import { Box } from "./components/Box";
import "./css/main.style.css";
import { EditBtn } from "./components/EditBtn";
import { Header } from "./components/Header";

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
    if (position !== "center" && mainTopicData["center"] === undefined) {
      // center가 비어있는데 다른 position을 편집하려 할 때
      alert("세부 목표를 작성하기 전 먼저 핵심 목표를 입력해주세요.");
      return;
    }

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

  const handleProgressUpdate = (position, progress) => {
    setProgressData((prev) => ({
      ...prev,
      [position]: progress,
    }));
  };

  return (
    <>
      {/* top: navbar section */}
      <Header />

      <div className="container">
        {/* 메인의 오른쪽 판 */}
        <div className="right-pane">
          {/* 메인의 오른쪽 헤더 영역 */}
          <div className="right-pane-header">
            <EditBtn />
          </div>
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
                              <span style={{ color: "#888" }}>
                                {position === "center"
                                  ? "핵심 목표"
                                  : `세부 목표 ${index + 1}`}
                              </span>
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
        </div>

        {/* right: progress-bar section */}
        <div className="progress-bar-container-wrapper">
          <div className="progress-intro-text">
            준혁님의{" "}
            {mainTopicData.center ? `'${mainTopicData.center}'에 대한` : ""}{" "}
            목표 달성률이에요. <br />
            {mainTopicData.center
              ? "목표 달성을 위해 조금만 더 힘내봐요 💪🏻"
              : "핵심 목표를 작성해주세요. ☺️"}
          </div>

          {Object.keys(mainTopicData).map((key, index) =>
            index !== 8 ? (
              <div key={index} className="progress-bar-container">
                <span className="bar-text">
                  {mainTopicData[key] || `세부 목표 ${index + 1}`}
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
