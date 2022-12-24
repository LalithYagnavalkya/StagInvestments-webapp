import React from "react";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
