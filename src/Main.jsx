import { Box } from "./components/Box";
import "./css/main.style.css";

// 서브 페이지 화면
export const Main = () => {
  // 중앙 부분들 컬러값
  const COLORS = ['#FCE1DD', '#FAEDDC', '#FDFCE8', '#EBE9E6','#3A4D8F', '#E9F2DF', '#D8D5EC', '#C7D3EC', '#DCEFFC'];

  return (
    <>
      <div className="nav">
        <p className="logo blink">MANDARAT</p>
          <div className="user-icon">
            <a href="{() => false}">  
              <i className="fas fa-user"></i>
            </a>
          </div>
      </div>
      <div className="grid-container">
        {COLORS.map((COLOR,idx)=> {
          return (
            <Box order={idx} color={COLOR} key={idx}/>
          )
        })}
      </div>
    </>
  );
};
