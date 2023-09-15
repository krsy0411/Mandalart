import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar";

function Bars(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div>
            <span onClick={ handleToggle }>
                <ProgressBar goal={props.goal} completed={ props.completed }/>
            </span>
            <ul style={{ display: isOpen ? "block" : "none" }}>
                <ProgressBar goal={props.goal1} completed={ props.completed1 }/>
                <ProgressBar goal={props.goal2} completed={ props.completed2 }/>
                <ProgressBar goal={props.goal3} completed={ props.completed3 }/>
                <ProgressBar goal={props.goal4} completed={ props.completed4 }/>
            </ul>
        </div>
  );
}

export default Bars;