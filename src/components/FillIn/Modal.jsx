import React from "react";
import "../../css/modal.style.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>✅ 저장 완료</h2>
        <p>항목이 성공적으로 저장되었습니다!</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
