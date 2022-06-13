import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import About from "./components/About";
import RecipeContainer from "./components/RecipeContainer";
import { Banner, TextForBanner } from "./styles";

const Main = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    marginTop: "10px",
    paddingRight: "10px",
  };
  return (
    <BrowserRouter>
      <Banner>
        <TextForBanner>[...Recipe Finder]</TextForBanner>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link style={linkStyle} to="/about">
          About
        </Link>
      </Banner>
      <Routes>
        <Route path="/" element={<RecipeContainer />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
