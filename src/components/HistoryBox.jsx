import "../css/historybox.style.css";
import { MdDeleteOutline } from "react-icons/md";

export const HistoryBox = () => {
    return (
        <div className="historybox-container">
            <span className="historybox-content">멋진사람</span>
            <span className="delete"><MdDeleteOutline style={{fontSize: "40", marginRight: "20px", }}/></span>
        </div>
    )
}