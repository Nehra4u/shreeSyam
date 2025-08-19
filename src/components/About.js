import React from 'react';
import './About.css';
import { useTranslation } from '../hooks/useTranslation';
import architectureImage from '../assets/images/temple-architecture.jpg';

const About = () => {
  const { t } = useTranslation();
  
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
            <h2 className="section-title">{t('about.title')}</h2>
            <div className="about-story">
              <p className="lead-text">
                {t('about.leadText')}
              </p>
              
              <p>
                {t('about.story1')}
              </p>

              <p>
                {t('about.story2')}
              </p>

              <p>
                {t('about.story3')}
              </p>

              <div className="divine-qualities">
                <h3>{t('about.divineQualities')}</h3>
                <div className="qualities-grid">
                  <div className="quality-item">
                    <div className="quality-icon">🙏</div>
                    <h4>{t('about.qualities.devotion.title')}</h4>
                    <p>{t('about.qualities.devotion.desc')}</p>
                  </div>
                  <div className="quality-item">
                    <div className="quality-icon">⚔️</div>
                    <h4>{t('about.qualities.valor.title')}</h4>
                    <p>{t('about.qualities.valor.desc')}</p>
                  </div>
                  <div className="quality-item">
                    <div className="quality-icon">💝</div>
                    <h4>{t('about.qualities.sacrifice.title')}</h4>
                    <p>{t('about.qualities.sacrifice.desc')}</p>
                  </div>
                  <div className="quality-item">
                    <div className="quality-icon">🌟</div>
                    <h4>{t('about.qualities.blessings.title')}</h4>
                    <p>{t('about.qualities.blessings.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="spiritual-card">
              <div className="card-content">
                <h3>{t('about.barbarikTitle')}</h3>
                <p className="sanskrit-text">{t('about.barbarikSubtitle')}</p>
                <div className="divine-attributes">
                  {t('about.barbarikAttributes').map((attr, index) => (
                    <span key={index}>{attr}</span>
                  ))}
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
