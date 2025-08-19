import React, { useState } from 'react';
import './Darshan.css';
import { useTranslation } from '../hooks/useTranslation';
import darshanImage from '../assets/images/deity-darshan.jpeg';

const Darshan = () => {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState('sanctum');
  
  const darshanStyle = {
    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 215, 0, 0.05)), url(${darshanImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const darshanViews = {
    sanctum: {
      title: t('darshan.title'),
      description: t('darshan.subtitle'),
      features: [t('darshan.liveStream'), t('darshan.photoGallery'), t('darshan.blessings')]
    },
    temple: {
      title: t('darshan.title'),
      description: t('darshan.subtitle'),
      features: [t('darshan.liveStream'), t('darshan.photoGallery'), t('darshan.blessings')]
    },
    surroundings: {
      title: t('darshan.title'),
      description: t('darshan.subtitle'),
      features: [t('darshan.liveStream'), t('darshan.photoGallery'), t('darshan.blessings')]
    }
  };

  return (
    <section id="darshan" className="darshan-section section">
      <div className="container">
        <div className="darshan-header">
          <h2 className="section-title">{t('darshan.title')}</h2>
          <p className="section-subtitle">
            {t('darshan.subtitle')}
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
                  <button className="btn btn-primary">{t('darshan.startVirtualTour')}</button>
                  <button className="btn btn-secondary">{t('darshan.view360')}</button>
                </div>
              </div>
            </div>

            <div className="darshan-info">
              <div className="info-card">
                <h4>{t('darshan.howToTakeDarshan')}</h4>
                <ul>
                  <li>{t('darshan.darshanSteps.purifyMind')}</li>
                  <li>{t('darshan.darshanSteps.offerPrayers')}</li>
                  <li>{t('darshan.darshanSteps.seekBlessings')}</li>
                  <li>{t('darshan.darshanSteps.expressGratitude')}</li>
                </ul>
              </div>

              <div className="info-card">
                <h4>{t('darshan.darshanBenefits')}</h4>
                <ul>
                  <li>{t('darshan.benefits.spiritualPeace')}</li>
                  <li>{t('darshan.benefits.removeObstacles')}</li>
                  <li>{t('darshan.benefits.fulfillDesires')}</li>
                  <li>{t('darshan.benefits.divineProtection')}</li>
                </ul>
              </div>

              <div className="info-card">
                <h4>{t('darshan.mantrasForDarshan')}</h4>
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
            "{t('darshan.spiritualNote')}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Darshan;
