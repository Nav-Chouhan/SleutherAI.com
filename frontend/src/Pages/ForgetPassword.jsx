import React, { useState } from "react";
import PasswordInput from "../Components/PasswordInput";
import Button from "../Components/before-onboarding/Button";

function ForgetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <section className="step-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="content border px-4 py-5 rounded bg-white">
              <h2>Reset your password</h2>

              <fieldset>
                <PasswordInput
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
              </fieldset>
              <fieldset>
                <PasswordInput
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  placeholder="Confirm Password"
                />
              </fieldset>
              <div className="navigation">
                <Button text={"Update"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
