import React from 'react';
import './HeroBanner.css';
import { useTranslation } from '../hooks/useTranslation';
import templeImage from '../assets/images/khatu-shyam-temple.jpg';

const HeroBanner = ({ scrollY }) => {
  const { t } = useTranslation();
  
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
            <span className="blessing-text">{t('hero.blessing')}</span>
          </div>
          
          <h1 className="hero-title">
            <span className="sanskrit">{t('hero.title')}</span>
            {/* <span className="english">{t('hero.titleEnglish')}</span> */}
          </h1>
          
          <div className="divine-attributes">
            {t('hero.attributes').map((attribute, index) => (
              <span key={index} className="attribute">{attribute}</span>
            ))}
          </div>
          
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          
          <div className="sacred-mantra">
            <p className="mantra">"{t('hero.mantra')}"</p>
            <p className="mantra-translation">{t('hero.mantraTranslation')}</p>
          </div>
          
          <div className="hero-buttons">
            <a href="#darshan" className="btn btn-primary">{t('hero.virtualDarshan')}</a>
            <a href="#aarti" className="btn btn-secondary">{t('hero.liveAarti')}</a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>{t('hero.scrollToExplore')}</p>
      </div>
    </section>
  );
};

export default HeroBanner;
