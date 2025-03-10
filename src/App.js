import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import CreateCampaign from "./Components/CreateCampaign";
import About from "./Components/About";
import ProjectDetails from "./Components/ProjectDetails"; // Import Project Details Component
import Payment from "./Components/Payment"; // Import the correct file


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      <Routes>
        <Route path="/" element={<Home showSignup={showSignup} setShowSignup={setShowSignup} showLogin={showLogin} setShowLogin={setShowLogin} />} />
        <Route path="/create" element={<CreateCampaign />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} /> {/* New Route */}
        <Route path="/payment" element={<Payment/>} />
      </Routes>
    </>
  );
};

export default App;
