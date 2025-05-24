import React from "react";
import Sidebar from "./sidebar";
import Footer from "./footer";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <main className="flex flex-1">
        <Sidebar />
        <div className="w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutAdmin;
