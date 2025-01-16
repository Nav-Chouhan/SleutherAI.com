import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function PasswordInput({ value, onChange, placeholder }) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div
      className="form-control d-flex align-items-center password-input-container input-group "
      style={{ paddingLeft: "0px", paddingTop: "0px", paddingBottom: "0px" }}
    >
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder}
        className="form-control border-0 bg-transparent  "
      />
      {isShowPassword ? (
        <FaRegEye
          size={18}
          className="text-primary cursor-pointer"
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEyeSlash
          size={18}
          className="text-muted cursor-pointer"
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
}
export default PasswordInput;
