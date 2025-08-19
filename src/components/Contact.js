import React, { useState, useEffect } from 'react';
import './Contact.css';
import { useTranslation } from '../hooks/useTranslation';
import logoSvg from '../assets/images/khatu-shyam-ji-seeklogo.svg';

const Contact = () => {
  const { t } = useTranslation();
  const [ripples, setRipples] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Generate animated ripples for water effect
    const rippleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 4,
      size: 50 + Math.random() * 100,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setRipples(rippleArray);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="sacred-water">
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple"
            style={{
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
              width: `${ripple.size}px`,
              height: `${ripple.size}px`,
              animationDelay: `${ripple.delay}s`,
              animationDuration: `${ripple.duration}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="temple-details">
              <div className="detail-card">
                <div className="detail-icon">🏛️</div>
                <div className="detail-content">
                  <h3>{t('contact.templeAddress')}</h3>
                  <p>{t('contact.address').split('\n').map((line, index) => (
                    <span key={index}>{line}<br/></span>
                  ))}</p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">📞</div>
                <div className="detail-content">
                  <h3>{t('contact.contactNumbers')}</h3>
                  <p>{t('contact.phone').split('\n').map((line, index) => (
                    <span key={index}>{line}<br/></span>
                  ))}</p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">⏰</div>
                <div className="detail-content">
                  <h3>{t('contact.templeTimings')}</h3>
                  <p>{t('contact.timings').split('\n').map((line, index) => (
                    <span key={index}>{line}<br/></span>
                  ))}</p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">🚗</div>
                <div className="detail-content">
                  <h3>{t('contact.howToReach')}</h3>
                  <p>{t('contact.directions').split('\n').map((line, index) => (
                    <span key={index}>{line}<br/></span>
                  ))}</p>
                </div>
              </div>
            </div>

            <div className="divine-map">
              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <h4>{t('contact.templeLocation')}</h4>
                <p>{t('contact.locationDesc')}</p>
                <button className="btn btn-secondary">{t('contact.viewOnMap')}</button>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-background">
              <div className="divine-light-form"></div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>{t('contact.sendMessage')}</h3>
              <p className="form-subtitle">{t('contact.formSubtitle')}</p>

              <div className="form-group">
                <label htmlFor="name">{t('contact.yourName')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('contact.namePlaceholder')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.emailAddress')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.emailPlaceholder')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.yourMessage')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.messagePlaceholder')}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                <span>{t('contact.sendBtn')}</span>
                <div className="button-glow"></div>
              </button>
            </form>
          </div>
        </div>

       
      </div>
      <div className="spiritual-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>{t('contact.footerTitle')}</h4>
              <p>{t('contact.footerDesc')}</p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📺</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>{t('contact.quickLinks')}</h4>
              <ul>
                <li><a href="#about">{t('nav.about')}</a></li>
                <li><a href="#darshan">{t('nav.darshan')}</a></li>
                <li><a href="#aarti">{t('nav.liveAarti')}</a></li>
                <li><a href="#festivals">{t('nav.festivals')}</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>{t('contact.services')}</h4>
              <ul>
                <li><a href="#">{t('contact.servicesList.onlineBooking')}</a></li>
                <li><a href="#">{t('contact.servicesList.prasadDelivery')}</a></li>
                <li><a href="#">{t('contact.servicesList.donation')}</a></li>
                <li><a href="#">{t('contact.servicesList.accommodation')}</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>{t('contact.devotional')}</h4>
              <ul>
                <li><a href="#">{t('contact.devotionalList.dailyPrayers')}</a></li>
                <li><a href="#">{t('contact.devotionalList.spiritualGuidance')}</a></li>
                <li><a href="#">{t('contact.devotionalList.sacredTexts')}</a></li>
                <li><a href="#">{t('contact.devotionalList.bhajansKirtans')}</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-logo-section">
              <img 
                src={logoSvg} 
                alt={t('nav.logo')} 
                className="footer-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="footer-logo-fallback" style={{ display: 'none' }}>
                <div className="footer-logo-text">{t('nav.logo')}</div>
                <div className="footer-logo-subtitle">मंदिर</div>
              </div>
            </div>
            <div className="divine-blessing">
              <p>{t('contact.blessing')}</p>
            </div>
            <div className="copyright">
              <p>{t('contact.copyright')}</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
