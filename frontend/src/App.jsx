import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Layout from "./Components/Layout";
import LandingPage from "./Pages/LandingPage";
import OnboardingPage1 from "./Pages/OnboardingPage1";
import OnboardingPage2 from "./Pages/OnboardingPage2";
import OnboardingPage3 from "./Pages/OnboardingPage3";
import OnboardingPage4 from "./Pages/OnboardingPage4";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import ForgetPassword from "./Pages/ForgetPassword";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { authState } = useAuth();

  return authState.isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/second-step" element={<OnboardingPage1 />} />
          <Route path="/third-step" element={<OnboardingPage2 />} />
          <Route path="/fourth-step" element={<OnboardingPage3 />} />
          <Route path="/fifth-step" element={<OnboardingPage4 />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/homepage"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ProtectedRoute>
                <ForgetPassword />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
