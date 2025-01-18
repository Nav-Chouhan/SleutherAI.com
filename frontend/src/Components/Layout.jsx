import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const publicRoutes = [
    "/",
    "/login",
    "/user/mailpage",
    "/second-step",
    "/third-step",
    "/fourth-step",
    "/fifth-step",
    "/pricing",
  ];
  // Modal
  const [profileModalState, setProfileModalstate] = useState({
    isShown: false,
    type: "add",
    profiledata: null,
  });

  // State declarations
  const [step, setStep] = useState(1);
  const [page, setPage] = useState("landing");
  const [sopInput, setSopInput] = useState("");
  const [paraType, setParaType] = useState("Paragraph");
  const [inspectorType, setInspectorType] = useState("We");
  const [conciseness, setConciseness] = useState("Very concise");
  const [promptInput, setPromptInput] = useState("");
  const { setAuthState } = useAuth(); //auth state from context

  //auth api call
  const authResponse = async (authToken, userId) => {
    try {
      if (!authToken) {
        console.log("auth token is not present.");
        return;
      }
      const response = await axiosInstance.get(`/api/user/${userId}`, {
        headers: {
          Authorization: authToken,
        },
      });
      return response;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      console.error("Error in handleSignUp:", errorMessage);
    }
  };

  // Auth redirect function
  useEffect(() => {
    const authenticateUser = async () => {
      const authToken = localStorage.getItem("authToken");
      const userId = localStorage.getItem("user-id");

      if (authToken && userId) {
        const response = await authResponse(authToken, userId);

        if (response?.data?.error) {
          console.error("API Error:", response.data.error);
          navigate("/login");
          return;
        }

        if (response?.data?.user?.id) {
          setAuthState({
            isAuthenticated: true,
            token: response.data.user.authToken,
            user: response.data.user,
          });

          if (pathname === "/" || pathname === "/login") {
            navigate(`/${response.data.user.id}/user`);
          }
        }
      } else {
        if (!publicRoutes.includes(pathname)) {
          navigate("*");
        }
      }
    };

    authenticateUser();
  }, [pathname, navigate]);

  // Handle signup function
  const handleSignUp = async (formData) => {
    const { firstName, lastName, email, password, confirmPassword } = formData;
    try {
      if (!firstName || !lastName || !password || !email) {
        console.log("Please provide all required fields.");
        return;
      }

      if (password !== confirmPassword) {
        console.log("Passwords do not match.");
        return;
      }

      const payload = {
        sop: sopInput,
        format: paraType,
        reference: inspectorType,
        conciseness,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };

      const response = await axiosInstance.post("/api/user", payload);

      if (response.data?.error) {
        console.error("API Error:", response.data.error);
        return;
      }

      if (response.data.user?.accessToken) {
        localStorage.setItem("authToken", response.data.user.accessToken);
        localStorage.setItem("user-id", response.data.user.id);
        setAuthState({
          isAuthenticated: true,
          token: response.data.user.accessToken,
          user: response.data.user,
        });
        navigate(`/${response.data.user.id}/user`);
      } else {
        console.error("No access token received.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      console.error("Error in handleSignUp:", errorMessage);
    }
  };

  // Handle login function
  const handleLogin = async (formData) => {
    const { email, password } = formData;
    try {
      if (!password || !email) {
        console.log("Please provide all required fields.");
        return;
      }

      const payload = {
        email,
        password,
      };

      const response = await axiosInstance.post(
        "/api/user/access-token",
        payload
      );

      if (response.data?.error) {
        console.error("API Error:", response.data.error);
        return;
      }

      if (response.data.user?.accessToken) {
        localStorage.setItem("authToken", response.data.user.accessToken);
        localStorage.setItem("user-id", response.data.user.id);
        setAuthState({
          isAuthenticated: true,
          token: response.data.user.accessToken,
          user: response.data.user,
        });
        navigate(`/${response.data.user.id}/user`);
      } else {
        console.error("No access token received.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      console.error("Error in handleSignUp:", errorMessage);
    }
  };

  return (
    <div>
      <Header
        page={page}
        profileModalState={profileModalState}
        setProfileModalstate={setProfileModalstate}
      />

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
            handleSignUp,
            handleLogin,
            promptInput,
            setPromptInput,
          }}
        />
      </main>
    </div>
  );
}

export default Layout;
