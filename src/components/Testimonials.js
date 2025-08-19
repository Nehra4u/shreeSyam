import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { useTranslation } from '../hooks/useTranslation';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const testimonials = t('testimonials.testimonialData').map(testimonial => ({
    ...testimonial,
    rating: 5
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsVisible(true);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsVisible(true);
    }, 300);
  };

  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="divine-background">
        <div className="floating-lotus">
          <div className="lotus lotus-1"></div>
          <div className="lotus lotus-2"></div>
          <div className="lotus lotus-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="testimonials-showcase">
          <div className="main-testimonial">
            <div className={`testimonial-card ${isVisible ? 'visible' : 'hidden'}`}>
              <div className="testimonial-background">
                <div className="divine-glow"></div>
              </div>
              
              <div className="testimonial-content">
                <div className="blessing-badge">
                  <span className="blessing-icon">✨</span>
                  <span>{testimonials[currentTestimonial].blessing}</span>
                </div>

                <div className="testimonial-story">
                  <div className="quote-mark">"</div>
                  <p>{testimonials[currentTestimonial].story}</p>
                </div>

                <div className="testimonial-rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    <div className="avatar-glow"></div>
                    <span className="avatar-initial">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div className="author-info">
                    <h4>{testimonials[currentTestimonial].name}</h4>
                    <p>{testimonials[currentTestimonial].location}</p>
                    <span className="testimonial-time">{testimonials[currentTestimonial].years}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-controls">
              <button className="control-btn prev" onClick={prevTestimonial}>
                <span>‹</span>
              </button>
              <div className="testimonial-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => {
                      setIsVisible(false);
                      setTimeout(() => {
                        setCurrentTestimonial(index);
                        setIsVisible(true);
                      }, 300);
                    }}
                  ></button>
                ))}
              </div>
              <button className="control-btn next" onClick={nextTestimonial}>
                <span>›</span>
              </button>
            </div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`mini-testimonial ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentTestimonial(index);
                    setIsVisible(true);
                  }, 300);
                }}
              >
                <div className="mini-content">
                  <div className="mini-blessing">{testimonial.blessing}</div>
                  <div className="mini-author">{testimonial.name}</div>
                  <div className="mini-location">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="devotee-stats">
          <div className="stat-item">
            <div className="stat-number">50,000+</div>
            <div className="stat-label">{t('testimonials.stats.blessedDevotees')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">{t('testimonials.stats.miracleStories')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">365</div>
            <div className="stat-label">{t('testimonials.stats.daysOfBlessings')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">{t('testimonials.stats.divineLove')}</div>
          </div>
        </div>

        <div className="share-experience">
          <h3>{t('testimonials.shareExperience.title')}</h3>
          <p>{t('testimonials.shareExperience.description')}</p>
          <button className="btn btn-primary">{t('testimonials.shareExperience.shareButton')}</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
