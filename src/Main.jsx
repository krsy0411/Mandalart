import { useState, useEffect } from "react";
import { Box } from "./components/Box";
import "./css/main.style.css";
import { EditBtn } from "./components/EditBtn";
import Modal from "./components/Modal";

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
  const [modalVisible, setModalVisible] = useState(true)

  const closeModal = () => {
        setModalVisible(false)
  }

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

  return (
    <>
      <div>
            {modalVisible && (
                <Modal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal}></Modal>
            )}
      </div>

      {/* top: navbar section */}
      <div className="nav">
      </div>

      <div className="container">
        {/* 메인의 오른쪽 판 */}
        <div className="right-pane">
          {/* 메인의 오른쪽 헤더 영역 */}
          <div className="right-pane-header">
            <p className="logo">MANDARAT</p>
            <EditBtn />
          </div>
          {/* left: grid-container section */}
          <div className="grid-container">
            {positions.map((position, index) => {
              if (index < 4) {
                return (
                  <Box
                    key={position}
                    centerData={mainTopicData[position]}
                    isActive={mainTopicData[position] !== ""}
                    color={
                      mainTopicData[position] !== "" ? COLORS[index] : undefined
                    }
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

              return (
                <Box
                  key={position}
                  centerData={mainTopicData[position]}
                  isActive={mainTopicData[position] !== ""}
                  color={
                    mainTopicData[position] !== "" ? COLORS[index] : undefined
                  }
                />
              );
            })}
          </div>
        </div>

        {/* right: progress-bar section */}
        <div className="progress-bar-container-wrapper">
          <div className="user-icon">
            <a href="{() => false}">
              <i className="fas fa-user"></i>
            </a>
          </div>
          <div className="progress-intro-text">
            준혁님의 목표 달성률이에요. 조금만 더 힘내봐요 💪🏻
          </div>
          {Object.keys(mainTopicData).map((key, index) =>
            index !== 8 ? ( // 9번째 항목(인덱스 8)를 무시
              <div key={index} className="progress-bar-container">
                <span className="bar-text">
                  {tempData[key] || "데이터 없음"} {/* 여기서 주제를 표시 */}
                </span>
                <div className="bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: mainTopicData[key] ? "100%" : "0%" }}
                  ></div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};