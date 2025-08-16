import React, { useState, useEffect } from 'react';
import './SpiritualLoader.css';

const SpiritualLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMantra, setCurrentMantra] = useState(0);

  const mantras = [
    "ॐ श्री खाटू श्यामाय नमः",
    "जय श्री श्याम",
    "बर्बरीक की जय",
    "कृष्ण भक्त श्याम की जय"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const mantraInterval = setInterval(() => {
      setCurrentMantra(prev => (prev + 1) % mantras.length);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(mantraInterval);
    };
  }, [onComplete, mantras.length]);

  return (
    <div className="spiritual-loader">
      <div className="loader-background">
        <div className="divine-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              animationDelay: `${i * 0.2}s`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="loader-content">
        <div className="divine-symbol">
          <div className="om-loader">ॐ</div>
          <div className="rotating-aura"></div>
        </div>

        <div className="loading-text">
          <h2>श्री खाटू श्याम मंदिर</h2>
          <p>Preparing your spiritual journey...</p>
        </div>

        <div className="mantra-display">
          <p className="current-mantra">{mantras[currentMantra]}</p>
        </div>

        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{progress}%</div>
        </div>

        <div className="lotus-petals">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="petal" 
              style={{ 
                transform: `rotate(${i * 45}deg) translateY(-50px)`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpiritualLoader;
