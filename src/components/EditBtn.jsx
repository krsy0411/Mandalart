import "../css/editbtn.style.css";
// 
export const EditBtn = () => {
    return (
        <>
            <div className="edit-container">
                <a href="#!">
                    <div className="edit-icon-wrapper">
                        <i className="fas fa-pen"></i>
                    </div>
                    <p className="edit-p">현재 만다라트 초기화</p>
                </a>
            </div>
        </>
    )
}