import React, { useState, useEffect, useCallback } from 'react';
import './SpecialDays.css';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const SpecialDays = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [upcomingDays, setUpcomingDays] = useState([]);

  const calculateUpcomingSpecialDays = useCallback(() => {
    const today = new Date();
    const specialDays = [];
    
    // Calculate next 6 months of special days
    for (let i = 0; i < 180; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const lunarDay = calculateLunarDay(date);
      
      if (lunarDay === 11) { // Ekadashi
        specialDays.push({
          date: date,
          type: 'ekadashi',
          name: t('specialDays.ekadashi'),
          significance: t('specialDays.ekadashiSignificance'),
          icon: '🌙',
          color: '#4f46e5'
        });
      } else if (lunarDay === 12) { // Dwadashi
        specialDays.push({
          date: date,
          type: 'dwadashi',
          name: t('specialDays.dwadashi'),
          significance: t('specialDays.dwadashiSignificance'),
          icon: '✨',
          color: '#7c3aed'
        });
      } else if (lunarDay === 0) { // Amavasya (New Moon)
        specialDays.push({
          date: date,
          type: 'amavasya',
          name: t('specialDays.amavasya'),
          significance: t('specialDays.amavasyaSignificance'),
          icon: '🌑',
          color: '#1f2937'
        });
      }
    }
    
    setUpcomingDays(specialDays.slice(0, 6)); // Show next 6 special days
  }, [t]); // Re-calculate when translations change

  useEffect(() => {
    const timer = setInterval(() => {
      // Update every hour for real-time countdown
    }, 1000 * 60 * 60);

    calculateUpcomingSpecialDays();
    return () => clearInterval(timer);
  }, [language, calculateUpcomingSpecialDays]); // Re-calculate when language changes

  // Simplified lunar calendar calculation (approximation)
  const calculateLunarDay = (date) => {
    const lunarMonth = 29.53059; // Average lunar month in days
    const knownNewMoon = new Date('2024-01-11'); // Known new moon date
    const diffTime = date.getTime() - knownNewMoon.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const lunarDay = Math.floor(diffDays % lunarMonth) + 1;
    return lunarDay > 29 ? lunarDay - 29 : lunarDay;
  };

  const formatDate = useCallback((date) => {
    const locale = language === 'hindi' ? 'hi-IN' : 'en-US';
    return date.toLocaleDateString(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }, [language]);

  const getDaysUntil = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const specialVisitBenefits = [
    {
      icon: '🕉️',
      title: t('specialDays.benefits.spiritualPower'),
      description: t('specialDays.benefits.spiritualPowerDesc')
    },
    {
      icon: '🌟',
      title: t('specialDays.benefits.multipliedBlessings'),
      description: t('specialDays.benefits.multipliedBlessingsDesc')
    },
    {
      icon: '🙏',
      title: t('specialDays.benefits.ancestralBlessing'),
      description: t('specialDays.benefits.ancestralBlessingDesc')
    },
    {
      icon: '💫',
      title: t('specialDays.benefits.karmaPurification'),
      description: t('specialDays.benefits.karmaPurificationDesc')
    }
  ];

  return (
    <section id="special-days" className="special-days-section section">
      <div className="container">
        <div className="special-days-header">
          <h2 className="section-title">{t('specialDays.title')}</h2>
          <p className="section-subtitle">
            {t('specialDays.subtitle')}
          </p>
        </div>

        <div className="special-days-content">
          <div className="upcoming-days">
            <h3>{t('specialDays.upcomingDays')}</h3>
            <div className="days-grid">
              {upcomingDays.map((day, index) => {
                const daysUntil = getDaysUntil(day.date);
                return (
                  <div key={index} className={`day-card ${day.type}`}>
                    <div className="day-icon" style={{ color: day.color }}>
                      {day.icon}
                    </div>
                    <div className="day-info">
                      <h4>{day.name}</h4>
                      <p className="day-date">{formatDate(day.date)}</p>
                      <div className="days-countdown">
                        {daysUntil === 0 ? (
                          <span className="today">{t('specialDays.today')}</span>
                        ) : daysUntil === 1 ? (
                          <span className="tomorrow">{t('specialDays.tomorrow')}</span>
                        ) : (
                          <span className="days-left">
                            {daysUntil} {t('specialDays.daysLeft')}
                          </span>
                        )}
                      </div>
                      <p className="day-significance">{day.significance}</p>
                    </div>
                    <div className="divine-glow"></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="special-days-info">
            <div className="info-card ekadashi-info">
              <h3>
                <span className="info-icon">🌙</span>
                {t('specialDays.ekadashi')}
              </h3>
              <p>{t('specialDays.ekadashiDetails')}</p>
              <div className="special-timings">
                <h4>{t('specialDays.specialTimings')}</h4>
                <ul>
                  <li>{t('specialDays.timings.earlyMorning')}: 04:30 - 06:00</li>
                  <li>{t('specialDays.timings.specialAarti')}: 19:30 - 20:30</li>
                  <li>{t('specialDays.timings.nightPrayers')}: 22:00 - 23:00</li>
                </ul>
              </div>
            </div>

            <div className="info-card dwadashi-info">
              <h3>
                <span className="info-icon">✨</span>
                {t('specialDays.dwadashi')}
              </h3>
              <p>{t('specialDays.dwadashiDetails')}</p>
              <div className="special-offerings">
                <h4>{t('specialDays.specialOfferings')}</h4>
                <ul>
                  <li>{t('specialDays.offerings.flowers')}</li>
                  <li>{t('specialDays.offerings.fruits')}</li>
                  <li>{t('specialDays.offerings.sweets')}</li>
                </ul>
              </div>
            </div>

            <div className="info-card amavasya-info">
              <h3>
                <span className="info-icon">🌑</span>
                {t('specialDays.amavasya')}
              </h3>
              <p>{t('specialDays.amavasyaDetails')}</p>
              <div className="ancestral-prayers">
                <h4>{t('specialDays.ancestralPrayers')}</h4>
                <p>{t('specialDays.ancestralPrayersDesc')}</p>
              </div>
            </div>
          </div>

          <div className="visit-benefits">
            <h3>{t('specialDays.benefitsTitle')}</h3>
            <div className="benefits-grid">
              {specialVisitBenefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="devotee-guidance">
            <div className="guidance-card">
              <h3>{t('specialDays.devoteeGuidance')}</h3>
              <div className="guidance-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <p>{t('specialDays.steps.fasting')}</p>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <p>{t('specialDays.steps.earlyVisit')}</p>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <p>{t('specialDays.steps.prayers')}</p>
                </div>
                <div className="step">
                  <span className="step-number">4</span>
                  <p>{t('specialDays.steps.donation')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDays;
