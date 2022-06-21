import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Room from "./routes/Room";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
