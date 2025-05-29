import React from "react";
import Sidebar from "../menu/sidebar";
import Footer from "../footer";
import MobileNavbar from "../menu/mobileNavbar";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <MobileNavbar />
      <main className="flex flex-1">
        <Sidebar />
        <div className="w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutAdmin;
