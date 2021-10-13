import Initial from "./components/home/Initial";
import Menu from "./components/nav/Menu";
import Aboutme from "./components/about/Aboutme";
import Proyects from "./components/proyects/Proyects";
import './App.css';
function App() {
  return (
    <div className="App">
      <Menu/>
      <Initial className="mt-10"/>
      <Aboutme />
      <Proyects />
    </div>
  );
}

export default App;
