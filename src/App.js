import { BarComponents } from "./Components/BarComponents";
import { FooterComponent } from "./Components/FooterComponent";
import { TimerComponent } from "./Components/TimerComponent";

function App() {
  return (
    <div className="container" id="header">
      <BarComponents />
      <TimerComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
