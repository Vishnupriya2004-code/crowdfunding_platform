import React from "react";
import { Routes, Route } from "react-router-dom";
import CampaignList from "../Components/CampaignList";
import CreateCampaign from "../Components/CreateCampaign";
import CampaignDetails from "../Components/CampaignDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CampaignList />} />
      <Route path="/campaigns" element={<CampaignList />} />
      <Route path="/create" element={<CreateCampaign />} />
      <Route path="/campaign/:id" element={<CampaignDetails />} />
    </Routes>
  );
}

export default AppRoutes;
