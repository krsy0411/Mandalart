import { useState, useEffect } from "react";
import Bars from "./Bars";
import ProgressBar from "./components/ProgressBar";

function BarsComponent() {

    const [completed, setCompleted] = useState(60);

    return (
        <div>
            <Bars 
            goal="다이어트" completed={ completed }
            goal1="세부1" completed1={ completed }
            goal2="세부2" completed2={ completed } 
            goal3="세부3" completed3={ completed } 
            goal4="세부4" completed4={ completed } />
            
            <Bars goal="주식" completed={ completed } 
            goal1="세부1" completed1={ completed }
            goal2="세부2" completed2={ completed } 
            goal3="세부3" completed3={ completed } 
            goal4="세부4" completed4={ completed } />
        </div>
  );
}

export default BarsComponent;