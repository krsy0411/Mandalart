import { Route, Routes } from "react-router-dom";
import { Main } from "./Main";
import { FillIn } from "./FillIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/fill-in" element={<FillIn />} />
    </Routes>
  );
}

export default App;
