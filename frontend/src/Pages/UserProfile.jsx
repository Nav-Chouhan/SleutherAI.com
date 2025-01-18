import React from "react";
import { FaPhoneAlt, FaEnvelope, FaPen } from "react-icons/fa";
import SideBar from "./../Components/SideBar";
import ChatHistory from "./../Components/ChatHistory";

const UserProfile = () => {
  return (
    <section className="land-sec home-page-main">
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-0">
            <div className="d-flex">
              <SideBar />
              <ChatHistory />
              <div className="d-flex justify-between-center align-item-center">
                <div
                  className="profile-container bg-white shadow rounded p-4"
                  style={{ maxWidth: "500px" }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">My profile</h5>
                    <button
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => console.log("Close Modal")}
                    ></button>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-4">
                    <div
                      className="bg-dark text-white d-flex justify-content-center align-items-center rounded-circle"
                      style={{
                        width: "80px",
                        height: "80px",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      JT
                    </div>
                    <div>
                      <h5 className="mb-1">James Tillapaugh</h5>
                      <p className="text-muted mb-1">
                        Licensed Home Inspector #67877 <br />
                        HIABC Accredited Home Inspector
                      </p>
                      <strong>Bloodhound Home Inspections</strong>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <FaPhoneAlt className="text-muted" />
                      <p className="mb-0">250.893.2070</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <FaEnvelope className="text-muted" />
                      <p className="mb-0">JamesTpaugh@gmail.com</p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center border-top pt-3">
                    <button className="btn btn-link text-decoration-none">
                      Change password
                    </button>
                    <button className="btn btn-light rounded-circle d-flex align-items-center justify-content-center">
                      <FaPen />
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
