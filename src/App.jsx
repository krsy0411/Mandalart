import { Route, Routes } from "react-router-dom";
import { Main } from "./Main";
import { History } from "./History";
import { Profile } from "./Profile";
import { LogIn } from "./LogIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/history" element={<History/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/login" element={<LogIn/>}></Route>
    </Routes>
  );
}

export default App;