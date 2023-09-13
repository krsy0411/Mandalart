import { Route, Routes } from "react-router-dom";
import { Main } from "./Main";
import { MyPage } from "./MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/mypage" element={<MyPage/>} />
    </Routes>
  );
}

export default App;
