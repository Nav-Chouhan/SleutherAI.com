import React from "react";
import homeIcon from "../assets/images/home.svg";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { useNavigate } from "react-router";

function SideBar() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("user-id");
  const handleHomeClick = () => {
    navigate(`/${userId}/user`);
  };
  const handleCommentClick = () => {
    navigate("/comments-page");
  };
  return (
    <div className="sidebar bg-dark text-light p-3">
      <ul className="list-unstyled d-flex flex-column gap-4 pt-3">
        <li className="">
          <a
            href="#"
            className="text-light text-decoration-none"
            onClick={handleHomeClick}
          >
            <img
              className=""
              style={{ width: "23px", height: "23px" }}
              src={homeIcon}
              alt=""
            />
            Home
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="text-light text-decoration-none"
            onClick={handleCommentClick}
          >
            <BsChatSquareDotsFill style={{ width: "23px", height: "23px" }} />
            Comments
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
