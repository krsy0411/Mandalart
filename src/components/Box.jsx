import "../css/box.style.css";

// 3x3사이즈의 박스 컴포넌트 - 서브페이지에서 사용
export const Box = ({ order, color}) => {

  return (
    <div className="box-container">
      <div className="one">
        <i>1</i>
      </div>
      <div className="two">
        <i>2</i>
      </div>
      <div className="three">
        <i>3</i>
      </div>
      <div className="four">
        <i>4</i>
      </div>
      <div className="sub-center" style={{backgroundColor : color}}>
        {/* 중앙 부분 컬러가 센터 중 센터색인 경우만 white로 폰트색 지정 / 나머지는 검정*/}
        {color === "#3A4D8F" ? (<i style={{color: "white"}}>중앙</i>) : (<i>중앙</i>)}
      </div>
      <div className="five">
        <i>5</i>
      </div>
      <div className="six">
        <i>6</i>
      </div>
      <div className="seven">
        <i>7</i>
      </div>
      <div className="eight">
        <i>8</i>
      </div>
    </div>
  );
};
