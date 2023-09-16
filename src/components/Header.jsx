import { useState} from "react";
import logo from '../assets/MANDARAT.png';
import user from '../assets/person.png';
import { UserPopup } from "../components/UserPopup";
import { Link } from "react-router-dom";


export const Header = () => {
    const [modalOpen, setModalOpen]=useState(false);
    return (
        
        <>
        <div className="header" style={{marginBottom:"50px"}}>
                <Link to='/'><img className='logo' src={logo} alt="logo"/></Link>
                <img className='user-icon' src={user} alt="user"  onClick={()=>setModalOpen(!modalOpen)}/>
        </div>
            {modalOpen && <UserPopup value={modalOpen}/>}
        </>
    )
}