import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/login.style.css";
import "../css/header.style.css";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://27.96.135.222:443/mandarat/user/login",
        {
          email: email,
          passwd: pw,
        }
      );
      console.log(response);
      alert("로그인이 완료되었습니다. 메인페이지로 이동합니다.");
      navigate("/main");
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <style>
        {`body {
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
          <input
            className="login-input"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="login-inputbox">
          <div className="login-list">비밀번호</div>
          <input
            className="login-input"
            type="password"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
          />
        </div>

        <div className="button-container">
          <button className="login-btn" onClick={onSubmit}>
            로그인
          </button>
          <Link to="/signup">
            <button className="signup-btn">회원가입</button>
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
};
