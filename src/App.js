import { Route, Routes } from "react-router-dom";
import { TimerMainPage } from "./Pages/TimerMainPage";
import { ListTaskPage } from "./Pages/ListTaskPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<TimerMainPage />} />
      <Route path="/listBar" element={<ListTaskPage />} />
    </Routes>
  );
}

export default App;
