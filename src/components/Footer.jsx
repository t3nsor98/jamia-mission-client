import React from 'react';
import './Footer.css'; // Assuming you will style your component in this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>CONTACT US</h3>
        <p>
          <strong>Address</strong><br />
          R-85/8 near Hari Masjid<br />
          Joga Bai Extension, Jamia Nagar<br />
          Okhla, South Delhi - 110025
        </p>
        <p>
          <strong>Contact Numbers</strong><br />
          7011339746<br />
          9643027784<br />
          7011327025
        </p>
        <p>
          <strong>Follow Us</strong><br />
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br />
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a><br />
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a><br />
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X</a>
        </p>
      </div>
      <div className="footer-column">
        <h3>QUICK LINKS</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/school">School</a></li>
          <li><a href="/coaching">Coaching</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>LOCATION MAP</h3>
        {/* <!-- You can embed a Google Map iframe here --> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14026.810057138897!2d77.26939132889154!3d28.54713461560562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce381eb4c8e71%3A0x10950549e28c29e5!2sHari%20Masjid!5e0!3m2!1sen!2sin!4v1619379274467!5m2!1sen!2sin"
          width="300"
          height="200"
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
