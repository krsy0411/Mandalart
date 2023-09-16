import { useState, useEffect } from "react";
import "../css/profile.style.css";
import { Header } from "../components/Header";

export const Profile = () => {
    const [name,setName]=useState('홍길동');
    const [pw,setPw]=useState("1234");
    const [confirmPw,setConfirmPw]=useState("1234");
    const [confirmPwUI,setConfirmPwUI]=useState(true);

    useEffect(() => {
        if(pw !== confirmPw){
            setConfirmPwUI(false)
        }
        else {
            setConfirmPwUI(true)
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
            <Header/>
            <div className="profile-container">
                <div className="user-img"><img src="http://via.placeholder.com/175" alt="이미지"/></div>

                <div className="profile-list">이름/닉네임</div>
                <input className="profile-input" 
                        type="text" 
                        onChange={(e)=>setName(e.target.value)} 
                        value={name}/>

                <div className="profile-list">계정</div>
                <div className="profile-email">hong8282@gmail.com</div>

                <div className="profile-list">비밀번호 변경</div>
                <input className="profile-input" 
                        type="password" 
                        onChange={(e)=>setPw(e.target.value)}
                        value={pw}/>

                <div className="profile-list">변경된 비밀번호 확인</div>
                <input className={`profile-input ${confirmPwUI ? '': 'pw-error'}`} 
                        type="password" 
                        onChange={(e)=>setConfirmPw(e.target.value)} 
                        value={confirmPw}/>
                <div style={{textAlign:"center", marginTop:"60px"}}><button className="modify-profile">수정 완료</button></div>
            </div>
            <hr/>
        </>

    )
}