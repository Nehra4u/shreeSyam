import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('hindi');

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('temple-language');
    if (savedLanguage && (savedLanguage === 'hindi' || savedLanguage === 'english')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'hindi' ? 'english' : 'hindi';
    setLanguage(newLanguage);
    localStorage.setItem('temple-language', newLanguage);
  };

  const changeLanguage = (lang) => {
    if (lang === 'hindi' || lang === 'english') {
      setLanguage(lang);
      localStorage.setItem('temple-language', lang);
    }
  };

  const value = {
    language,
    toggleLanguage,
    changeLanguage,
    isHindi: language === 'hindi',
    isEnglish: language === 'english'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
