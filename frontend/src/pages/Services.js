import React, { useState, useEffect } from 'react';
import '../css/Home.css';

import { Link } from 'react-router-dom';
import { FaBell, FaPhone, FaWifi, FaTv, FaDoorClosed, FaVideo, FaHome, FaNetworkWired, FaSatelliteDish, FaFacebookF, FaTwitter, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import CallRequestForm from '../components/CallRequestForm';

const services = [
  {
    name: 'Alarm system',
    icon: <FaBell />,
    description: 'Reliable alarm systems to secure your home.',
    path: '/alarmsystem'
  },
  {
    name: 'CCTV',
    icon: <FaVideo />,
    description: 'High-quality CCTV systems for surveillance.',
    path: '/camera'
  },
  {
    name: 'Dstv',
    icon: <FaSatelliteDish />,
    description: 'Dstv installation and support services.',
    path: '/dstv'
  },
  {
    name: 'Gate motor',
    icon: <FaDoorClosed />,
    description: 'Automated gate motors for convenience and security.',
    path: '/gatemonitor'
  },
  {
    name: 'Home automation',
    icon: <FaHome />,
    description: 'Smart home automation solutions for modern living.',
    path: '/homeautomation'
  },
  {
    name: 'Intercom',
    icon: <FaPhone />,
    description: 'Clear and easy communication with intercom systems.',
    path: '/intercom'
  },
  {
    name: 'Network points',
    icon: <FaNetworkWired />,
    description: 'Network point installations for reliable connections.',
    path: '/networkpoints'
  },
  {
    name: 'TV installations',
    icon: <FaTv />,
    description: 'Professional TV mounting and installation services.',
    path: '/tvintallation'
  },

  {
    name: 'Wifi extender',
    icon: <FaWifi />,
    description: 'Extend your wifi coverage for seamless connectivity.',
    path: '/wi-fi'
  },
  {
    name: 'Videos',
    icon: <FaVideo />,
    description: 'Video gallery showcasing our projects and services.',
    path: '/videos'
  },
];

const Services = () => {
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
        <div className="services-grid">
          {services.map((service) => (
            <Link key={service.name} to={service.path} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </Link>
          ))}
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

export default Services;
