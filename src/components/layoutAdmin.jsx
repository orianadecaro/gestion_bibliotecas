import React from "react";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Navbar from "./navbar";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="flex flex-col justify-between max-h-screen min-h-screen">
      <Navbar />
      <main className="flex flex-1">
        <Sidebar />
        <div className="w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutAdmin;
