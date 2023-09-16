import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/userpopup.style.css";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
// 

export const UserPopup = (props) => {
    const navigate=useNavigate();

    const goHome = ()=> {
        navigate('/');
        alert("로그아웃 되었습니다.")
    }

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
                        <AppsOutlinedIcon className="popup-icon"/>
                        내 만다라트
                    </div>
                </Link>
                <Link to="/profile" className="custom-link">
                    <div className="a">
                        <PersonIcon className="popup-icon"/>
                        회원정보
                    </div>
                </Link>
                <div className="logout" onClick={goHome}>
                    <PowerSettingsNewOutlinedIcon className="popup-icon"/>
                    로그아웃</div>
            </div>
            )}
        </>
    )
}