import React from "react";
import NavBar from "../navBar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <NavBar />
        {children}
      </div>
    </>
  );
}
