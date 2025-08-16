import React, { useState, useEffect } from 'react';
import './LiveAarti.css';
import aartiImage from '../assets/images/temple-aarti.jpg';

const LiveAarti = () => {
  const [isLive, setIsLive] = useState(false);
  
  const streamStyle = {
    background: `linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(128, 0, 32, 0.4)), url(${aartiImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  const [currentTime, setCurrentTime] = useState(new Date());
  const [flames, setFlames] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Generate animated flame particles
    const flameArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      size: 0.5 + Math.random() * 0.5
    }));
    setFlames(flameArray);

    return () => clearInterval(timer);
  }, []);

  const aartiSchedule = [
    { name: 'Mangla Aarti', time: '05:30', description: 'Morning prayers to awaken the divine' },
    { name: 'Shringar Aarti', time: '08:00', description: 'Decorating the deity with flowers and ornaments' },
    { name: 'Rajbhog Aarti', time: '12:00', description: 'Offering the midday meal to the deity' },
    { name: 'Sandhya Aarti', time: '19:00', description: 'Evening prayers as the sun sets' },
    { name: 'Shayan Aarti', time: '21:30', description: 'Night prayers before the deity rests' }
  ];

  const getNextAarti = () => {
    const now = currentTime.getHours() * 60 + currentTime.getMinutes();
    for (let aarti of aartiSchedule) {
      const [hours, minutes] = aarti.time.split(':').map(Number);
      const aartiTime = hours * 60 + minutes;
      if (aartiTime > now) {
        return aarti;
      }
    }
    return aartiSchedule[0]; // Next day's first aarti
  };

  const nextAarti = getNextAarti();

  return (
    <section id="aarti" className="live-aarti-section section">
      <div className="container">
        <div className="aarti-header">
          <h2 className="section-title">Live Aarti</h2>
          <p className="section-subtitle">
            Join thousands of devotees in divine worship and spiritual connection
          </p>
        </div>

        <div className="aarti-content">
          <div className="live-stream-container">
            <div className="stream-viewer" style={streamStyle}>
              <div className="divine-flames">
                {flames.map(flame => (
                  <div 
                    key={flame.id}
                    className="flame"
                    style={{
                      animationDelay: `${flame.delay}s`,
                      animationDuration: `${flame.duration}s`,
                      transform: `scale(${flame.size})`
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="stream-overlay">
                <div className="divine-light"></div>
                <div className="stream-content">
                  <div className="deity-silhouette">
                    <div className="divine-aura"></div>
                    <h3>श्री खाटू श्याम जी</h3>
                  </div>
                  
                  <div className="stream-status">
                    <div className={`live-indicator ${isLive ? 'active' : ''}`}>
                      <span className="pulse"></span>
                      {isLive ? 'LIVE' : 'OFFLINE'}
                    </div>
                  </div>

                  <div className="stream-controls">
                    <button className="btn btn-primary" onClick={() => setIsLive(!isLive)}>
                      {isLive ? 'Join Live Aarti' : 'View Schedule'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="aarti-info">
              <div className="next-aarti">
                <h4>🕉️ Next Aarti</h4>
                <div className="aarti-details">
                  <h3>{nextAarti.name}</h3>
                  <p className="aarti-time">{nextAarti.time}</p>
                  <p className="aarti-desc">{nextAarti.description}</p>
                </div>
              </div>

              <div className="devotee-count">
                <div className="count-display">
                  <span className="count-number">12,847</span>
                  <span className="count-label">Devotees Online</span>
                </div>
                <div className="floating-hearts">
                  <span className="heart">❤️</span>
                  <span className="heart">🙏</span>
                  <span className="heart">❤️</span>
                </div>
              </div>
            </div>
          </div>

          <div className="aarti-schedule">
            <h3>Daily Aarti Schedule</h3>
            <div className="schedule-grid">
              {aartiSchedule.map((aarti, index) => (
                <div key={index} className={`schedule-item ${aarti === nextAarti ? 'next' : ''}`}>
                  <div className="schedule-time">{aarti.time}</div>
                  <div className="schedule-details">
                    <h4>{aarti.name}</h4>
                    <p>{aarti.description}</p>
                  </div>
                  <div className="schedule-icon">🔔</div>
                </div>
              ))}
            </div>
          </div>

          <div className="spiritual-benefits">
            <h3>Benefits of Aarti Participation</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🕉️</div>
                <h4>Spiritual Purification</h4>
                <p>Cleanses the mind and soul of negative energies</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💫</div>
                <h4>Divine Blessings</h4>
                <p>Receives grace and protection from Khatu Shyam Ji</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🌟</div>
                <h4>Inner Peace</h4>
                <p>Brings tranquility and harmony to daily life</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🙏</div>
                <h4>Community Connection</h4>
                <p>Joins you with thousands of fellow devotees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAarti;
