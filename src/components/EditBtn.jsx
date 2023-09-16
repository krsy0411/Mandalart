import "../css/editbtn.style.css";

export const EditBtn = ({ btnText, iconId }) => {
  return (
    <>
      <div className="edit-container">
        <a href="/">
          <div className="edit-icon-wrapper">
            <i className={`fas fa-${iconId}`}></i>
          </div>
          <p className="edit-p">{btnText}</p>
        </a>
      </div>
    </>
  );
};
