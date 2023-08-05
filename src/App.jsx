import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Addplayerform } from "./components/addplayerform";
import { Allplayers } from "./components/allplayers";
import { Searchbar } from "./components/searchbar";
import { PlayerDetails } from "./components/playerdetails"; // Correct import name

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-section">
        <Routes>
          <Route path="/" element={<Allplayers />} />
          <Route path="/newplayerform" element={<Addplayerform />} />
          <Route path="/searchbar" element={<Searchbar />} />
          <Route path="/playerdetails/:id" element={<PlayerDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
