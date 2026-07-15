import Landing from "./components/home/Landing";
import Menu from "./components/nav/Menu";
import Aboutme from "./components/about/Aboutme";
import Proyects from "./components/proyects/Proyects";
import Interests from "./components/interests/Interests";
import Footer from "./components/footer/Footer";
import useTheme from "./hooks/useTheme";
import useScrollReveal from "./hooks/useScrollReveal";
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  useScrollReveal();

  return (
    <div className="App">
      <Menu theme={theme} toggleTheme={toggleTheme} />
      <Landing />
      <Aboutme />
      <Proyects />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
