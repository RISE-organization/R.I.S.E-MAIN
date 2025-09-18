import React, { useRef, useEffect } from 'react';
import './ContentModal.css';
import PixelCard from './PixelCard';
import Home from './Home';

const ContentModal = ({ section, onClose }) => {
  const overlayRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };


  if (!section) return null;

  let title = '';
  let content = null;

  if (section === 'home') {
    title = 'خدماتنا 🌙';
    content = <Home />;
  } else if (section === 'about') {
    title = 'رؤيتنا ✨';
    content = (
      <div className="about-content" style={{ height: '370px', overflow: 'hidden' }}>
        <div className="about-grid-custom">
          <div className="about-card about-card--hero">
            <div className="about-card-header">
              <h3>من نحن</h3>
              <span className="about-icon">⚡</span>
            </div>
            <div className="about-card-content">
              <p>نحن <strong>R.I.S.E</strong> - مجموعة نخبة من الرواد الرقميين، معماريي الكود، ورياديي الابتكار الذين لا يطورون التطبيقات فحسب، بل يهندسون <strong>النظم البيئية الرقمية</strong> التي تغير الصناعات وتعيد تعريف الإمكانيات. مهمتنا تتجاوز الحدود التقليدية، صياغة <strong>المعالم التكنولوجية</strong> التي تمزج بسلاسة الوظائف المتطورة مع الجماليات الرائعة، تقديم حلول لا تلبي التوقعات فحسب بل تغير تمامًا المشهد الرقمي.</p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-value">2+</span>
                  <span className="stat-desc">مطور نخبة</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-value">12+</span>
                  <span className="stat-desc">مشروع ثوري</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-value">100%</span>
                  <span className="stat-desc">معدل الابتكار</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-value">∞</span>
                  <span className="stat-desc">الإمكانيات</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card about-card--contact">
            <div className="about-card-header">
              <h3>تواصل</h3>
              <span className="about-icon">🔗</span>
            </div>
            <div className="about-card-content">
              <p>جاهز لتجاوز العادي؟</p>
              <div className="contact-section">
                <div className="contact-links-compact">
              <a href="https://t.me/AHM_66" target="_blank" rel="noopener noreferrer" className="contact-link-compact telegram">
                <svg className="contact-icon-compact" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ahmedmshtak4?igsh=MXZhb244emI1NHB6dg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="contact-link-compact instagram">
                <svg className="contact-icon-compact" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card about-card--mission">
            <div className="about-card-header">
              <h3>رؤيتنا</h3>
              <span className="about-icon">🎯</span>
            </div>
            <div className="about-card-content">
              <p>لتصميم مستقبل التفاعل الرقمي من خلال إنشاء <strong>حلول تحولية</strong> لا تغير الأسواق فحسب - بل تخلق أبعاد إمكانية جديدة تمامًا. نحول الرؤى المجردة إلى حقائق رقمية ملموسة تلهم وتشارك وتغير.</p>
             
            </div>
          </div>


        </div>
      </div>
    );
  } else if (section === 'members') {
    title = 'الفريق ⚡️';
    content = (
      <div style={{ maxHeight: '430px', overflow: 'visible' }}>
        <div className="members-sections">
          <div className="members-header">
            <h3 className="group-title management-title">الإدارة</h3>
            <div className="vertical-separator"></div>
            <h3 className="group-title members-title">الأعضاء</h3>
          </div>
          <div className="member-grid" style={{gridTemplateColumns: '1fr 1fr auto 1fr 1fr'}}>
            <PixelCard
              variant="blue"
              href="https://alcandarli.github.io/LinkTree/?fbclid=PAQ0xDSwL8dfJleHRuA2FlbQIxMQABp7cgeFl2rjMCQmIYpPfG5Z6OyOiFv27pnHqwtAPo4U0gPOFq5HgmwhqaZQTZ_aem_22nDx3lpacXPMlazlbnQHA"
              className="member-pixel-card"
            >
              <div className="member-content">
                <div className="member-image-container">
                  <img src="/ahmed.png" alt="Ahmed Mushtaq" className="member-image" />
                </div>
                <h4>Ǎļ Çandarli.</h4>
                <p>---------------------------------------------------------------------------</p>
                <p>• Chief Executive Officer (CEO).</p>
                <p>• Systems & Security Architect.</p>
                <p>• Editor, Presenter, Poet & Writer.</p>
                <p>• Full Stack Developer.</p>
                <p>👑 🧠</p>
              </div>
            </PixelCard>
            <PixelCard
              variant="pink"
              href="https://fahadwm101.github.io/FAHAD.GITHUP/"
              className="member-pixel-card"
            >
              <div className="member-content">
                <div className="member-image-container">
                  <img src="/fahad.png" alt="Cheetah" className="member-image" />
                </div>
                <h4>Cheetah.</h4>
                <p>---------------------------------------------------------------------------</p>
                <p>• Chief Operating Officer.</p>
                <p>• Public Relations.</p>
                <p>• Vice President.</p>
                <p>• Developer. </p>
                <p>⚡️</p>
              </div>
            </PixelCard>
            <div className="card-separator"></div>
            <PixelCard
              variant="white"
              href="https://linktr.ee/jempe?fbclid=PAQ0xDSwL8dzFleHRuA2FlbQIxMQABp32NRpmw83fV0wdcrGzrfMQmlAVq6JshMPFMTTrZXk7cEpoMKVyllgtboHxr_aem_NPTAm6q038CB4RpHeI_goA"
              className="member-pixel-card"
            >
              <div className="member-content">
                <div className="member-image-container">
                  <img src="/jempe.png" alt="jempe " className="member-image" />
                </div>
                <h4>Jempe.</h4>
                <p>---------------------------------------------------------------------------</p>
                <p>• Telegram Bots dev. </p>
                <p>• Writer and poet.</p>
                <p>• Vice President.</p>
                <p>• Python dev.</p>
                <p>🖤</p>
              </div>
            </PixelCard>
            <PixelCard
              variant="white"
              href=""
              className="member-pixel-card"
            >
              <div className="member-content">
                <div className="member-image-container">
                  <img src="/hiba.jpg" alt="Hiba" className="member-image" />
                </div>
                <h4>Hiba.</h4>
                <p>---------------------------------------------------------------------------</p>
                <p>• Cybersecurity Student.</p>
                <p>• Ethical Hacker.</p>
                <p>• Security Analyst.</p>
                <p>• Vice President.</p>
                <p>🛡️</p>
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={overlayRef} className="content-modal-overlay" onClick={handleOverlayClick}>
      <div className="content-modal">
        <div className="content-modal-header">
          <h2>{title}</h2>
        </div>
        <div className="content-modal-body">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ContentModal;

