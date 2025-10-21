import React, { useState, useEffect } from 'react';
import '../css/Home.css';

import { FaFacebookF, FaTwitter, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import CallRequestForm from '../components/CallRequestForm';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  const [fade, setFade] = useState(true);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setShowFirstMessage(prev => !prev);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [loading]);

  if (loading) {
    return (
      <div className="loading-spinner"></div>
    );
  }

  const toggleForm = () => {
    setFormOpen(prev => !prev);
  };

  return (
    <div className="home-container" style={{ backgroundImage: `url(/uty.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <section className="services-section">
        <h2 className={`fade ${fade ? 'fade-in' : 'fade-out'}`}>
          {showFirstMessage ? "Welcome to " : "Interkonnection PTY LTD"}
        </h2>

        <div className="content-description" style={{ color: '#fff', padding: '1rem', maxWidth: '900px', margin: 'auto', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px' }}>
          <p>Interkonnect is a fully accredited DStv Installation Service Provider with a commitment to providing reliable, high-quality satellite installation and support services. As an official DStv-accredited installer, we meet MultiChoice’s strict standards for quality workmanship, professionalism, and customer satisfaction. We serve Gauteng and surrounding areas, delivering fast, affordable, and expertly executed installation services.</p>

          <h3>Our Mission</h3>
          <p>To offer top-tier DStv installation and support services, ensuring every customer enjoys seamless entertainment through professional expertise, prompt service, and trusted solutions.</p>

          <h3>Our Vision</h3>
          <p>To be the most trusted and recommended DStv installation service provider in [Your Area], recognized for our excellence, integrity, and commitment to quality.</p>

          <h3>Our Services</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#0eabc0', fontWeight: '600' }}>
            <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>New DStv Installations (Residential & Commercial)</li>
            <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>DStv Upgrades & Explora Installations</li>
            <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>Extra View Setups</li>
            <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>Dish Realignment & Signal Repairs</li>
            <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>HD Decoder Installations</li>
            <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>Relocations & Re-installations</li>
            <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>DStv Troubleshooting & Support</li>
            <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>TV Wall Mounting & Cable Management</li>
          </ul>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>DStv Accredited Installer: Certified by MultiChoice for guaranteed service quality.</li>
            <li>Skilled Technicians: Our team is experienced, trained, and equipped to handle all DStv systems.</li>
            <li>Quick Turnaround: Fast response times and same-day service available.</li>
            <li>Affordable Pricing: Transparent, competitive rates with no hidden costs.</li>
            <li>Customer Satisfaction: We prioritize every client's needs, ensuring reliable connections and happy homes.</li>
          </ul>

          <h3>Areas</h3>
          <p>Johannesburg, Sandton, Midrand, Pretoria, etc.</p>

          <h3>Contact Us</h3>
          <p>📞 Phone: 0609314850<br/>
             📞 WhatsApp: 0694355316<br/>
             📧 Email: khozaenoc.a@gmail.com<br/>
             📧 Email: Interkonnection.info@gmail.com<br/>
             📍 Central Park
          </p>

          <h3>Business Hours</h3>
          <p>Monday – Saturday: 8:00 AM – 6:00 PM<br/>
             Sunday & Public Holidays: Closed
          </p>
        </div>

        <p className="follow-us-text">Follow us on:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
            <SiX />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="https://wa.me/0694355316" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </section>
      <div
        className="hamburger-menu call-request-toggle left"
        onClick={toggleForm}
        role="button"
        tabIndex={0}
        aria-label="Toggle call request form"
        onKeyPress={(e) => { if (e.key === 'Enter') toggleForm(); }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {formOpen && (
        <div className="call-request-form-container">
          <button
            className="close-button"
            onClick={() => setFormOpen(false)}
            aria-label="Close call request form"
          >
            &times;
          </button>
          <CallRequestForm onClose={() => setFormOpen(false)} className="slide-in" />
        </div>
      )}
    </div>
  );
};

export default Home;
