import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function Layout() {
  let [step, setStep] = useState(1);
  let [page, setPage] = useState("landing");
  return (
    <div>
      <Header page={page} />
      <main>
        <Outlet context={{ step, setStep, page, setPage }} />
      </main>
    </div>
  );
}

export default Layout;
