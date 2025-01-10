import React from "react";
import { CgHomeAlt } from "react-icons/cg";

function SideBar() {
  return (
    <div className="sidebar bg-dark text-light p-3">
      <ul className="list-unstyled">
        <li className="mb-3">
          <a href="#" className="text-light text-decoration-none">
            <i className="fas fa-home me-2"></i>
            Home
          </a>
        </li>
        <li className="mb-3">
          <a href="#" className="text-light text-decoration-none">
            <i className="fas fa-comments me-2"></i>
            Comments
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
