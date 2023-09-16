import { Route, Routes } from "react-router-dom";
import { Main } from "./views/Main";
import { History } from "./views/History";
import { Profile } from "./views/Profile";
import { LogIn } from "./views/LogIn";
import { SignUp } from "./SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/history" element={<History/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/login" element={<LogIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;