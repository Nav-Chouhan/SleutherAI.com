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
import ChatsPage from "./Pages/ChatsPage";
import ResetMailPage from "./Pages/ResetMailPage";
import NotFound from "./Pages/NotFound";
import CommentsPage from "./Pages/CommentsPage";
import PricingPlan from "./Pages/PricingPlan";
import UserProfile from "./Pages/UserProfile";
import Loader from "./Components/Loader";
import AiPreferences from "./Pages/AiPreferences";

const ProtectedRoute = ({ children }) => {
  const { authState } = useAuth();
  if (!authState.isAuthenticated && localStorage.getItem("authToken")) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
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
          <Route path="/pricing" element={<PricingPlan />} />

          {/* Protected Routes */}
          <Route
            path="/:user-id/user"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/:user-id/profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/:user-id/chats-page"
            element={
              <ProtectedRoute>
                <ChatsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/comments-page"
            element={
              <ProtectedRoute>
                <CommentsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ai-preferences"
            element={
              <ProtectedRoute>
                <AiPreferences />
              </ProtectedRoute>
            }
          />

          {/* password reset pages */}
          <Route path="/user/mailpage" element={<ResetMailPage />} />

          <Route
            path="/:user-id/forgot-password"
            element={<ForgetPassword />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
