import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./Components/Layout";
import LandingPage from "./Pages/LandingPage";
import OnboardingPage1 from "./Pages/OnboardingPage1";
import OnboardingPage2 from "./Pages/OnboardingPage2";
import OnboardingPage3 from "./Pages/OnboardingPage3";
import OnboardingPage4 from "./Pages/OnboardingPage4";
import HomePage from "./Pages/HomePage";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/second-step" element={<OnboardingPage1 />} />
          <Route path="/third-step" element={<OnboardingPage2 />} />
          <Route path="/fourth-step" element={<OnboardingPage3 />} />
          <Route path="/fifth-step" element={<OnboardingPage4 />} />
          <Route path="/homepage" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;