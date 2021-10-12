import Initial from "./components/home/Initial";
import Menu from "./components/nav/Menu";
import Aboutme from "./components/about/Aboutme";
function App() {
  return (
    <div className="App">
      <Menu/>
      <Initial className="mt-10"/>
      <Aboutme />
    </div>
  );
}

export default App;
