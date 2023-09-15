import { useState } from "react";
import "./css/fillIn.style.css";
import Modal from "./components/FillIn/Modal";

export const FillIn = () => {
  const [coreTopic, setCoreTopic] = useState("");
  const [mainTopics, setMainTopics] = useState(Array(8).fill(""));
  const [subTopics, setSubTopics] = useState(Array(8).fill(Array(8).fill("")));
  const [selectedMainTopicIndex, setSelectedMainTopicIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCoreTopicChange = (e) => {
    setCoreTopic(e.target.value);
  };

  const handleMainTopicChange = (index) => (e) => {
    const newMainTopics = [...mainTopics];
    newMainTopics[index] = e.target.value;
    setMainTopics(newMainTopics);
  };

  const handleSubTopicChange = (subIndex) => (e) => {
    const newSubTopics = [...subTopics];
    newSubTopics[selectedMainTopicIndex] = [
      ...newSubTopics[selectedMainTopicIndex],
    ];
    newSubTopics[selectedMainTopicIndex][subIndex] = e.target.value;
    setSubTopics(newSubTopics);
  };

  const handleCoreTopicClick = () => {
    setSelectedMainTopicIndex(null);
  };

  const handleSave = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <div className="left-side">
        <div onClick={handleCoreTopicClick}>
          <input
            type="text"
            className="input"
            placeholder="핵심 토픽"
            value={coreTopic}
            onChange={handleCoreTopicChange}
          />
        </div>
        {mainTopics.map((topic, index) => (
          <div key={index} onClick={() => setSelectedMainTopicIndex(index)}>
            <input
              type="text"
              className="main-input"
              placeholder={`주요 토픽 ${index + 1}`}
              value={topic}
              onChange={handleMainTopicChange(index)}
            />
          </div>
        ))}
        <button className="save-button" onClick={handleSave}>
          저장
        </button>
      </div>
      {selectedMainTopicIndex !== null && (
        <div className="right-side">
          <div className="subtopic-container">
            {Array(8)
              .fill()
              .map((_, subIndex) => (
                <input
                  key={subIndex}
                  type="text"
                  className="subtopic-input"
                  placeholder={`하위 토픽 ${selectedMainTopicIndex + 1}-${
                    subIndex + 1
                  }`}
                  value={subTopics[selectedMainTopicIndex][subIndex]}
                  onChange={handleSubTopicChange(subIndex)}
                />
              ))}
          </div>
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
