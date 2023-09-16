import { useState } from "react";
import "../css/login.style.css";
import "../css/header.style.css";
import KakaoLogo from "../assets/kakao.png"

export const LogIn = () => {
    const [email,setEmail]=useState('');
    const [pw,setPw]=useState("");

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
                <div className="text">Log In</div>

                <div className="login-inputbox">
                    <div className="login-list">이메일 주소</div>
                    <input className="login-input"
                            type="text"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}/>
                </div>
                
                <div className="login-inputbox">
                    <div className="login-list">비밀번호</div>
                    <input className="login-input"
                            type="password" 
                            onChange={(e)=>setPw(e.target.value)}
                            value={pw}/>
                </div>

                <div className="button-container">
                    <button className="login-btn">로그인</button>
                    <p>OR</p>
                    <a className="kakao" href="https://kauth.kakao.com/oauth/authorize?client_id=66e775d4c6e22638c91bb9e4fb5e7e97&redirect_uri=http://27.96.135.222:8080/mandarat/user/add&response_type=code">
                        <img src={KakaoLogo} alt="kakao"/></a>
                    <button className="signup-btn">회원가입</button>
                </div>
            </div>
            <hr/>
        </>
    )
}