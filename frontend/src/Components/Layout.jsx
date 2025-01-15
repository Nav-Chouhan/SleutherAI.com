import React, { useState } from "react";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const navigate = useNavigate();
  // State declarations
  const [step, setStep] = useState(1);
  const [page, setPage] = useState("landing");
  const [sopInput, setSopInput] = useState("");
  const [paraType, setParaType] = useState("Paragraph");
  const [inspectorType, setInspectorType] = useState("We");
  const [conciseness, setConciseness] = useState("Very concise");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setAuthState } = useAuth(); //auth state from context

  // Handle signup function
  const handleSignUp = async () => {
    try {
      if (!firstName || !lastName || !password || !email) {
        console.log("Please provide all required fields.");
        return;
      }

      if (password !== confirmPassword) {
        console.log("Passwords do not match.");
        return;
      }

      const response = await axiosInstance.post("/api/user", {
        sop: sopInput,
        format: paraType,
        reference: inspectorType,
        conciseness,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });

      if (response.data?.error) {
        console.error(response.data.error);
        return;
      }

      if (response.data.user.accessToken) {
        localStorage.setItem("authToken", response.data.user.accessToken);
        setAuthState({
          isAuthenticated: true,
          token: response.data.accessToken,
          user: response.data.user,
        });
        navigate("/homepage");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      console.error(errorMessage);
    }
  };

  return (
    <div>
      <Header page={page} />
      <main>
        <Outlet
          context={{
            step,
            setStep,
            page,
            setPage,
            setSopInput,
            paraType,
            setParaType,
            setInspectorType,
            conciseness,
            setConciseness,
            firstName,
            setFirstName,
            lastName,
            setLastName,
            email,
            setEmail,
            password,
            setPassword,
            confirmPassword,
            setConfirmPassword,
            handleSignUp,
          }}
        />
      </main>
    </div>
  );
}

export default Layout;
