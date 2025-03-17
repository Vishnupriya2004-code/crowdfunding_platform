import express from "express";
import Campaign from "../models/Campaign.js";

const router = express.Router();

// Get All Campaigns
router.get("/", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add New Campaign
router.post("/", async (req, res) => {
  const { title, description, goal, image } = req.body;

  try {
    const newCampaign = await Campaign.create({ title, description, goal, image });
    res.status(201).json({ message: "Campaign created successfully!", newCampaign });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
