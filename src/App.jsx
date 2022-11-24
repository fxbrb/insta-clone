import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Layouts from "./pages/Layouts";
import Messages from "./pages/Messages";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layouts darkMode={darkMode} setDarkMode={setDarkMode} />}
          >
            <Route path="" element={<Home />} />
            <Route path="profil" element={<Profil />} />
            <Route path="messages" element={<Messages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
