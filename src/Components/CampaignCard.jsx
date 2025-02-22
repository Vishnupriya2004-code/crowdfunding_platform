import React from "react";
import "./Styles/CampaignCard.css";

const CampaignCard = ({ title, description, goal, raised }) => {
  return (
    <div className="campaign-card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{goal}</p>
        <p>{raised}</p>
      </div>
    </div>
  );
};

export default CampaignCard;
