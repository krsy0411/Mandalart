import { useState, useEffect } from "react";
import { Box } from "./components/Box";
// import { Success } from "./components/Success";
import { EditBtn } from "./components/EditBtn";
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

  return (
    <>
      {/* nav바 영역 */}
      <div className="nav">
        <p className="logo blink">MANDARAT</p>
        <div className="user-icon">
          <a href="#!">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>

      <div className="grid-container">
        {positions.map((position, index) => {
          // center이전 4개의 값
          if (index < 4) {
            return (
              <Box
                key={index}
                order={position}
                centerData={mainTopicData[position]}
                isActive={mainTopicData[position] !== ""}
                color={
                  mainTopicData[position] !== "" ? COLORS[index] : undefined
                }
              />
            );
          }
          // 센터
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
          // center 이후 4개의 값
          return (
            <Box
              key={position}
              order={position}
              centerData={mainTopicData[position]}
              isActive={mainTopicData[position] !== ""}
              color={mainTopicData[position] !== "" ? COLORS[index] : undefined}
            />
          );
        })}
      </div>
      <EditBtn />
    </>
  );
};