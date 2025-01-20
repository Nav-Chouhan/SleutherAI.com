import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import ChatHistory from "../Components/ChatHistory";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import CreateCommentModal from "../Components/CreateCommentModal";

const CommentsPage = () => {
  const { setPage } = useOutletContext();
  useEffect(() => {
    setPage("dashboard-pages");
  }, []);
  // State to track which card is expanded
  const [expandedCard, setExpandedCard] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Sample data for comments
  const comments = [
    {
      id: 1,
      category: "Plumbing",
      body: "A leaky tap was observed in the main bathroom.",
      comment:
        "A leaky tap was observed in the main bathroom. We recommend having a qualified plumber repair as soon as possible to reduce the risk of moisture damage.",
    },
    {
      id: 2,
      category: "Electrical",
      body: "A leaky tap was observed in the main bathroom.",
      comment:
        "The electrical panel appears dated but functional. Some labels are missing or unclear, making it difficult to identify circuit breakers.",
    },
    {
      id: 3,
      category: "Electrical",
      body: "The electrical panel appears dated but functional. ",
      comment:
        "The electrical panel appears dated but functional. Some labels are missing or unclear, making it difficult to identify circuit breakers.",
    },
  ];

  // Toggle function for card expansion
  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="land-sec home-page-main">
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-0">
            <div className="d-flex">
              <SideBar />
              <ChatHistory />
              <div className="flex-grow-1 p-4 ps-5 ms-5">
                <div className="search-bar d-flex justify-content-between pb-5">
                  <div className="search-box">
                    <input type="search" placeholder="Search all" />
                  </div>
                  <div
                    className="add-icon"
                    onClick={() => setShowCreateModal(true)}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_40_1928)">
                        <path
                          d="M18 0C8.0744 0 0 8.0744 0 18C0 27.9256 8.0744 36 18 36C27.9256 36 36 27.9256 36 18C36 8.0744 27.9256 0 18 0ZM25.875 19.4999H19.4999V25.875C19.4999 26.7031 18.8281 27.3749 18 27.3749C17.1719 27.3749 16.5001 26.7031 16.5001 25.875V19.4999H10.125C9.29691 19.4999 8.62509 18.8281 8.62509 18C8.62509 17.1719 9.29691 16.5001 10.125 16.5001H16.5001V10.125C16.5001 9.29691 17.1719 8.62509 18 8.62509C18.8281 8.62509 19.4999 9.29691 19.4999 10.125V16.5001H25.875C26.7031 16.5001 27.3749 17.1719 27.3749 18C27.3749 18.8281 26.7031 19.4999 25.875 19.4999Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_40_1928">
                          <rect width="36" height="36" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="comment-text">
                  <div className="accordion" id="commentAccordion">
                    {comments.map((comment) => (
                      <div className="card" key={comment.id}>
                        <div
                          className="card-header"
                          id={`heading${comment.id}`}
                          onClick={() => toggleCard(comment.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <button
                            className="btn btn-link collapsed w-100 text-start text-decoration-none"
                            type="button"
                          >
                            <div className="d-flex justify-content-between gap-3 align-items-center text-left">
                              <span className="category">
                                {comment.category}
                              </span>
                              {expandedCard !== comment.id ? (
                                <span className="comment-body">
                                  {comment.body}
                                </span>
                              ) : null}
                            </div>
                            {expandedCard === comment.id ? (
                              <FaAngleUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </button>
                        </div>

                        <div
                          className={`collapse text-left ${
                            expandedCard === comment.id ? "show" : ""
                          }`}
                          id={`collapse${comment.id}`}
                        >
                          <div className="card-body text-left">
                            {comment.comment}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCreateModal && (
        <div
          className=""
          style={{
            height: "55.7rem",
            width: "100rem",
            top: "4.8rem",
            left: "20rem",
            gap: "0px",
            position: "fixed",
            background: "rgb(135 130 130 / 69%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1050,
          }}
        >
          <CreateCommentModal
            onClose={() => setShowCreateModal(false)}
            onSave={() => {
              // Handle saving the comment
              setShowCreateModal(false);
            }}
          />
        </div>
      )}
    </section>
  );
};

export default CommentsPage;
