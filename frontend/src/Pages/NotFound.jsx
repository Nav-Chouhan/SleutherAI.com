import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" style={{ color: "#007bff", textDecoration: "underline" }}>
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
