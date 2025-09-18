import React, { useState } from "react";
import DarkVeil from "./components/DarkVeil";
import Navbar from "./components/Navbar";
import ContentModal from "./components/ContentModal";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState('home'); 

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleCloseModal = () => {
    setActiveSection(null);
  };

  return(
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <DarkVeil />
      <Navbar onSectionChange={handleSectionChange} />
      <div style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center', paddingTop: '120px' }}>
        <h1>مرحباً بك!</h1>
        <p>هذا تأثير Dark Veil</p>
        <p style={{ marginTop: '20px', fontSize: '14px', opacity: 0.7 }}>
          اضغط على الأزرار في الأعلى لاستكشاف المحتوى
        </p>
      </div>
      <ContentModal section={activeSection} onClose={handleCloseModal} />
      <Footer />
    </div>
  );
}

export default App;