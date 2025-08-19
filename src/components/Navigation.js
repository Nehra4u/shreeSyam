import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { useTranslation } from '../hooks/useTranslation';
import LanguageToggle from './LanguageToggle';
import logoSvg from '../assets/images/khatu-shyam-ji-seeklogo.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    // { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    // { label: t('nav.temple'), href: '#temple' },
    { label: t('nav.darshan'), href: '#darshan' },
    { label: t('nav.liveAarti'), href: '#aarti' },
    { label: t('nav.specialDays'), href: '#special-days' },
    // { label: t('nav.festivals'), href: '#festivals' },
    // { label: t('nav.contact'), href: '#contact' }
  ];

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img 
            src={logoSvg} 
            alt={t('nav.logo')} 
            className="logo-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="logo-fallback" style={{ display: 'none' }}>
            <div className="logo-text">{t('nav.logo')}</div>
            <div className="logo-subtitle">मंदिर</div>
          </div>
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a 
                href={item.href} 
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <div className="social-media-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title={t('socialMedia.facebook')}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title={t('socialMedia.instagram')}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title={t('socialMedia.youtube')}>
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title={t('socialMedia.twitter')}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <LanguageToggle />
        </div>

        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
