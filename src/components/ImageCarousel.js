import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle image focused
  
  const carouselData = [
    {
      image: '/images/deity-darshan.jpeg',
      date: '15 अगस्त 2024',
      title: 'श्री श्याम दर्शन'
    },
    {
      image: '/images/khatu-shyam-temple.jpg',
      date: '10 अगस्त 2024',
      title: 'मंदिर दर्शन'
    },
    {
      image: '/images/temple-aarti.jpg',
      date: '5 अगस्त 2024',
      title: 'संध्या आरती'
    },
    {
      image: '/images/temple-architecture.jpg',
      date: '1 अगस्त 2024',
      title: 'मंदिर वास्तुकला'
    },
    {
      image: '/images/temple-festival.jpg',
      date: '25 जुलाई 2024',
      title: 'त्योहार उत्सव'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      if (index < 0) index = carouselData.length - 1;
      if (index >= carouselData.length) index = 0;
      slides.push({ ...carouselData[index], position: i });
    }
    return slides;
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-header">
          <h2 className="carousel-title">
            <span className="divine-text">दिव्य स्मृतियाँ</span>
            <span className="english-text">Divine Memories</span>
          </h2>
          <p className="carousel-subtitle">मंदिर की पावन यादें</p>
        </div>

        <div className="carousel-wrapper">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            <span>‹</span>
          </button>

          <div className="carousel-track">
            {getVisibleSlides().map((slide, index) => (
              <div
                key={`${slide.image}-${index}`}
                className={`carousel-slide ${slide.position === 0 ? 'active' : ''} ${
                  slide.position < 0 ? 'prev' : slide.position > 0 ? 'next' : ''
                }`}
                onClick={() => slide.position !== 0 && goToSlide(
                  slide.position < 0 
                    ? (currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1)
                    : (currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1)
                )}
              >
                <div className="slide-image-container">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="slide-image"
                  />
                  <div className="slide-overlay">
                    <div className="slide-content">
                      <h3 className="slide-title">{slide.title}</h3>
                      <p className="slide-date">{slide.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next-btn" onClick={nextSlide}>
            <span>›</span>
          </button>
        </div>

        <div className="carousel-indicators">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
