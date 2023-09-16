import { Route, Routes } from "react-router-dom";
import { Main } from "./Main";
import { History } from "./History";
import { Profile } from "./Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/history" element={<History/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  );
}

export default App;