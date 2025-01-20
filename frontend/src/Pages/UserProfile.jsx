import React from "react";
import { FaPhoneAlt, FaEnvelope, FaPen } from "react-icons/fa";
import SideBar from "./../Components/SideBar";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <section className="land-sec home-page-main">
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-0">
            <div className="d-flex">
              <SideBar />
              <div
                className="flex-grow-1 d-flex justify-content-center align-items-start p-4 pt-5"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="profile-modal-container p-4">
                  <div className="profile-modal-header">
                    <h5 className="profile-modal-title">My profile</h5>
                    <button
                      className="profile-modal-close btn-close"
                      aria-label="Close"
                      onClick={() => {
                        const userId = localStorage.getItem("user-id");
                        navigate(`/${userId}/chats-page`);
                      }}
                    ></button>
                  </div>

                  <div className="d-flex flex-column gap-3 text-start">
                    <div className="profile-avatar">JT</div>
                    <div className="profile-info">
                      <h5 className="profile-name fs-4 fw-bold">
                        James Tillapaugh
                      </h5>
                      <div className="d-flex flex-column gap-2 pt-2">
                        <p className="profile-details ">
                          Licensed Home Inspector #67877
                          <br />
                          HIABC Accredited Home Inspector
                        </p>
                        <p className="profile-company ">
                          Bloodhound Home Inspections
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="profile-contact">
                    <div className="profile-contact-item">
                      <FaPhoneAlt size={14} style={{ color: "#6C757D" }} />
                      <p className="profile-contact-text">250.893.2070</p>
                    </div>
                    <div className="profile-contact-item">
                      <FaEnvelope size={14} style={{ color: "#6C757D" }} />
                      <p className="profile-contact-text">
                        JamesTpaugh@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="profile-footer">
                    <button className="change-password-btn">
                      Change password
                    </button>
                    <button className="edit-profile-btn">
                      <FaPen size={14} style={{ color: "#212529" }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
