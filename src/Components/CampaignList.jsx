import React from "react";
import CampaignCard from "./CampaignCard";
import "./Styles/CampaignList.css";

const mockCampaigns = [
  {
    id: 1,
    title: "Eco-Friendly Water Bottles",
    description: "Help us create reusable water bottles to save the planet!",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Innovative Solar Panels",
    description: "We need your support to develop next-gen solar technology.",
    image: "https://via.placeholder.com/300",
  },
];

function CampaignList() {
  return (
    <div className="campaign-list">
      {mockCampaigns.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
}

export default CampaignList;
