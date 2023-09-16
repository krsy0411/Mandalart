import { useState } from "react";
import logo from './assets/MANDARAT.png';
import user from './assets/person.png';
import { UserPopup } from "./components/UserPopup";
import { HistoryBox } from "./components/HistoryBox";
import "./css/history.style.css";

export const History = () => {
    const [modalOpen, setModalOpen]=useState(false);
    return(
       <>
            <style>
                { `body {
                        background-color: #F6F6F6;
                    }`}
            </style>
            <div className="header">
                <img className='logo' src={logo} alt="logo"/>
                <img className='user-icon' src={user} alt="user"  onClick={()=>setModalOpen(!modalOpen)}/>
            </div>
            {modalOpen && <UserPopup value={modalOpen}/>}
            
            <div className="history-container">
                <div className="my">내 만다라트</div>
                <HistoryBox/>
                <HistoryBox/>
            </div>
            <hr/>
       </>
    )
}