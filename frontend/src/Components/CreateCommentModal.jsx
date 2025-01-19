import React, { useState } from "react";
import { FaTag } from "react-icons/fa";

const CreateCommentModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  return (
    <div className="create-comment-modal p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="modal-title fw-semibold mb-0">Create new comment</h5>
        <button
          className="btn-close opacity-50"
          onClick={onClose}
          aria-label="Close"
        ></button>
      </div>

      <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
        Save your frequently used comments for future use. Sleuther learns your
        writing style and check your saved comments when generating new
        comments.
      </p>

      <div className="comment-form">
        <div className="mb-3">
          <input
            type="text"
            className="form-control border-0 bg-light"
            placeholder="Comment title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <small className="text-muted" style={{ fontSize: "12px" }}>
            Titles help you search and find your comments later.
          </small>
        </div>

        <div className="mb-4">
          <textarea
            className="form-control border-0 bg-light"
            placeholder="Enter comment"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ resize: "none" }}
          />
        </div>

        <div className="d-flex align-items-center gap-2 mb-4">
          <FaTag size={14} className="text-muted" />
          <select
            className="form-select form-select-sm border-0 bg-light"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="">Choose section folder</option>
            <option value="SITE">SITE</option>
            <option value="ROOF">ROOF</option>
            <option value="EXTERIOR">EXTERIOR</option>
            <option value="STRUCTURE">STRUCTURE</option>
            <option value="ELECTRICAL">ELECTRICAL</option>
            <option value="PLUMBING">PLUMBING</option>
          </select>
        </div>

        <div className="text-end">
          <button
            className="btn btn-light rounded-pill px-4"
            onClick={onSave}
            disabled={!title || !comment || !selectedSection}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCommentModal;
