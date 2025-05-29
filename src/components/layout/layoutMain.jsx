import React from "react";
import Navbar from "../menu/navbar";
import Footer from "../footer";

const LayoutMain = ({ children }) => {
  return (
    <div className="flex flex-col justify-between max-h-screen min-h-screen">
      <Navbar />
      <main
        className="flex flex-1"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutMain;
