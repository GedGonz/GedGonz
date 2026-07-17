import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CvPage from "./components/cv/CvPage";
import useTheme from "./hooks/useTheme";
import { SiteContentProvider } from "./context/SiteContentContext";
import "./App.css";

function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="App">
            <SiteContentProvider>
                <HashRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <HomePage
                                    theme={theme}
                                    toggleTheme={toggleTheme}
                                />
                            }
                        />
                        <Route path="/cv" element={<CvPage />} />
                    </Routes>
                </HashRouter>
            </SiteContentProvider>
        </div>
    );
}

export default App;
