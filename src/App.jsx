import { Route, Routes } from "react-router-dom";
import { Main } from "./Main";
import Bars from "./Bars";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Bars />} />
    </Routes>
  );
}

export default App;