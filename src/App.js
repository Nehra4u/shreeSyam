import React, { useEffect, useState } from "react";
import "./App.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import ErrorBoundary from "./components/ErrorBoundary";
import SpiritualLoader from "./components/SpiritualLoader";
import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import TempleInfo from "./components/TempleInfo";
import Darshan from "./components/Darshan";
import LiveAarti from "./components/LiveAarti";
import SpecialDays from "./components/SpecialDays";
import ImageCarousel from "./components/ImageCarousel";
import Festivals from "./components/Festivals";
import Testimonials from "./components/Testimonials";
import Trustees from "./components/Trustees";
import Donation from "./components/Donation";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showBlessings, setShowBlessings] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Divine cursor tracking
    const handleMouseMove = (e) => {
      const cursor = document.querySelector(".divine-cursor");
      if (cursor) {
        cursor.style.left = e.clientX - 10 + "px";
        cursor.style.top = e.clientY - 10 + "px";

        // Add divine trail effect
        const trail = document.createElement("div");
        trail.className = "cursor-trail";
        trail.style.left = e.clientX - 5 + "px";
        trail.style.top = e.clientY - 5 + "px";
        document.body.appendChild(trail);

        setTimeout(() => {
          if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
          }
        }, 1000);
      }
    };

    // Show random blessings during scroll
    const blessingInterval = setInterval(() => {
      if (!isLoading && Math.random() > 0.95) {
        setShowBlessings(true);
        setTimeout(() => setShowBlessings(false), 2000);
      }
    }, 1000);

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(blessingInterval);
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <LanguageProvider>
        <SpiritualLoader onComplete={handleLoadingComplete} />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <ErrorBoundary>
        <div className="App">
          {showBlessings && (
            <div className="floating-blessing">
              <span>🙏 जय श्री श्याम 🙏</span>
            </div>
          )}

          <div className="divine-cursor"></div>

          <Navigation />
          <HeroBanner scrollY={scrollY} />
          <ImageCarousel />
          <LiveAarti />
          <SpecialDays />
          <Donation />
          <Darshan />
          <TempleInfo />

          <Festivals />
          <About />
          <Trustees />
          <Testimonials />
          <Contact />

          <div className="scroll-blessing">
            <div className="blessing-particles">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="blessing-particle"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    left: `${20 + i * 15}%`,
                  }}
                >
                  ✨
                </div>
              ))}
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </LanguageProvider>
  );
}

export default App;
