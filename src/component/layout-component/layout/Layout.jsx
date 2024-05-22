import { Box } from "@mui/material";
import React from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import "./style.css";

function Layout(props) {
  const { children } = props;
  return (
    <Box className="layoutContainer">
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
}

export default Layout;
