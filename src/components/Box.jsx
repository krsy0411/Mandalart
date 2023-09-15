import "../css/box.style.css";

// 3x3사이즈의 박스 컴포넌트 - 서브페이지에서 사용
export const Box = ({ order, centerData, isActive, color }) => {
  return (
    <div className={`box-container ${order}`}>
      <div className={`box one ${isActive ? "active" : "inactive"}`}></div>
      <div className={`box two ${isActive ? "active" : "inactive"}`}></div>
      <div className={`box three ${isActive ? "active" : "inactive"}`}></div>
      <div className={`box four ${isActive ? "active" : "inactive"}`}></div>
      <div
        className={`box center ${isActive ? "active" : "inactive"}`}
        style={{ backgroundColor: color}}
      >
        {centerData}
      </div>
      <div className={`box five ${isActive ? "active" : "inactive"}`}></div>
      <div className={`box six ${isActive ? "active" : "inactive"}`}></div>
      <div className={`box seven ${isActive ? "active" : "inactive"}`}></div>
      <div className={`box eight ${isActive ? "active" : "inactive"}`}></div>
    </div>
  );
};