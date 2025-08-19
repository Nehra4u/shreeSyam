import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="language-toggle">
      <button 
        className="language-btn"
        onClick={toggleLanguage}
        title={t('common.languageToggle')}
      >
        <div className="language-switch">
          <span className={`lang-option ${language === 'hindi' ? 'active' : ''}`}>
            हिं
          </span>
          <span className="separator">|</span>
          <span className={`lang-option ${language === 'english' ? 'active' : ''}`}>
            EN
          </span>
        </div>
      </button>
    </div>
  );
};

export default LanguageToggle;
