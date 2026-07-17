import Landing from "../components/home/Landing";
import Menu from "../components/nav/Menu";
import Aboutme from "../components/about/Aboutme";
import Proyects from "../components/proyects/Proyects";
import Interests from "../components/interests/Interests";
import Footer from "../components/footer/Footer";
import useScrollReveal from "../hooks/useScrollReveal";

export default function HomePage({ theme, toggleTheme }) {
    useScrollReveal();

    return (
        <>
            <Menu theme={theme} toggleTheme={toggleTheme} />
            <Landing />
            <Aboutme />
            <Proyects />
            <Interests />
            <Footer />
        </>
    );
}
