import React, { useState, forwardRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = forwardRef((props, ref) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  return (
    <div
      className="form-control d-flex align-items-center password-input-container input-group"
      style={{ paddingLeft: "0", paddingTop: "0", paddingBottom: "0" }}
    >
      <input
        ref={ref}
        type={isShowPassword ? "text" : "password"}
        placeholder={props.placeholder}
        className="form-control border-0 bg-transparent"
        {...props}
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
});

export default PasswordInput;
