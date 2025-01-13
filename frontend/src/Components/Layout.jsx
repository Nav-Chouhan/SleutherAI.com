import React, { useState } from "react";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

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

      // console.log(
      //   sopInput,
      //   paraType,
      //   inspectorType,
      //   conciseness,
      //   firstName,
      //   lastName,
      //   email,
      //   password,
      //   confirmPassword
      // );

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

      if (!response || response.data.error) {
        console.log(response?.data?.error || "An error occurred.");
        return;
      }

      if (response.data.accessToken) {
        console.log("Registered successfully", response.data);
        navigate("/homepage");
      }
    } catch (error) {
      console.error("An error occurred during sign-up:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.log(error.response.data.message);
      }
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
