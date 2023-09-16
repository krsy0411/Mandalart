import { HistoryBox } from "./components/HistoryBox";
import "./css/history.style.css";
import { Header } from "./components/Header";
// 
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
            </div>
            <hr/>
       </>
    )
}