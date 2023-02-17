import React from "react";
import NavBar from "../navBar/NavBar";
import { Container } from "./Layot.styled";

export default function Layout({ children }) {
  return (
    <>
      <Container>
        <NavBar />
        {children}
      </Container>
    </>
  );
}
