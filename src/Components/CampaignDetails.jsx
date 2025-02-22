import React from "react";
import { useParams } from "react-router-dom";
import "./Styles/CampaignDetails.css";

const mockCampaign = {
  id: 1,
  title: "Eco-Friendly Water Bottles",
  description: "Help us create reusable water bottles to save the planet!",
  image: "https://via.placeholder.com/600",
  goal: 10000,
  raised: 4500,
};

function CampaignDetails() {
  const { id } = useParams();
  // Fetch campaign data using ID if connected to backend
  return (
    <div className="campaign-details">
      <img src={mockCampaign.image} alt={mockCampaign.title} />
      <h2>{mockCampaign.title}</h2>
      <p>{mockCampaign.description}</p>
      <div className="funding">
        <p>Goal: ${mockCampaign.goal}</p>
        <p>Raised: ${mockCampaign.raised}</p>
      </div>
    </div>
  );
}

export default CampaignDetails;
