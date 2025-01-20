import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";

function ResetMailPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [serverMessage, setServerMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSendMail = async (data) => {
    const { email } = data;
    setServerMessage("");
    setErrorMessage("");

    try {
      const response = await axiosInstance.post(
        "/api/user/send-reset-password-mail",
        {
          email,
        }
      );

      if (response.data?.message) {
        setServerMessage("Password reset email sent successfully.");
        reset();
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Failed to send reset email.";
      setErrorMessage(errorMsg);
    }
  };

  return (
    <section className="step-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="content border px-4 py-5 rounded bg-white">
              <h2 className="center">Reset your password</h2>
              <form onSubmit={handleSubmit(handleSendMail)}>
                <fieldset>
                  <input
                    placeholder="Email"
                    className={`form-control mb-3 ${
                      errors.email ? "is-invalid" : ""
                    }`}
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
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </fieldset>
                {serverMessage && (
                  <p className="text-success">{serverMessage}</p>
                )}
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <div className="navigation">
                  <div className="input-btn ">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="gap-2"
                      onClick={(e) => handleSubmit(e)}
                    >
                      {isSubmitting ? "Sending..." : "Send Mail"}{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetMailPage;
