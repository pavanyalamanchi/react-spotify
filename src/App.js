import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import PlayBar from "./components/PlayBar";
import HomeCards from './components/HomeCards'

function App() {
    return ( 
      <>
      <SideBar />
      <HomeCards id={'91598612'}/>
      <HomeCards id={'119606'}/>
      <PlayBar />
      </>
    );
}

export default App;