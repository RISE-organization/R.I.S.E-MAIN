import React from 'react';
import PixelCard from './PixelCard';

const Members = () => {
    return (
        <div style={{ maxHeight: '430px', overflow: 'visible' }}>
            <div className="members-sections">
                <div className="members-header" style={{ justifyContent: 'center' }}>
                    <h3 className="group-title management-title">الإدارة</h3>
                </div>
                <div className="member-grid" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    flexWrap: 'wrap'
                }}>
                    <PixelCard
                        variant="blue"
                        href="https://alcandarli.github.io/LinkTree/?fbclid=PAQ0xDSwL8dfJleHRuA2FlbQIxMQABp7cgeFl2rjMCQmIYpPfG5Z6OyOiFv27pnHqwtAPo4U0gPOFq5HgmwhqaZQTZ_aem_22nDx3lpacXPMlazlbnQHA"
                        className="member-pixel-card"
                    >
                        <div className="member-content">
                            <div className="member-image-container">
                                <img src="/ahmed.png" alt="Ahmed Mushtaq" className="member-image" loading="lazy" />
                            </div>
                            <h4>Çandarli Paşa.</h4>
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
                                <img src="/fahad.png" alt="Cheetah" className="member-image" loading="lazy" />
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
                </div>
            </div>
        </div>
    );
};

export default Members;
