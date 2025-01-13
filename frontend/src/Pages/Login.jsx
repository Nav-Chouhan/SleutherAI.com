import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../Components/PasswordInput";
import Button from "../Components/before-onboarding/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   if (!validateEmail(email)) {
  //     setError("Please enter a valid email address.");
  //     return;
  //   }
  //   if (!password) {
  //     setError("Please enter the password");
  //     return;
  //   }
  //   setError("");

  //   // call to login API
  //   try {
  //     const response = await axiosInstance.post("/login", {
  //       email: email,
  //       password: password,
  //     });
  //     if (response.data && response.data.accessToken) {
  //       localStorage.setItem("token", response.data.accessToken);
  //       navigate("/dashboard");
  //     }
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.data &&
  //       error.response.data.message
  //     ) {
  //       setError(error.response.data.message);
  //     } else {
  //       setError("An unexpected error occurred. Please try again.");
  //     }
  //   }
  // };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="border px-4 py-5 rounded bg-white">
          <form>
            <h4 className="text-center mb-4">Login</h4>
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-3"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <PasswordInput
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            {error && <p className="text-danger text-xs pb-1">{error}</p>}

            <div className="btn btn-dark w-100">
              <Button text={"Login"} />
            </div>

            <p
              className="text-center mt-4 text-sm-end"
              style={{ fontSize: "0.9rem" }}
            >
              <Link to="#" className="text-primary text-decoration-underline">
                forgot password
              </Link>
            </p>
            <p className="text-center mt-4">
              Not Registered yet?{" "}
              <Link to="/" className="text-primary text-decoration-underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
