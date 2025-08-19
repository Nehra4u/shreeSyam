import React, { useState, useEffect } from 'react';
import './Festivals.css';
import { useTranslation } from '../hooks/useTranslation';
import festivalImage from '../assets/images/temple-festival.jpg';

const Festivals = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  
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
      name: t('festivals.festivalData.falgunMela.name'),
      date: t('festivals.festivalData.falgunMela.date'),
      duration: t('festivals.festivalData.falgunMela.duration'),
      description: t('festivals.festivalData.falgunMela.description'),
      highlights: t('festivals.festivalData.falgunMela.highlights'),
      significance: t('festivals.festivalData.falgunMela.significance'),
      color: 'linear-gradient(135deg, #FF6B6B, #FF8E53)'
    },
    {
      name: t('festivals.festivalData.janmashtami.name'),
      date: t('festivals.festivalData.janmashtami.date'),
      duration: t('festivals.festivalData.janmashtami.duration'),
      description: t('festivals.festivalData.janmashtami.description'),
      highlights: t('festivals.festivalData.janmashtami.highlights'),
      significance: t('festivals.festivalData.janmashtami.significance'),
      color: 'linear-gradient(135deg, #4ECDC4, #44A08D)'
    },
    {
      name: t('festivals.festivalData.kartikPurnima.name'),
      date: t('festivals.festivalData.kartikPurnima.date'),
      duration: t('festivals.festivalData.kartikPurnima.duration'),
      description: t('festivals.festivalData.kartikPurnima.description'),
      highlights: t('festivals.festivalData.kartikPurnima.highlights'),
      significance: t('festivals.festivalData.kartikPurnima.significance'),
      color: 'linear-gradient(135deg, #F093FB, #F5576C)'
    },
    {
      name: t('festivals.festivalData.ekadashi.name'),
      date: t('festivals.festivalData.ekadashi.date'),
      duration: t('festivals.festivalData.ekadashi.duration'),
      description: t('festivals.festivalData.ekadashi.description'),
      highlights: t('festivals.festivalData.ekadashi.highlights'),
      significance: t('festivals.festivalData.ekadashi.significance'),
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
          <h2 className="section-title">{t('festivals.title')}</h2>
          <p className="section-subtitle">
            {t('festivals.subtitle')}
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
                    <h4>{t('festivals.festivalHighlights')}</h4>
                    <div className="highlights-grid">
                      {festival.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-tag">{highlight}</span>
                      ))}
                    </div>
                  </div>

                  <div className="festival-significance">
                    <h4>{t('festivals.spiritualSignificance')}</h4>
                    <p style={{color:'white'}}>{festival.significance}</p>
                  </div>

                  <div className="card-actions">
                    <button className="btn btn-primary">{t('festivals.learnMore')}</button>
                    <button className="btn btn-secondary">{t('festivals.setReminder')}</button>
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
          <h3>{t('festivals.festivalMoments')}</h3>
          <div className="gallery-grid">
            <div className="gallery-item large">
              <div className="gallery-placeholder">
                <div className="gallery-icon">🎉</div>
                <h4>{t('festivals.gallery.grandProcession')}</h4>
                <p>{t('festivals.gallery.grandProcessionDesc')}</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="gallery-icon">🎭</div>
                <h4>{t('festivals.gallery.culturalPrograms')}</h4>
                <p>{t('festivals.gallery.culturalProgramsDesc')}</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="gallery-icon">🍽️</div>
                <h4>{t('festivals.gallery.communityFeast')}</h4>
                <p>{t('festivals.gallery.communityFeastDesc')}</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="gallery-icon">🪔</div>
                <h4>{t('festivals.gallery.divineIllumination')}</h4>
                <p>{t('festivals.gallery.divineIlluminationDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="upcoming-events">
          <h3>{t('festivals.upcomingCelebrations')}</h3>
          <div className="events-timeline">
            <div className="timeline-item">
              <div className="timeline-date">
                <span className="month">Mar</span>
                <span className="day">15</span>
              </div>
              <div className="timeline-content">
                <h4>{t('festivals.timeline.falgunMelaBegins')}</h4>
                <p>{t('festivals.timeline.falgunMelaDesc')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">
                <span className="month">Aug</span>
                <span className="day">26</span>
              </div>
              <div className="timeline-content">
                <h4>{t('festivals.timeline.janmashtamiCelebration')}</h4>
                <p>{t('festivals.timeline.janmashtamiDesc')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">
                <span className="month">Nov</span>
                <span className="day">12</span>
              </div>
              <div className="timeline-content">
                <h4>{t('festivals.timeline.kartikPurnima')}</h4>
                <p>{t('festivals.timeline.kartikPurnimaDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festivals;
