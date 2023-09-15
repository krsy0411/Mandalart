import { Route, Routes } from "react-router-dom";
import { Main } from "./Main";
import Bars from "./Bars";
import BarsComponent from "./BarsComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BarsComponent />} />
    </Routes>
  );
}

export default App;