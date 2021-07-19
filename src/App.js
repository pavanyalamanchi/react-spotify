import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import PlayBar from "./components/PlayBar";
import HomeCards from "./components/HomeCards";
import Album from "./components/Album";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path="/" exact>
          <HomeCards id={"Chainsmokers"} />
          <HomeCards id={"Imagine Dragons"} />
          <HomeCards id={"Spb"} />
          <HomeCards id={"Sid Sriram"} />
        </Route>
        
        </Switch>
      <PlayBar />
    </Router>
  );
}

export default App;
