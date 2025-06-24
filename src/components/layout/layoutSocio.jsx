import React from "react";
import Footer from "../footer";
import NavbarSocio from "../menu/navbarSocio";

const LayoutSocio = ({ children }) => {
  return (
    <div className="flex flex-col justify-between max-h-screen min-h-screen">
      <NavbarSocio />
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

export default LayoutSocio;
