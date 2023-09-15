import "../css/editbtn.style.css";

export const EditBtn = () => {
    return (
        <>
            <div className="edit-container">
                <a href="#!">
                    <div className="edit-icon-wrapper">
                        <i className="fas fa-pen"></i>
                    </div>
                    <p className="edit-p">만다라트 편집하기</p>
                </a>
            </div>
        </>
    )
}