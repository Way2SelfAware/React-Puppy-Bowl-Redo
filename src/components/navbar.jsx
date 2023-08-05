import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/newplayerform"}>Add New Player</Link>
    </div>
  );
};
