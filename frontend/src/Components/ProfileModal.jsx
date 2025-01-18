import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaCog,
  FaCrown,
  FaShieldAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const ProfileModal = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className="profile-modal p-3 shadow bg-white"
      style={{ width: "30rem" }}
    >
      <div className="d-flex gap-3 align-items-center mb-3">
        <div
          className="bg-secondary text-white fw-bold"
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          JP
        </div>
        <div>
          <h6 className="mb-1">James Tillapaugh</h6>
          <p className="text-muted m-0">jamesTpaugh@gmail.com</p>
        </div>
      </div>
      <hr />
      <div className="list-group">
        <ul className="list-group">
          <li className="list-group-item border-0 px-0 py-0">
            <button
              onClick={() => {
                const userId = localStorage.getItem("user-id");
                handleNavigation(`/${userId}/profile`);
              }}
              className="btn btn-link text-start w-100 d-flex align-items-center gap-2 fs-5"
            >
              <FaUser className="text-muted" /> Profile
            </button>
          </li>
          <li className="list-group-item border-0 px-0">
            <button
              // onClick={() => handleNavigation("/settings")}
              className="btn btn-link text-start w-100 d-flex align-items-center gap-2 fs-5"
            >
              <FaCog className="text-muted" /> Settings
            </button>
          </li>
          <li className="list-group-item border-0 px-0">
            <button
              onClick={() => handleNavigation("/pricing")}
              className="btn btn-link text-start w-100 d-flex align-items-center gap-2 fs-5"
            >
              <FaCrown className="text-muted" /> Subscription
            </button>
          </li>
          <li className="list-group-item border-0 px-0">
            <button
              // onClick={() => handleNavigation("/privacy-terms")}
              className="btn btn-link text-start w-100 d-flex align-items-center gap-2 fs-5"
            >
              <FaShieldAlt className="text-muted" /> Privacy and Terms
            </button>
          </li>
          <li className="list-group-item border-0 px-0">
            <button
              onClick={() => {
                localStorage.removeItem("authToken");
                localStorage.removeItem("user-id");
                handleNavigation("/login");
              }}
              className="btn btn-link text-start w-100 d-flex align-items-center gap-2 fs-5"
            >
              <FaSignOutAlt className="text-muted" /> Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(ProfileModal);
