import { MandalartList } from "./components/mypage/MandalartList"
import { Saying } from "./components/mypage/Saying"
import "./css/mypage.style.css"
//import { Link } from "react-router-dom"

export const MyPage = () => {
    return (
        <>
            <style>
                { `body {
                    display: flex; 
                    align-items: flex-start; 
                    padding: 0px; 
                    background-color: #F0F1F5;
                }`}
            </style>

            <div className="logo"><b>Logo</b></div>
            <Saying/>
            <button>추가하기</button>
            <MandalartList/>
            <MandalartList/>
        </>
    )
}

