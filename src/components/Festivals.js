import React, { useState, useEffect } from 'react';
import './Festivals.css';
import festivalImage from '../assets/images/temple-festival.jpg';

const Festivals = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const festivalsStyle = {
    background: `linear-gradient(135deg, rgba(245, 245, 245, 0.9), rgba(255, 255, 255, 0.8)), url(${festivalImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate floating particles for celebration effect
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 0.5 + Math.random() * 1
    }));
    setParticles(particleArray);

    // Auto-rotate festival cards
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % festivals.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const festivals = [
    {
      name: 'Falgun Mela',
      date: 'February - March',
      duration: '15 Days',
      description: 'The grandest celebration at Khatu Shyam Temple, attracting millions of devotees from across the world.',
      highlights: ['Grand Processions', 'Cultural Programs', 'Mass Feeding', 'Spiritual Discourses'],
      significance: 'Celebrates the divine love and devotion of Khatu Shyam Ji',
      color: 'linear-gradient(135deg, #FF6B6B, #FF8E53)'
    },
    {
      name: 'Janmashtami',
      date: 'August - September',
      duration: '2 Days',
      description: 'Celebrating the birth of Lord Krishna with special prayers, decorations, and midnight celebrations.',
      highlights: ['Midnight Aarti', 'Krishna Leela', 'Jhankis', 'Devotional Songs'],
      significance: 'Honors the birth of Lord Krishna, the beloved deity of Barbarik',
      color: 'linear-gradient(135deg, #4ECDC4, #44A08D)'
    },
    {
      name: 'Kartik Purnima',
      date: 'October - November',
      duration: '3 Days',
      description: 'A sacred festival of lights and devotion, marked by special prayers and community celebrations.',
      highlights: ['Deep Daan', 'Night Vigil', 'Community Feast', 'Spiritual Gatherings'],
      significance: 'Symbolizes the victory of light over darkness',
      color: 'linear-gradient(135deg, #F093FB, #F5576C)'
    },
    {
      name: 'Ekadashi',
      date: 'Monthly',
      duration: '1 Day',
      description: 'Monthly observance with special prayers, fasting, and extended darshan hours.',
      highlights: ['Extended Darshan', 'Special Prayers', 'Community Fasting', 'Spiritual Talks'],
      significance: 'A day of spiritual purification and divine connection',
      color: 'linear-gradient(135deg, #667eea, #764ba2)'
    }
  ];

  return (
    <section id="festivals" className="festivals-section" style={festivalsStyle}>
      <div className="floating-particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              transform: `scale(${particle.size})`
            }}
          ></div>
        ))}
      </div>

      <div className="container">
        <div className="festivals-header">
          <h2 className="section-title">Sacred Festivals</h2>
          <p className="section-subtitle">
            Experience the divine celebrations that bring devotees together in joy and devotion
          </p>
        </div>

        <div className="festivals-showcase">
          <div className="festival-cards">
            {festivals.map((festival, index) => (
              <div
                key={index}
                className={`festival-card ${index === activeCard ? 'active' : ''}`}
                style={{ '--card-color': festival.color }}
                onClick={() => setActiveCard(index)}
              >
                <div className="card-background">
                  <div className="celebration-effects">
                    <div className="sparkle sparkle-1"></div>
                    <div className="sparkle sparkle-2"></div>
                    <div className="sparkle sparkle-3"></div>
                  </div>
                </div>

                <div className="card-content">
                  <div className="festival-header">
                    <h3>{festival.name}</h3>
                    <div className="festival-meta">
                      <span className="festival-date">{festival.date}</span>
                      <span className="festival-duration">{festival.duration}</span>
                    </div>
                  </div>

                  <p className="festival-description">{festival.description}</p>

                  <div className="festival-highlights">
                    <h4>Festival Highlights</h4>
                    <div className="highlights-grid">
                      {festival.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-tag">{highlight}</span>
                      ))}
                    </div>
                  </div>

                  <div className="festival-significance">
                    <h4>Spiritual Significance</h4>
                    <p style={{color:'white'}}>{festival.significance}</p>
                  </div>

                  <div className="card-actions">
                    <button className="btn btn-primary">Learn More</button>
                    <button className="btn btn-secondary">Set Reminder</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="festival-navigation">
            {festivals.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === activeCard ? 'active' : ''}`}
                onClick={() => setActiveCard(index)}
              ></button>
            ))}
          </div>
        </div>

        <div className="celebration-gallery">
          <h3>Festival Moments</h3>
          <div className="gallery-grid">
            <div className="gallery-item large">
              <div className="gallery-placeholder">
                <div className="gallery-icon">🎉</div>
                <h4>Grand Procession</h4>
                <p>Thousands of devotees participate in the sacred procession</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="gallery-icon">🎭</div>
                <h4>Cultural Programs</h4>
                <p>Traditional performances and spiritual discourses</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="gallery-icon">🍽️</div>
                <h4>Community Feast</h4>
                <p>Free meals served to all devotees with love</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="gallery-icon">🪔</div>
                <h4>Divine Illumination</h4>
                <p>Temple decorated with thousands of lights</p>
              </div>
            </div>
          </div>
        </div>

        <div className="upcoming-events">
          <h3>Upcoming Celebrations</h3>
          <div className="events-timeline">
            <div className="timeline-item">
              <div className="timeline-date">
                <span className="month">Mar</span>
                <span className="day">15</span>
              </div>
              <div className="timeline-content">
                <h4>Falgun Mela Begins</h4>
                <p>The grand 15-day celebration starts with special prayers</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">
                <span className="month">Aug</span>
                <span className="day">26</span>
              </div>
              <div className="timeline-content">
                <h4>Janmashtami Celebration</h4>
                <p>Midnight celebration of Lord Krishna's birth</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">
                <span className="month">Nov</span>
                <span className="day">12</span>
              </div>
              <div className="timeline-content">
                <h4>Kartik Purnima</h4>
                <p>Festival of lights with special evening prayers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festivals;
