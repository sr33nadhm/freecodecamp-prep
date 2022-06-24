import explorerData from "./data/explorerData";
import "./App.css";
import Folder from "./components/Folder";

function App() {
  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
