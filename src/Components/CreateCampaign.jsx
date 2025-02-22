import React, { useState } from "react";
import "./Styles/CreateCampaign.css";

function CreateCampaign() {
  const [form, setForm] = useState({ title: "", description: "", goal: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Campaign created:", form);
  };

  return (
    <div className="create-campaign">
      <h2>Create a New Campaign</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Campaign Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="goal"
          placeholder="Funding Goal"
          value={form.goal}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateCampaign;
