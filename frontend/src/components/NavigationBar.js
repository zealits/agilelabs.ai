import React, { useState } from "react";
import "./NavigationBar.css";

function NavigationBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
    setShowDropdown(true);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">AgileLabs</a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            All Categories
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Start Request
          </a>
        </li>
        <li className="nav-item dropdown" onMouseEnter={() => toggleDropdown(1)} onMouseLeave={closeDropdown}>
          <a href="#" className="nav-link">
            Popular Services
          </a>
          {showDropdown && activeDropdown === 1 && (
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="mega-menu-section">
                  <h5>POPULAR CATEGORIES</h5>
                  <ul>
                    <li>
                      <a href="#">
                        <span className="menu-icon">🛠️</span> Software Development
                      </a>
                      <p>Get custom-built software tools & solutions</p>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-icon">📈</span> Digital Marketing
                      </a>
                      <p>Get services and products seen & promoted online</p>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-icon">🔍</span> Search Engine Optimization
                      </a>
                      <p>Get better rankings on search engines</p>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-icon">📰</span> Public Relations
                      </a>
                      <p>Get better brand reputation and relationships</p>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-icon">🎥</span> Video Production
                      </a>
                      <p>Get filming & post-production of video content</p>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-icon">💡</span> Paid Ads & SEM
                      </a>
                      <p>Get targeted ads to reach your audience</p>
                    </li>
                  </ul>
                </div>
                <div className="mega-menu-section">
                  <h5>TRENDING NOW</h5>
                  <ul>
                    <li>
                      <a href="#">
                        <span className="menu-icon">🤖</span> Artificial Intelligence
                      </a>
                      <p>Get the power of AI to optimize your operations</p>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-icon">🎉</span> Event Planner and Marketing
                      </a>
                      <p>Get your next event handled by event experts</p>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-icon">📱</span> Social Media Marketing
                      </a>
                      <p>Get social media profiles to lead to more sales</p>
                    </li>
                  </ul>
                </div>
                <div className="mega-menu-section">
                  <h5>GROW YOUR BUSINESS</h5>
                  <ul>
                    <li>
                      <a href="#">
                        <span className="menu-icon">👩‍🎤</span> Influencer & Talent
                      </a>
                      <p>Get celebrities to promote your offerings</p>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-icon">📞</span> Outbound Sales & SDR
                      </a>
                      <p>Get new leads from your new clients</p>
                    </li>
                    <li>
                      <a href="#">
                        <span className="menu-icon">📝</span> Content Marketing
                      </a>
                      <p>Get content created to boost buzz and sales</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" onClick={() => toggleDropdown(2)}>
            Resources & Support
          </a>
          {showDropdown && activeDropdown === 2 && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="#">Option 1</a>
              </li>
              <li className="dropdown-item">
                <a href="#">Option 2</a>
              </li>
              {/* Add more dropdown items here */}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
