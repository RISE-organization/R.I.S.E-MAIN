import React from 'react';
import './Home.css';

const Home = () => {
  const boxes = [
    {
      logo: '/Rise.png',
      title: 'R.I.S.E EDUCATION',
      details: 'منصة تعليمة مزودة بذكاء اصطناعي مخصص .',
      link: 'https://example.com/rise'
    },
    {
      logo: '/Bot.png',
      title: 'R.I.S.E BOTs',
      details: 'مجموعات بوتات خدمية و عصرية  مدمجة مع الذكاء الاصطناعي',
      link: 'https://t.me/riseMean_bot'
    },
    {
      logo: '/Gpa.png',
      title: 'R.I.S.E GPA',
      details: 'منصة لحساب المعدل التراكمي بحسب نظام بولونيا',
      link: 'https://alcandarli.github.io/RISE_GPA/'
    },
    {
      logo: '/assistant.png',
      title: 'R.I.S.E Assistant',
      details: 'مساعد شخصي للحاسوب',
      link: 'https://example.com/assistant'
    },
    {
      logo: '/sora.png',
      title: 'Sora',
      details: 'soon !',
      link: 'https://example.com/bot'
    },
    {
      logo: '/security.png',
      title: 'R.I.S.E Security',
      details: 'SOON !',
      link: 'https://example.com/fahad'
    },
  ];

  const handleBoxClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="home-container">
      <div className="boxes-grid">
        {boxes.map((box, index) => (
          <div key={index} className="glass-box" onClick={() => handleBoxClick(box.link)} style={{ cursor: 'pointer' }}>
            <img src={box.logo} alt={box.title} className="box-logo" />
            <h3 className="box-title">{box.title}</h3>
            <p className="box-details">{box.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;