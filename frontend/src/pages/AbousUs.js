import React from 'react';
import '../css/AbousUs.css';

const AbousUs = () => {
  return (
    <div className="abousus-page">
<img
        src={process.env.PUBLIC_URL + '/assets/logo.jpg'}
        alt="Interconnection Logo"
        className="abousus-logo"
/>
      <h1>Interkonnect DStv Installation Service Provider</h1>
      <div className="abousus-paragraph-container">
        <p>
          Interkonnect is a fully accredited DStv Installation Service Provider with a commitment to providing reliable, high-quality satellite installation and support services. As an official DStv-accredited installer, we meet MultiChoice’s strict standards for quality workmanship, professionalism, and customer satisfaction. We serve Gauteng and surrounding areas, delivering fast, affordable, and expertly executed installation services.
        </p>
        <h2>Our Mission</h2>
        <p>
          To offer top-tier DStv installation and support services, ensuring every customer enjoys seamless entertainment through professional expertise, prompt service, and trusted solutions.
        </p>
        <h2>Our Vision</h2>
        <p>
          To be the most trusted and recommended DStv installation service provider in [Your Area], recognized for our excellence, integrity, and commitment to quality.
        </p>
        <h2>Our Services</h2>
        <ul>
          <li>New DStv Installations (Residential & Commercial)</li>
          <li>DStv Upgrades & Explora Installations</li>
          <li>Extra View Setups</li>
          <li>Dish Realignment & Signal Repairs</li>
          <li>HD Decoder Installations</li>
          <li>Relocations & Re-installations</li>
          <li>DStv Troubleshooting & Support</li>
          <li>TV Wall Mounting & Cable Management</li>
        </ul>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>DStv Accredited Installer: Certified by MultiChoice for guaranteed service quality.</li>
          <li>Skilled Technicians: Our team is experienced, trained, and equipped to handle all DStv systems.</li>
          <li>Quick Turnaround: Fast response times and same-day service available.</li>
          <li>Affordable Pricing: Transparent, competitive rates with no hidden costs.</li>
          <li>Customer Satisfaction: We prioritize every client's needs, ensuring reliable connections and happy homes.</li>
        </ul>
        <h2>Areas</h2>
        <p>Johannesburg, Sandton, Midrand, Pretoria, etc.</p>
        <h2>Contact Us</h2>
        <p>📞 Phone: 0609314850<br/>
           📞 WhatsApp: 0694355316<br/>
           📧 Email: khozaenoc.a@gmail.com<br/>
           📧 Email: Interkonnection.info@gmail.com</p>
        <p>📍 Central Park</p>
        <h2>Business Hours</h2>
        <p>Monday – Saturday: 8:00 AM – 6:00 PM<br/>
           Sunday & Public Holidays</p>
      </div>
    </div>
  );
};

export default AbousUs;
