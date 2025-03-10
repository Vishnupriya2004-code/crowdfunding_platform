import React, { useState ,useEffect} from "react";
import CampaignCard from "./CampaignCard";
import "./Styles/Home.css"; // Make sure this CSS file exists and is correctly linked
import pic6 from "./Styles/pic6.png"; 
import pic7 from "./Styles/pic7.png";
import pic8 from "./Styles/pic8.jpeg";
import pic10 from "./Styles/pic10.jpeg";
import pic11 from "./Styles/pic11.jpeg";
import pic12 from "./Styles/pic12.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    setPopupVisible(true); // Show the popup on page load
  }, []);
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className={`home ${isPopupVisible ? "popup-active" : ""}`}>
      {/* Hero Section */}
      <section className="hero">
      <div className="hero-container">
      {/* Left Hero Content */}
        <div className="hero-content">
          <h1>Welcome to GiveYour's</h1>
          <p>
            Transform ideas into reality. Join a global community of changemakers who
            believe in building a better future—one project at a time.
          </p>
          <div className="hero-highlight">
            <p>
              Over <strong>10,000+ successful campaigns</strong> funded with $5M+ raised worldwide!
            </p>
          </div>
          <div className="hero-actions">
            <button className="cta-btn primary">Start a Campaign</button>
            <button className="cta-btn secondary">Discover Projects</button>
          </div>
          <div className="hero-footer">
            <p>Be part of the movement. Start your journey today!</p>
          </div>
        </div>
        </div>
      </section>

      {/* Registration Popup */}
{isPopupVisible && (
  <>
    {/* Overlay */}
    <div
      className="popup-overlay"
      onClick={togglePopup} // Close popup when clicking outside
    ></div>

    {/* Popup */}
    <div
      className="register-popup"
      onClick={(e) => e.stopPropagation()} // Prevent click inside popup from closing it
    >
      <h2>Register</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          alert("Form submitted successfully!");
        }}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit" className="cta-btn primary">
          Submit
        </button>
      </form>
     
    </div>
  </>
)}

{/* Featured Campaigns */}
<section className="campaigns">
  <h2>Our Campaigns</h2>
  {/* Intro Section */}
  <div className="campaign-intro">
    <p>
      Join us in making a difference! Explore our featured campaigns, each aimed at bringing positive change to communities and the environment. Every contribution counts.
    </p>
  </div>
  <div className="campaign-container">
    <button
      className="scroll-left"
      onClick={() => {
        document.querySelector(".campaign-grid").scrollBy({
          left: -350,
          behavior: "smooth",
        });
      }}
    >
      &lt;
    </button>
    <div className="campaign-grid">
      <div className="campaign-card">
      <img src={pic6} alt="Tech Innovation Hub" />
        <h3>Tech Innovation Hub</h3>
        <p>Support the creation of a hub for next-gen innovators.</p>
        <p><strong>Goal:</strong> $10,000</p>
        <p><strong>Raised:</strong> $7,500</p>
        <Link to={`/project/tech-innovation-hub`}>
  <button className="view-project-btn">View Project</button>
</Link>
      </div>
      <div className="campaign-card">
      <img src={pic7} alt="Art Revival Project" />
        <h3>Art Revival Project</h3>
        <p>Help preserve and promote traditional art forms.</p>
        <p><strong>Goal:</strong> $5,000</p>
        <p><strong>Raised:</strong> $3,200</p>
        <Link to={`/project/art-revival-project`}>
  <button className="view-project-btn">View Project</button>
</Link>
      </div>
      <div className="campaign-card">
      <img src={pic8} alt="Eco-Friendly Housing" />
        <h3>Eco-Friendly Housing</h3>
        <p>Fund sustainable and eco-friendly housing projects.</p>
        <p><strong>Goal:</strong> $20,000</p>
        <p><strong>Raised:</strong> $12,500</p>
        <Link to={`/project/eco-friendly-housing`}>
  <button className="view-project-btn">View Project</button>
</Link>
      </div>
      <div className="campaign-card">
      <img src={pic10} alt="Community Education Fund" />
        <h3>Community Education Fund</h3>
        <p>Support education programs in underprivileged areas.</p>
        <p><strong>Goal:</strong> $15,000</p>
        <p><strong>Raised:</strong> $9,800</p>
        <Link to={`/project/community-education-fund`}>
  <button className="view-project-btn">View Project</button>
</Link>
      </div>
      <div className="campaign-card">
      <img src={pic11} alt="Wildlife Conservation" />
        <h3>Wildlife Conservation</h3>
        <p>Help save endangered species and preserve habitats.</p>
        <p><strong>Goal:</strong> $25,000</p>
        <p><strong>Raised:</strong> $18,400</p>
        <Link to={`/project/wildlife-conservation`}>
  <button className="view-project-btn">View Project</button>
</Link>
      </div>
      <div className="campaign-card">
      <img src={pic12} alt="Clean Water Initiative" />
        <h3>Clean Water Initiative</h3>
        <p>Provide clean and safe drinking water to rural areas.</p>
        <p><strong>Goal:</strong> $12,000</p>
        <p><strong>Raised:</strong> $6,700</p>
        <Link to={`/project/clean-water-initiative`}>
  <button className="view-project-btn">View Project</button>
</Link>
      </div>
    </div>
    <button
      className="scroll-right"
      onClick={() => {
        document.querySelector(".campaign-grid").scrollBy({
          left: 350,
          behavior: "smooth",
        });
      }}
    >
      &gt;
    </button>
  </div>
</section>

{/* Combined Section for Testimonials, CTA, and Newsletter */}
<section className="combined-section">

  {/* Testimonials Section */}
  <div className="testimonials">
    <h2>What Our Backers Say</h2>
    <div className="testimonial-container">
      <div className="testimonial">
        <p>"GiveYour's made it possible for my project to reach a global audience. The support was overwhelming!"</p>
        <h4>- Alex Johnson</h4>
      </div>
      <div className="testimonial">
        <p>"I found an amazing community of backers who believed in my idea and helped bring it to life!"</p>
        <h4>- Sarah Thompson</h4>
      </div>
    </div>
  </div>

  {/* Call to Action Section */}
  <div className="cta-section">
    <h2>Have a project idea?</h2>
    <p>Join GiveYour's and turn your vision into reality today.</p>
    <button className="cta-btn">Learn More</button>
  </div>

  {/* Newsletter Signup */}
  <div className="newsletter">
    <h2>Stay Updated</h2>
    <p>Subscribe to our newsletter for the latest crowdfunding opportunities and success stories.</p>
    <form className="newsletter-form">
      <input type="email" placeholder="Enter your email" required />
      <button type="submit" className="cta-btn">Subscribe</button>
    </form>
  </div>

  </section>
{/* Blog Page */}
<section className="blog">
  <h2>Latest Blogs</h2>
  <div className="blog-container">
    <div className="blog-post">
      <h3>How to Start a Successful Campaign</h3>
      <p>Learn the key steps to launching a campaign that captures attention and secures funding.</p>
      <button className="read-more">Read More</button>
    </div>
    <div className="blog-post">
      <h3>Top 10 Crowdfunding Success Stories</h3>
      <p>Discover inspiring success stories of projects that made a global impact.</p>
      <button className="read-more">Read More</button>
    </div>
    <div className="blog-post">
      <h3>Effective Marketing Strategies for Crowdfunding</h3>
      <p>Explore marketing tactics to boost visibility and attract more backers to your campaign.</p>
      <button className="read-more">Read More</button>
    </div>
    <div className="blog-post">
      <h3>Choosing the Right Platform for Your Campaign</h3>
      <p>Compare popular crowdfunding platforms and find the one that suits your needs.</p>
      <button className="read-more">Read More</button>
    </div>
    <div className="blog-post">
      <h3>Common Mistakes to Avoid in Crowdfunding</h3>
      <p>Understand the pitfalls that can lead to failed campaigns and how to prevent them.</p>
      <button className="read-more">Read More</button>
    </div>
    <div className="blog-post">
      <h3>Legal and Financial Considerations in Crowdfunding</h3>
      <p>Get insights into the legal and financial aspects to ensure compliance and transparency.</p>
      <button className="read-more">Read More</button>
    </div>
  </div>
</section>



<footer class="footer">
  <div class="footer-content">
    <div class="footer-section">
      <h3>About Us</h3>
      <p>We provide high-quality blogs on various topics, keeping you informed and engaged with the latest trends.</p>
    </div>
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <div class="social-links">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    &copy; 2025 YourWebsite | All Rights Reserved.
  </div>
</footer>
</div>
      
  );
};

export default Home;
