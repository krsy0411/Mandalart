import { useState} from "react";
import { UserPopup } from "../components/UserPopup";
import "../css/header.style.css";

export const Header = () => {
    const [modalOpen, setModalOpen]=useState(false);
    return (
        
        <>
        <div className="header-header">
            {/*  로고 */}
            <p className="header-logo">MANDARAT</p>
                <div className="user-icon" onClick={() => {
                    setModalOpen(!modalOpen);
                }}>
                    <i className="fas fa-user"></i>
                </div>
        </div>
            {/* 모달이 열릴 경우 UserPopup 활성화 */}
            {modalOpen && <UserPopup value={modalOpen}/>}
        </>
    )
}