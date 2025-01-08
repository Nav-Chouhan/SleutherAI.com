import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./Components/Layout";
import LandingPage from "./Pages/LandingPage";
import ONboardingPage1 from "./Pages/ONboardingPage1";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/first-step" element={<ONboardingPage1 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
