import { useState } from "react";
import "./css/login.style.css";
import "./css/header.style.css";

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

                <div className="login-btn">
                    <button>로그인</button>
                    <div className="kakao">OR</div>
                    <div className="kakao">카카오톡으로 계속하기</div>
                    <div className="signup-btn">회원가입</div>
                </div>
            </div>
            <hr/>
        </>
    )
}