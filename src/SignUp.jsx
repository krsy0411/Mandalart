import { useState, useEffect } from "react";
import "./css/signup.style.css";
import "./css/header.style.css";

export const SignUp = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pw,setPw]=useState("");
    const [confirmPw,setConfirmPw]=useState("");
    const [confirmPwUI,setConfirmPwUI]=useState(true);
    const [confirmPwMsg,setConfirmPwMsg]=useState("");

    useEffect(() => {
        if(pw !== confirmPw){
            setConfirmPwUI(false)
            setConfirmPwMsg('비밀번호가 일치하지 않습니다.')
        }
        else {
            setConfirmPwUI(true)
            setConfirmPwMsg('')
        }
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [pw, confirmPw]   
)


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
            <div className="signup-container">
                <div className="text">회원가입</div>

                <div className="signup-inputbox">
                    <div className="signup-list">이름/닉네임</div>
                    <input className="signup-input"
                            type="text" 
                            onChange={(e)=>setName(e.target.value)}
                            value={name}/>
                </div>

                <div className="signup-inputbox">
                    <div className="signup-list">이메일 주소</div>
                    <input className="signup-input"
                            type="text"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}/>
                </div>
                
                <div className="signup-inputbox">
                    <div className="signup-list">비밀번호</div>
                    <input className="signup-input"
                            type="password" 
                            onChange={(e)=>setPw(e.target.value)}
                            value={pw}/>
                </div>

                <div className="signup-inputbox">
                    <div className="signup-list">비밀번호 확인</div>
                    <input className={`signup-input ${confirmPwUI ? '': 'signuppw-error'}`} 
                            type="password" 
                            onChange={(e)=>setConfirmPw(e.target.value)}
                            value={confirmPw}/>
                            <div className="signup-pw-error-msg">{confirmPwMsg}</div>
                </div>

                <div className="signup-btn">
                    <button>회원가입 완료하기</button>
                </div>
            </div>
            <hr/>
        </>
    )
}