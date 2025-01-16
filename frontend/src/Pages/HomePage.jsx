import React, { useEffect } from "react";
import SideBar from "../Components/SideBar";
import SleutherLogo from "../assets/images/Frame (4).svg";
import { useOutletContext } from "react-router-dom";
import ChatHistory from "../Components/ChatHistory";

function HomePage({}) {
  const { setPage } = useOutletContext();
  useEffect(() => {
    setPage("dashboard-pages");
  }, []);
  return (
    <section className="land-sec home-page-main">
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-0">
            <div className="d-flex">
              <SideBar />
              <ChatHistory />

              <div className="main-content flex-grow-1 p-4">
                <div className="text-center">
                  <div className="logo mb-3">
                    <img
                      src={SleutherLogo}
                      alt="Sleuther Logo"
                      className="img-fluid w-auto"
                    />
                  </div>
                  <h3>Welcome, [User Name]</h3>
                  <p>
                    Start creating professional inspection comments instantly.
                  </p>
                  <div className="m-auto">
                    <div className="input-box-text">
                      <div className="lable-text text-center m-auto">
                        Simply type the issue, the location, and let Sleuther
                        handle the rest.
                      </div>
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="E.g.,  Leaky faucet in the kitchen (add specifics if needed)"
                      />
                      <div className="input-btn">
                        <a href="#">GENERATE</a>
                      </div>
                      <div className="bottom-text d-flex">
                        <p
                          className="tip-text"
                          style={{
                            paddingLeft: "8px",
                            paddingTop: "0px",
                            fontSize: "12px",
                            lineHeight: "16.34px",
                            textAlign: "left",
                          }}
                        >
                          <span>Pro Tip:</span> The more you share, the sharper
                          the details Sleuther adds.
                        </p>
                        <p className="tip-text">
                          <a href="#">More pro tips</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
