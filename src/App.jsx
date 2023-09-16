import { Route, Routes } from "react-router-dom";
import { Main } from "./views/Main";
import { History } from "./views/History";
import { Profile } from "./views/Profile";
import { LogIn } from "./views/LogIn";
import { SignUp } from "./views/SignUp";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/main" element={<Main />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
