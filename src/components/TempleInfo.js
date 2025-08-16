import React from 'react';
import './TempleInfo.css';

const TempleInfo = () => {
  return (
    <section id="temple" className="temple-info-section section">
      <div className="container">
        <div className="temple-content">
          <div className="temple-header">
            <h2 className="section-title">The Sacred Temple</h2>
            <p className="section-subtitle">
              A divine abode where miracles happen and prayers are answered
            </p>
          </div>

          <div className="temple-details">
            <div className="temple-history">
              <h3>Temple History</h3>
              <p>
                The Khatu Shyam Temple is located in the village of Khatu in Sikar district of Rajasthan. 
                The temple was built in 1027 AD and has been a center of devotion for over a thousand years. 
                The temple houses the sacred head of Barbarik, which was buried here by Lord Krishna himself.
              </p>
              <p>
                The temple has been renovated several times, with the most recent major renovation completed 
                in the 20th century. Despite the changes, the sanctity and spiritual power of the place 
                remain unchanged, drawing millions of devotees from across the world.
              </p>
            </div>

            <div className="temple-architecture">
              <h3>Architecture & Design</h3>
              <div className="architecture-features">
                <div className="feature">
                  <div className="feature-icon">🏛️</div>
                  <div className="feature-content">
                    <h4>Rajasthani Architecture</h4>
                    <p>Traditional Rajasthani design with intricate carvings and beautiful domes</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🎨</div>
                  <div className="feature-content">
                    <h4>Artistic Elements</h4>
                    <p>Exquisite paintings and sculptures depicting scenes from Krishna's life</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🌟</div>
                  <div className="feature-content">
                    <h4>Sacred Sanctum</h4>
                    <p>The main sanctum houses the divine head with gold and silver decorations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="temple-timings">
              <h3>Temple Timings</h3>
              <div className="timings-grid">
                <div className="timing-card">
                  <h4>Morning Darshan</h4>
                  <div className="time-slot">
                    <span className="time">5:30 AM - 12:00 PM</span>
                    <span className="ritual">Mangla Aarti at 5:30 AM</span>
                  </div>
                </div>
                <div className="timing-card">
                  <h4>Evening Darshan</h4>
                  <div className="time-slot">
                    <span className="time">4:00 PM - 9:00 PM</span>
                    <span className="ritual">Sandhya Aarti at 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="special-occasions">
              <h3>Special Occasions</h3>
              <div className="occasions-list">
                <div className="occasion">
                  <h4>Falgun Mela</h4>
                  <p>The grand annual fair during Falgun month attracts millions of devotees</p>
                </div>
                <div className="occasion">
                  <h4>Janmashtami</h4>
                  <p>Krishna's birthday is celebrated with great devotion and special ceremonies</p>
                </div>
                <div className="occasion">
                  <h4>Ekadashi</h4>
                  <p>Special prayers and extended darshan hours on every Ekadashi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleInfo;
