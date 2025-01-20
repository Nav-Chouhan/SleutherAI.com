import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { IoMdArrowBack } from "react-icons/io";
import PasswordInput from "./../Components/PasswordInput";

const ForgetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.post(
        `/api/user/6789fe5b2f3fe75275338df8/reset-password`,
        {
          password,
          confirmPassword,
        }
      );

      if (response.data.success) {
        setSuccess("Password reset successful!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError(response.data.message || "Failed to reset password");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred while resetting password"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/user/mailpage");
  };

  return (
    <section className="land-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="back-icon" onClick={handleBack}>
              <IoMdArrowBack className="flow-icon flow-icon-dark" />
            </div>
            <div className="reset-mail-container">
              <div className="reset-mail-content">
                <h2>Reset Password</h2>
                <p className="description">
                  Please enter your new password below
                </p>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <label>New Password</label>
                    <PasswordInput
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter new password"
                    />
                  </fieldset>

                  <fieldset>
                    <label>Confirm Password</label>
                    <PasswordInput
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                    />
                  </fieldset>

                  <div className="navigation">
                    <button
                      type="submit"
                      disabled={loading}
                      className={loading ? "loading" : ""}
                    >
                      {loading ? "Resetting..." : "Reset Password"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
