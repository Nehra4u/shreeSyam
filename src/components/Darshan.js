import React, { useState } from 'react';
import './Darshan.css';
import darshanImage from '../assets/images/deity-darshan.jpeg';

const Darshan = () => {
  const [activeView, setActiveView] = useState('sanctum');
  
  const darshanStyle = {
    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 215, 0, 0.05)), url(${darshanImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const darshanViews = {
    sanctum: {
      title: 'Main Sanctum',
      description: 'Experience the divine presence of Khatu Shyam Ji in the main sanctum',
      features: ['Sacred Head of Barbarik', 'Gold & Silver Decorations', 'Divine Aura']
    },
    temple: {
      title: 'Temple Complex',
      description: 'Explore the beautiful architecture and sacred spaces of the temple',
      features: ['Rajasthani Architecture', 'Prayer Halls', 'Sacred Courtyard']
    },
    surroundings: {
      title: 'Temple Surroundings',
      description: 'Discover the peaceful environment around the holy temple',
      features: ['Devotee Facilities', 'Peaceful Gardens', 'Pilgrimage Path']
    }
  };

  return (
    <section id="darshan" className="darshan-section section">
      <div className="container">
        <div className="darshan-header">
          <h2 className="section-title">Virtual Darshan</h2>
          <p className="section-subtitle">
            Take a spiritual journey through the sacred spaces of Khatu Shyam Temple
          </p>
        </div>

        <div className="darshan-content">
          <div className="darshan-controls">
            {Object.entries(darshanViews).map(([key, view]) => (
              <button
                key={key}
                className={`darshan-btn ${activeView === key ? 'active' : ''}`}
                onClick={() => setActiveView(key)}
              >
                {view.title}
              </button>
            ))}
          </div>

          <div className="darshan-viewer">
            <div className="virtual-darshan" style={darshanStyle}>
              <div className="darshan-placeholder">
                <div className="darshan-icon">🏛️</div>
                <h3>{darshanViews[activeView].title}</h3>
                <p style={{color:'white'}}>{darshanViews[activeView].description}</p>
                
                <div className="darshan-features">
                  {darshanViews[activeView].features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>

                <div className="darshan-actions">
                  <button className="btn btn-primary">Start Virtual Tour</button>
                  <button className="btn btn-secondary">360° View</button>
                </div>
              </div>
            </div>

            <div className="darshan-info">
              <div className="info-card">
                <h4>🙏 How to Take Darshan</h4>
                <ul>
                  <li>Purify your mind and heart with devotion</li>
                  <li>Offer your prayers with complete faith</li>
                  <li>Seek blessings for yourself and loved ones</li>
                  <li>Express gratitude for divine grace</li>
                </ul>
              </div>

              <div className="info-card">
                <h4>✨ Darshan Benefits</h4>
                <ul>
                  <li>Spiritual peace and mental clarity</li>
                  <li>Removal of obstacles and difficulties</li>
                  <li>Fulfillment of righteous desires</li>
                  <li>Divine protection and blessings</li>
                </ul>
              </div>

              <div className="info-card">
                <h4>📿 Mantras for Darshan</h4>
                <div className="mantras">
                  <p className="mantra">"ॐ श्री खाटू श्यामाय नमः"</p>
                  <p className="mantra-translation">Om Shri Khatu Shyamaya Namah</p>
                  <p className="mantra">"जय श्री श्याम"</p>
                  <p className="mantra-translation">Jai Shri Shyam</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="darshan-footer">
          <p className="spiritual-note">
            "True darshan happens when the devotee's heart connects with the divine. 
            Distance is no barrier for sincere devotion."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Darshan;
