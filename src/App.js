import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import PlayBar from "./components/PlayBar";
import HomeCards from './components/HomeCards'

function App() {
    return ( 
      <>
      <SideBar />
      <HomeCards id={'Passenger'}/>
      <HomeCards id={'Imagine Dragons'}/>
      <HomeCards id={'Billie Eilish'}/>
      <PlayBar />
      </>
    );
}

export default App;