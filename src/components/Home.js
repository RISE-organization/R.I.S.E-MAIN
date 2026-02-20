import React from 'react';
import './Home.css';

const Home = () => {
  const boxes = [
    {
      logo: '/Rise.png',
      title: 'SOON !',
      details: "SOON !",
      link: 'https://example.com/rise'
    },
    {
      logo: '/RNOTE.png',
      title: 'R.NOTE',
      details: 'منصة لتدوين الملاحظات مدمجة بل ذكاء الاصطناعي',
      link: 'https://r-note-app.vercel.app/'
    },
    {
      logo: '/Rise.png',
      title: 'R.I.S.E GPA',
      details: 'منصة لحساب المعدل التراكمي بحسب نظام بولونيا',
      link: 'https://r-i-s-e-gpa.vercel.app/'
    },
    {
      logo: '/assistant.png',
      title: 'SOON !',
      details: 'SOON !',
      link: 'https://example.com/assistant'
    },
    {
      logo: '/sora.png',
      title: 'SOON !',
      details: 'SOON !',
      link: 'https://example.com/bot'
    },
    {
      logo: '/Bot.png',
      title: 'SOON !',
      details: 'SOON !',
      link: 'https://t.me/riseMean_bot'
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
            <img src={box.logo} alt={box.title} className="box-logo" loading="lazy" />
            <h3 className="box-title">{box.title}</h3>
            <p className="box-details">{box.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
