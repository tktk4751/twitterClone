import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";
import Widget from "./components/widget/Widget";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Timeline />

      <Widget />
    </div>
  );
}

export default App;
