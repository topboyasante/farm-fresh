import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function AppLayout() {
  return (
    <div className="max-w-screen-md mx-auto border-x min-h-screen">
      <Navbar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
