import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
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
          <h2 className="section-title">Connect with Divine</h2>
          <p className="section-subtitle">
            Reach out to us for spiritual guidance, temple information, or to share your devotional journey
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="temple-details">
              <div className="detail-card">
                <div className="detail-icon">🏛️</div>
                <div className="detail-content">
                  <h3>Temple Address</h3>
                  <p>Khatu Shyam Temple<br/>
                     Khatu Village, Sikar District<br/>
                     Rajasthan 332602, India</p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">📞</div>
                <div className="detail-content">
                  <h3>Contact Numbers</h3>
                  <p>Temple Office: +91-1572-255-XXX<br/>
                     Information: +91-1572-255-XXX<br/>
                     Emergency: +91-1572-255-XXX</p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">⏰</div>
                <div className="detail-content">
                  <h3>Temple Timings</h3>
                  <p>Morning: 5:30 AM - 12:00 PM<br/>
                     Evening: 4:00 PM - 9:00 PM<br/>
                     Special occasions may vary</p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">🚗</div>
                <div className="detail-content">
                  <h3>How to Reach</h3>
                  <p>By Air: Jaipur Airport (80 km)<br/>
                     By Train: Ringas Junction (17 km)<br/>
                     By Road: Well connected by bus</p>
                </div>
              </div>
            </div>

            <div className="divine-map">
              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <h4>Temple Location</h4>
                <p>Find us in the heart of Rajasthan</p>
                <button className="btn btn-secondary">View on Map</button>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-background">
              <div className="divine-light-form"></div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Your Message</h3>
              <p className="form-subtitle">Share your thoughts, prayers, or queries with us</p>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your thoughts, prayers, or queries..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                <span>Send Message</span>
                <div className="button-glow"></div>
              </button>
            </form>
          </div>
        </div>

       
      </div>
      <div className="spiritual-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>श्री खाटू श्याम मंदिर</h4>
              <p>A sacred place where devotion meets divinity</p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📺</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Khatu Shyam Ji</a></li>
                <li><a href="#darshan">Virtual Darshan</a></li>
                <li><a href="#aarti">Live Aarti</a></li>
                <li><a href="#festivals">Festivals</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Online Booking</a></li>
                <li><a href="#">Prasad Delivery</a></li>
                <li><a href="#">Donation</a></li>
                <li><a href="#">Accommodation</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Devotional</h4>
              <ul>
                <li><a href="#">Daily Prayers</a></li>
                <li><a href="#">Spiritual Guidance</a></li>
                <li><a href="#">Sacred Texts</a></li>
                <li><a href="#">Bhajans & Kirtans</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="divine-blessing">
              <p>🙏 May Khatu Shyam Ji's blessings be with you always 🙏</p>
            </div>
            <div className="copyright">
              <p>&copy; 2024 Khatu Shyam Mandir. All rights reserved. Made with devotion and love.</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
