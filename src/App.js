import "./App.css";
import Header from "./Header";
import Story from "./Story";
import "./styles/header.css";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <table className="story-container">
          <tbody>
            <Story />
            <Story />
            <Story />
            <Story />
          </tbody>
        </table>
      </Router>
    </>
  );
}

export default App;
