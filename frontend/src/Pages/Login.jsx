import React, { useEffect } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import PasswordInput from "../Components/PasswordInput";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const { handleLogin, setPage, setProfileModalstate } = useOutletContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setPage("Landing");
  }, []);

  //handle login
  const onSubmit = (data) => {
    handleLogin(data);
    setProfileModalstate(false);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="border px-4 py-5 rounded bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-center mb-4">Login</h4>
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-3"
              tabIndex="2"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
            <PasswordInput
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}

            <div className="navigation">
              <div className="input-btn ">
                <button type="submit" className="gap-2">
                  Login
                </button>
              </div>
            </div>
          </form>
          <p
            className="text-center mt-4 text-sm-end"
            style={{ fontSize: "0.9rem" }}
          >
            <Link
              to={"/user/mailpage"}
              className="text-primary text-decoration-underline"
            >
              forgot password
            </Link>
          </p>
          <p className="text-center mt-4">
            Not Registered yet?{" "}
            <Link to="/" className="text-primary text-decoration-underline">
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Login;
