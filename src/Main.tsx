import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import About from "./components/About";
import Instructions from "./components/Instructions";
import RecipeContainer from "./components/RecipeContainer";
import { Banner, TextForBanner } from "./components/ContainerStyles";

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
        <Route path="/" element={<RecipeContainer />}/>
        <Route path="/instructions" element={<Instructions />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
