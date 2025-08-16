import React from 'react';
import './HeroBanner.css';
import templeImage from '../assets/images/khatu-shyam-temple.jpg';

const HeroBanner = ({ scrollY }) => {
  const heroStyle = {
    background: `linear-gradient(135deg, rgba(128, 0, 32, 0.8), rgba(92, 0, 17, 0.9)), url(${templeImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <section id="home" className="hero-banner" style={heroStyle}>
      <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="sacred-symbols">
          <div className="om-symbol">ॐ</div>
          <div className="divine-trident">🔱</div>
          <div className="lotus-symbol">🪷</div>
        </div>
        
        <div className="hero-text">
          <div className="divine-blessing">
            <span className="blessing-text">॥ जय श्री श्याम ॥</span>
          </div>
          
          <h1 className="hero-title">
            <span className="sanskrit">श्री खाटू श्याम जी</span>
            <span className="english">Shri Khatu Shyam Ji</span>
          </h1>
          
          <div className="divine-attributes">
            <span className="attribute">बर्बरीक</span>
            <span className="attribute">कृष्ण भक्त</span>
            <span className="attribute">वीर योद्धा</span>
          </div>
          
          <p className="hero-subtitle">
            Experience the divine presence of Barbarik, the eternal devotee of Krishna
          </p>
          <p className="hero-description">
            Welcome to the sacred realm of Khatu Shyam Ji, where devotion meets divinity. 
            Embark on a spiritual journey that transcends the physical world.
          </p>
          
          <div className="sacred-mantra">
            <p className="mantra">"ॐ श्री खाटू श्यामाय नमः"</p>
            <p className="mantra-translation">Om Shri Khatu Shyamaya Namah</p>
          </div>
          
          <div className="hero-buttons">
            <a href="#darshan" className="btn btn-primary">🙏 Virtual Darshan</a>
            <a href="#aarti" className="btn btn-secondary">🪔 Live Aarti</a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroBanner;
