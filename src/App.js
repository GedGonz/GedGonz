import Landing from "./components/home/Landing";
import Menu from "./components/nav/Menu";
import Aboutme from "./components/about/Aboutme";
import Proyects from "./components/proyects/Proyects";
import './App.css';
function App() {
  return (
    <div className="App">
      <Menu/>
      <Landing className="mt-10"/>
      <Aboutme />
      <Proyects />
    </div>
  );
}

export default App;
