import { useState } from "react";
import "../css/login.style.css";
import "../css/header.style.css";

export const KakaoLogIn = () => {
    const [name,setName]=useState("");

    return (
        <>
            <style>
                { `body {
                background-color: #F6F6F6;
                    }`}
            </style>
            <div className="header-header">
                <p className="header-logo">MANDARAT</p>
            </div>
            <div className="login-container">
                <div className="text">이름/닉네임 설정하기</div>

                <div className="login-inputbox">
                    <div className="login-list">이름/닉네임</div>
                    <input className="login-input"
                            type="text"
                            onChange={(e)=>setName(e.target.value)}
                            value={name}/>
                </div>
                
                <div className="login-btn">
                    <button>회원가입 완료하기</button>
                </div>
            </div>
            <hr/>
        </>
    )
}