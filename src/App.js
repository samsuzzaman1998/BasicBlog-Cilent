import "./App.css";

// ========== Pages ========
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import LogInPage from "./Pages/LogInPage/LogInPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

// For React-Router =======
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="login" element={<LogInPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
