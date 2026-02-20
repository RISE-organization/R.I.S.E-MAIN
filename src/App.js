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

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <DarkVeil />
      <Navbar onSectionChange={handleSectionChange} />
      <ContentModal section={activeSection} onClose={handleCloseModal} />
      <Footer />
    </div>
  );
}

export default App;