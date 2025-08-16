import React from 'react';
import './About.css';
import architectureImage from '../assets/images/temple-architecture.jpg';

const About = () => {
  const aboutStyle = {
    background: `linear-gradient(135deg, rgba(245, 245, 245, 0.95), rgba(255, 255, 255, 0.9)), url(${architectureImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <section id="about" className="about-section section" style={aboutStyle}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Khatu Shyam Ji</h2>
            <div className="about-story">
              <p className="lead-text">
                Khatu Shyam Ji, also known as Barbarik, was the grandson of Bhima and son of Ghatotkacha. 
                He was a great warrior with unparalleled devotion to Lord Krishna.
              </p>
              
              <p>
                Before the great war of Kurukshetra, Barbarik wished to witness the battle. When Krishna 
                asked him whom he would support, Barbarik replied that he would fight for the losing side 
                to balance the war. Impressed by his devotion and realizing his power could end the war 
                in minutes, Krishna asked for his head as a donation.
              </p>

              <p>
                Barbarik gladly offered his head, and Krishna, pleased with his sacrifice, granted him 
                the boon that he would be worshipped in Kaliyuga by the name of Shyam. The head was 
                buried at Khatu, and thus the temple of Khatu Shyam Ji was established.
              </p>

              <div className="divine-qualities">
                <h3>Divine Qualities</h3>
                <div className="qualities-grid">
                  <div className="quality-item">
                    <div className="quality-icon">🙏</div>
                    <h4>Supreme Devotion</h4>
                    <p>Unwavering dedication to Lord Krishna</p>
                  </div>
                  <div className="quality-item">
                    <div className="quality-icon">⚔️</div>
                    <h4>Valor & Courage</h4>
                    <p>Unmatched warrior skills and bravery</p>
                  </div>
                  <div className="quality-item">
                    <div className="quality-icon">💝</div>
                    <h4>Ultimate Sacrifice</h4>
                    <p>Gave his head for the greater good</p>
                  </div>
                  <div className="quality-item">
                    <div className="quality-icon">🌟</div>
                    <h4>Divine Blessings</h4>
                    <p>Grants wishes of true devotees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="spiritual-card">
              <div className="card-content">
                <h3>श्री बर्बरीक</h3>
                <p className="sanskrit-text">सच्चे भक्त का आदर्श</p>
                <div className="divine-attributes">
                  <span>महान योद्धा</span>
                  <span>कृष्ण भक्त</span>
                  <span>त्याग की मूर्ति</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
