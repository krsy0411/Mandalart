import { HistoryBox } from "../components/HistoryBox";
import "../css/history.style.css";
import { Header } from "../components/Header";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from "react-router-dom";

export const History = () => {
    return(
       <>
            <style>
                { `body {
                        background-color: #F6F6F6;
                    }`}
            </style>
            <Header/>
            
            <div className="history-container">
                <div className="my">내 만다라트</div>
                <HistoryBox/>
                <HistoryBox/>
                <div className="history-add">
                    <Link to="/main">
                      <button>
                          <AddOutlinedIcon sx={{fontSize:"40px", marginRight:'20px'}}/>
                          만다라트 추가하기
                      </button>
                    </Link>
                </div>
            </div>
            <hr/>
       </>
    )
}