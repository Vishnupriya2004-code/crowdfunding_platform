import React from "react";
import "./Styles/CreateCampaign.css"; 
import banner1 from "./Styles/banner1.png";

const CreateCampaign = () => {
  return (
    <div className="page-container">
      {/* Banner Image */}
      <img 
        src={banner1} 
        alt="Campaign Banner" 
        className="banner-image"
      />

      <h1>Create Your Campaign</h1>
      <p>Start your journey by filling out the details below.</p>
      
      <form className="campaign-form">
        <label>Title:</label>
        <input type="text" placeholder="Enter campaign title" required />

        <label>Description:</label>
        <textarea placeholder="Describe your campaign" required />

        <label>Goal Amount:</label>
        <input type="number" placeholder="Enter goal amount" required />

        <label>Image URL:</label>
        <input type="text" placeholder="Enter image URL (optional)" />

        <button type="submit" className="submit-btn">Create Campaign</button>
      </form>
    </div>
  );
};

export default CreateCampaign;
