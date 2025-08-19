import React from 'react';
import './TempleInfo.css';
import { useTranslation } from '../hooks/useTranslation';

const TempleInfo = () => {
  const { t } = useTranslation();
  
  return (
    <section id="temple" className="temple-info-section section">
      <div className="container">
        <div className="temple-content">
          <div className="temple-header">
            <h2 className="section-title">{t('templeInfo.title')}</h2>
            <p className="section-subtitle">
              {t('templeInfo.subtitle')}
            </p>
          </div>

          <div className="temple-details">
            <div className="temple-history">
              <h3>{t('templeInfo.history')}</h3>
              <p>
                {t('templeInfo.historyText1')}
              </p>
              <p>
                {t('templeInfo.historyText2')}
              </p>
            </div>

            <div className="temple-architecture">
              <h3>{t('templeInfo.architecture')}</h3>
              <div className="architecture-features">
                <div className="feature">
                  <div className="feature-icon">🏛️</div>
                  <div className="feature-content">
                    <h4>{t('templeInfo.rajasthaniArch')}</h4>
                    <p>{t('templeInfo.rajasthaniDesc')}</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🎨</div>
                  <div className="feature-content">
                    <h4>{t('templeInfo.artisticElements')}</h4>
                    <p>{t('templeInfo.artisticDesc')}</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🌟</div>
                  <div className="feature-content">
                    <h4>{t('templeInfo.sacredSanctum')}</h4>
                    <p>{t('templeInfo.sanctumDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="temple-timings">
              <h3>{t('templeInfo.timings')}</h3>
              <div className="timings-grid">
                <div className="timing-card">
                  <h4>{t('templeInfo.morningDarshan')}</h4>
                  <div className="time-slot">
                    <span className="time">{t('templeInfo.morningTime')}</span>
                    <span className="ritual">{t('templeInfo.manglaAarti')}</span>
                  </div>
                </div>
                <div className="timing-card">
                  <h4>{t('templeInfo.eveningDarshan')}</h4>
                  <div className="time-slot">
                    <span className="time">{t('templeInfo.eveningTime')}</span>
                    <span className="ritual">{t('templeInfo.sandhyaAarti')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="special-occasions">
              <h3>{t('templeInfo.specialOccasions')}</h3>
              <div className="occasions-list">
                <div className="occasion">
                  <h4>{t('templeInfo.falgunMela')}</h4>
                  <p>{t('templeInfo.falgunDesc')}</p>
                </div>
                <div className="occasion">
                  <h4>{t('templeInfo.janmashtami')}</h4>
                  <p>{t('templeInfo.janmashtamiDesc')}</p>
                </div>
                <div className="occasion">
                  <h4>{t('templeInfo.ekadashi')}</h4>
                  <p>{t('templeInfo.ekadasiDesc')}</p>
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
