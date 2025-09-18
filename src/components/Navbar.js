import React, { useState } from 'react';
import './Navbar.css';
import RotatingText from './RotatingText';
import GooeyNav from './GooeyNav';

const Navbar = ({ onSectionChange }) => {
  const words = ['RESEARCH', 'INNOVATION', 'SOLUTIONS', 'EXCELLENCE'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionClick = (section) => {
    onSectionChange(section);
    setIsMobileMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* الشعار والنص */}
        <div className="navbar-logo">
          <div className="logo-icon">
            <img src="/logo.png" alt="Logo" className="logo-image" />
          </div>
          <div className="logo-text-container">
            <span className="logo-text-static">R.I.S.E</span>
            <RotatingText
              texts={words}
              mainClassName="logo-text-animated"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>

        {/* قائمة هامبرغر للجوال */}
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* روابط التنقل للديسكتوب */}
        <div className="navbar-links desktop-links" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60px' }}>
          <GooeyNav
            items={[
              { label: "الأعضاء", onClick: () => handleSectionClick('members') },
              { label: "رؤيتنا", onClick: () => handleSectionClick('about') },
              { label: "الرئيسية", onClick: () => handleSectionClick('home') },
            ]}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={2}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* قائمة الجوال */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <button onClick={() => handleSectionClick('home')} className="mobile-menu-item">
              الرئيسية
            </button>
            <button onClick={() => handleSectionClick('about')} className="mobile-menu-item">
              رؤيتنا
            </button>
            <button onClick={() => handleSectionClick('members')} className="mobile-menu-item">
              الأعضاء
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
