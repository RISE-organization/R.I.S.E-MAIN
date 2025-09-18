import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
       <p>جميع الحقوق محفوظة الى <a href="https://alcandarli.github.io/LinkTree/" target="_blank" rel="noopener noreferrer" className="footer-link"><span className="footer-highlight">الجندارلي</span></a>  {currentYear}  </p>
      </div>
    </footer>
  );
};

export default Footer;
