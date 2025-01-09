import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./Components/Layout";
import LandingPage from "./Pages/LandingPage";
import OnboardingPage1 from "./Pages/ONboardingPage1";
import OnboardingPage2 from "./Pages/OnboardingPage2";
import OnboardingPage3 from "./Pages/OnboardingPage3";
import OnboardingPage4 from "./Pages/OnboardingPage4";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/first-step" element={<OnboardingPage1 />} />
          <Route path="/second-step" element={<OnboardingPage2 />} />
          <Route path="/third-step" element={<OnboardingPage3 />} />
          <Route path="/fourth-step" element={<OnboardingPage4 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
