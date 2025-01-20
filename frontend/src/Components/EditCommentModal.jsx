import React from "react";
import { FaTag } from "react-icons/fa";

const EditCommentModal = ({ comment, onClose, onSave }) => {
  return (
    <div className="">
      <div className="edit-comment-modal p-4 d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="modal-title fw-semibold mb-0">
            Edit Generated Comment
          </h5>
          <br />
          <button
            className="btn-close opacity-50"
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>

        <div className="comment-editor mb-4">
          <div
            className="form-control border-0 bg-transparent"
            rows={4}
            style={{ resize: "none" }}
          >
            {`${
              comment ||
              `A leaky tap was observed in the main bathroom. We recommend having a qualified plumber repair as soon as possible 
to reduce the risk of moisture damage.`
            }
              `}
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-end text-end">
          <div className="d-flex align-items-center gap-3 mb-3">
            <FaTag size={14} className="text-muted" />
            <div className="border-0 w-auto p-2">
              <select className="form-select form-select-sm border-0 w-auto">
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Carpentry</option>
                <option>Painting</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <button className="btn btn-dark px-4 rounded-pill" onClick={onSave}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCommentModal;
