import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.style.css";
import "../css/header.style.css";

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
                    <Link to="/signup"><button className="signup-btn">회원가입</button></Link>
                </div>
            </div>
            <hr/>
        </>
    )
}