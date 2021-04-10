import "./App.css";
import Header from "./Components/Header";
import Stories from "./pages/Stories";
import Comments from "./pages/Comments";
import "./styles/header.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Stories path={"/news"} />
          </Route>
          <Route path="/news">
            <Stories path={"/news"} />
          </Route>
          <Route path="/newest">
            <Stories path={"/newest"} />
          </Route>
          <Route path="/ask">
            <Stories path={"/ask"} />
          </Route>
          <Route path="/show">
            <Stories path="/show" />
          </Route>
          <Route path="/item">
            <Comments />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
