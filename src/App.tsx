import "./App.css";
import HomePage from "./components/home_page";
import Admin from "./components/admin";
import { Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route element={<HomePage />} path="*" />
        <Route element={<Admin />} path="/admin" />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
