import React from 'react';
import './Trustees.css';

const Trustees = () => {
  const trustees = [
    {
      name: 'श्री पृथ्वी सिंह चौहान',
      designation: 'अध्यक्ष',
      position: 'President',
      image: '/images/parhivi.jpeg',
      description: 'मंदिर समिति के अध्यक्ष'
    },
    {
      name: 'श्री मानवेन्द्र सिंह चौहान',
      designation: 'मंत्री',
      position: 'Secretary',
      image: '/images/manvender.jpeg',
      description: 'मंदिर समिति के मंत्री'
    },
    {
      name: 'श्री कालू सिंह चौहान',
      designation: 'कोषाध्यक्ष',
      position: 'Treasurer',
      image: '/images/kaluRam.jpeg',
      description: 'मंदिर समिति के कोषाध्यक्ष'
    }
  ];

  return (
    <section className="trustees-section">
      <div className="trustees-container">
        <div className="trustees-header">
          <h2 className="trustees-title">
            <span className="divine-text">मंदिर समिति</span>
            <span className="english-text">Temple Committee</span>
          </h2>
          <p className="trustees-subtitle">श्री श्याम मंदिर कमेटी (रजि.)</p>
          <div className="decorative-border"></div>
        </div>

        <div className="trustees-grid">
          {trustees.map((trustee, index) => (
            <div key={index} className="trustee-card">
              <div className="trustee-image-container">
                <div className="trustee-image-frame">
                  <img 
                    src={trustee.image} 
                    alt={trustee.name}
                    className="trustee-image"
                  />
                </div>
                <div className="trustee-overlay">
                  <div className="trustee-designation-badge">
                    <span className="designation-hindi">{trustee.designation}</span>
                    <span className="designation-english">{trustee.position}</span>
                  </div>
                </div>
              </div>
              
              <div className="trustee-info">
                <h3 className="trustee-name">{trustee.name}</h3>
                <p className="trustee-description">{trustee.description}</p>
                <div className="trustee-divider"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="trustees-footer">
          <div className="temple-registration">
            <p className="registration-text">
              <span className="reg-hindi">पंजीकृत संस्था</span>
              <span className="reg-english">Registered Organization</span>
            </p>
          </div>
          
          <div className="blessing-message">
            <p>🙏 श्री श्याम की कृपा से मंदिर का संचालन 🙏</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trustees;
