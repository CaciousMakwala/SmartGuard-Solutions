import React from 'react';
import '../css/Director.css';

const Director = () => {
  return (
    <div className="director-profile-container">
      <div className="director-image-container">
        <img
          src="/assets/images/stuff/WhatsApp Image 2025-07-02 at 14.53.05_eda141fa..jpg"
          alt="Enoc Khoza"
          className="director-image"
        />
      </div>
      <div className="director-text-container">
        <h1>Enoc Khoza</h1>
        <p>
          Enoc Khoza, born and raised in Thembisa, is the founder and Director of Interconnection PTY LTD. Driven by a passion for technology and a deep understanding of the needs in his community, Enoc established the company in 2017 with a clear mission: to provide affordable, professional, and reliable home and business automation services in underserved areas.
        </p>
        <p>
          Growing up in Thembisa, he witnessed the challenges people faced with security, poor connectivity, and lack of access to skilled service providers. This inspired him to start Interconnection PTY LTD, focusing on solutions like alarm systems, CCTV, DStv installations, Wi-Fi extension, and more.
        </p>
        <p>
          Through his leadership, the company has grown to serve multiple areas across Gauteng. Enoc remains committed to empowering households and businesses with modern, smart solutions.
        </p>
        <p>
          He can be contacted at <a href="tel:0609314850">060 931 4850</a> or <a href="mailto:khozaenoc.a@gmail.com">khozaenoc.a@gmail.com</a>. His South African ID number is 9207075819088.
        </p>
      </div>
      <div className="company-logo-container">
<img
  src="/assets/logo.jpg"
  alt="Interconnection PTY LTD Logo"
  className="company-logo"
/>
      </div>
    </div>
  );
};

export default Director;
