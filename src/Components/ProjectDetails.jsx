import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Styles/ProjectDetails.css";

import pic6 from "./Styles/pic6.png";
import pic7 from "./Styles/pic7.png";
import pic8 from "./Styles/pic8.jpeg";
import pic10 from "./Styles/pic10.jpeg";
import pic11 from "./Styles/pic11.jpeg";
import pic12 from "./Styles/pic12.jpeg";

const projectData = {
  "tech-innovation-hub": {
    title: "Tech Innovation Hub",
    description:
      "Support the creation of a hub for next-gen innovators. This hub will provide resources, mentorship, and funding for emerging tech startups. The goal is to create an ecosystem where young entrepreneurs can thrive and develop groundbreaking technologies that shape the future.",
    goal: "$10,000",
    raised: "$7,500",
    image: pic6,
  },
  "art-revival-project": {
    title: "Art Revival Project",
    description:
      "Help preserve and promote traditional art forms. Through this initiative, we aim to support artisans, provide training, and ensure that ancient art forms do not fade away. This project also includes exhibitions and online platforms to showcase these art forms globally.",
    goal: "$5,000",
    raised: "$3,200",
    image: pic7,
  },
  "eco-friendly-housing": {
    title: "Eco-Friendly Housing",
    description:
      "Fund sustainable and eco-friendly housing projects. The aim is to build homes using renewable materials and energy-efficient designs, reducing environmental impact and promoting green living for future generations.",
    goal: "$20,000",
    raised: "$12,500",
    image: pic8,
  },
  "community-education-fund": {
    title: "Community Education Fund",
    description:
      "Support education programs in underprivileged areas. This fund will be used to provide scholarships, build schools, and enhance learning materials for children who lack access to quality education.",
    goal: "$15,000",
    raised: "$9,800",
    image: pic10,
  },
  "wildlife-conservation": {
    title: "Wildlife Conservation",
    description:
      "Help save endangered species and preserve habitats. Our efforts include anti-poaching programs, wildlife rehabilitation, and conservation education to ensure the survival of various species.",
    goal: "$25,000",
    raised: "$18,400",
    image: pic11,
  },
  "clean-water-initiative": {
    title: "Clean Water Initiative",
    description:
      "Provide clean and safe drinking water to rural areas. This project focuses on installing filtration systems, setting up water wells, and ensuring access to hygienic water for communities in need.",
    goal: "$12,000",
    raised: "$6,700",
    image: pic12,
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId];

  if (!project) {
    return <h2>Project Not Found</h2>;
  }
  const handleDonate = () => {
    navigate(`/payment?projectId=${encodeURIComponent(projectId)}`);
  };
  
  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} className="project-image" />
      <p>{project.description}</p>
      <p><strong>Goal:</strong> {project.goal}</p>
      <p><strong>Raised:</strong> {project.raised}</p>
      <button className="donate-button" onClick={handleDonate}>Donate Now</button>
    </div>
  );
};

export default ProjectDetails;
