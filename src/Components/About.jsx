import React from "react";
import "./Styles/About.css"; // Ensure you create and link the CSS file

const About = () => {
  return (
    <div className="page-container">
      <h1>About GiveYour's</h1>
      <p>
        GiveYour's is a powerful and user-friendly crowdfunding platform designed to help 
        individuals, nonprofits, and businesses raise funds for meaningful causes. Whether 
        you're supporting a medical emergency, education, social impact projects, or creative 
        ideas, GiveYour's provides a secure and seamless way to reach potential donors.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to empower people by providing a transparent and effective fundraising 
        platform that bridges the gap between those in need and compassionate donors. 
        We believe that financial constraints should never be a barrier to achieving dreams 
        or overcoming challenges.
      </p>

      <h2>Why Choose GiveYour's?</h2>
      <ul>
        <li><strong>Easy to Use:</strong> Our platform makes it simple to create and manage fundraising campaigns.</li>
        <li><strong>Secure Transactions:</strong> We ensure all donations and transactions are protected.</li>
        <li><strong>Global Reach:</strong> Connect with donors from around the world to support your cause.</li>
        <li><strong>Low Fees:</strong> We offer one of the lowest service fees to maximize your fundraising potential.</li>
        <li><strong>Transparency:</strong> Every campaign and transaction is monitored to ensure authenticity.</li>
      </ul>

      <h2>How It Works</h2>
      <ol>
        <li><strong>Create a Campaign:</strong> Share your story and set your fundraising goal.</li>
        <li><strong>Spread the Word:</strong> Share your campaign with friends, family, and social media networks.</li>
        <li><strong>Receive Donations:</strong> Collect contributions from donors worldwide.</li>
        <li><strong>Achieve Your Goal:</strong> Use the funds to support your cause and make a difference.</li>
      </ol>

      <h2>Join Us</h2>
      <p>
        At GiveYour's, we believe in the power of community and generosity. Whether you're 
        looking to fundraise or support someone in need, our platform provides the tools 
        to create a real impact. Start your journey today and help bring positive change to the world!
      </p>

      <p><strong>Together, we can make a difference.</strong></p>
    </div>
  );
};

export default About;
