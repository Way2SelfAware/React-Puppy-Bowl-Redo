import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Addplayerform } from "./components/addplayerform";
import { Allplayers } from "./components/allplayers";
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
        </Routes>
      </div>
    </>
  );
}

export default App;
