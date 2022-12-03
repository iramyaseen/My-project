import { Route, Routes } from "react-router-dom";
import { TimerMainPage } from "./Pages/TimerMainPage";
import { ListTaskPage } from "./Pages/ListTaskPage";
import { AddNewTaskPage } from "./Pages/AddNewTaskPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TimerMainPage mint="" />} />
      <Route path="/listBar" element={<ListTaskPage />} />
      <Route path="/add-new-task" element={<AddNewTaskPage />} />
    </Routes>
  );
}

export default App;
