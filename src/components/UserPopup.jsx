import { Link } from "react-router-dom";
import "../css/userpopup.style.css";

export const UserPopup = (props) => {

    return (
        <>
        {props && (             
            <div className="mypage-container">
                <div className="user">
                    <img src="http://via.placeholder.com/60" alt="이미지"/>
                    <div className="name">이름</div>
                    <div className="email">이메일</div>
                </div>
                <Link to="/history" className="custom-link">
                    <div className="a">
                        <img className='history-icon' alt="1"/>
                        만다라트 히스토리
                    </div>
                </Link>
                <Link to="/profile" className="custom-link">
                    <div className="a">
                        <img className='profile-icon'  alt="2"/>
                        회원정보
                    </div>
                </Link>
                <div className="a">
                    <img className='logout-icon' alt="3"/>
                    로그아웃</div>
            </div>
            )}
        </>
    )
}