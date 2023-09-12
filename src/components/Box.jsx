import { useEffect } from "react";
import "../css/box.style.css";

export const Box = () => {
  // 처음 마운팅 된 시점
  useEffect(() => {
    const centerToggle = document.querySelector(".center");
    const items = document.querySelectorAll(".box-container div");

    centerToggle.addEventListener("click", () => {
      if (!centerToggle.classList.contains("main-active")) {
        centerToggle.classList.add("main-active");

        items[0].style.transform = "translate(6em,0)";
        items[1].style.transform = "translate(6em,6em)";
        items[2].style.transform = "translate(0,6em)";
        items[3].style.transform = "translate(-6em,6em)";
        items[4].style.transform = "translate(-6em,0)";
        items[5].style.transform = "translate(-6em,-6em)";
        items[6].style.transform = "translate(0,-6em)";
        items[7].style.transform = "translate(6em,-6em)";
      } else {
        items.forEach((item) => {
          item.style.transform = "translate(0,0)";
        });
        centerToggle.classList.remove("main-active");
      }
    });
  }, []);

  return (
    <div className="box-container">
      <div className="one">
        <i>1</i>
      </div>
      <div className="two">
        <i>2</i>
      </div>
      <div className="three">
        <i>3</i>
      </div>
      <div className="four">
        <i>4</i>
      </div>
      <div className="five">
        <i>5</i>
      </div>
      <div className="six">
        <i>6</i>
      </div>
      <div className="seven">
        <i>7</i>
      </div>
      <div className="eight">
        <i>8</i>
      </div>
      <div className="center">
        <i>C</i>
      </div>
    </div>
  );
};
