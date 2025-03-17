const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock project data
const projectData = {
  "tech-innovation-hub": {
    title: "Tech Innovation Hub",
    description: "Support for emerging tech startups.",
    goal: 10000,
    raised: 7500,
  },
  "art-revival-project": {
    title: "Art Revival Project",
    description: "Preserve and promote traditional art forms.",
    goal: 5000,
    raised: 3200,
  },
};

// Route to fetch project details
app.get("/api/project/:projectId", (req, res) => {
  const projectId = req.params.projectId;
  const project = projectData[projectId];

  if (!project) {
    return res.status(404).json({ error: "Project Not Found" });
  }

  res.json(project);
});

// Payment route (Mock processing)
app.post("/api/donate", (req, res) => {
  const { projectId, upiId, amount } = req.body;

  if (!projectId || !upiId || !amount) {
    return res.status(400).json({ error: "Invalid payment details" });
  }

  // Mock updating raised amount
  if (projectData[projectId]) {
    projectData[projectId].raised += parseInt(amount);
  }

  res.json({ success: true, message: "Payment successful!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
