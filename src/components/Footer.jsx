import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 flex flex-col md:flex-row justify-between">
      <div className="flex-1 mx-4 mb-8 md:mb-0">
        <h3 className="text-xl font-semibold border-b-2 border-white pb-2 mb-4">
          CONTACT US
        </h3>
        <p className="mb-4">
          <strong>Address</strong>
          <br />
          R-85/8 near Hari Masjid
          <br />
          Joga Bai Extension, Jamia Nagar
          <br />
          Okhla, South Delhi - 110025
        </p>
        <p className="mb-4">
          <strong>Contact Numbers</strong>
          <br />
          7011339746
          <br />
          9643027784
          <br />
          7011327025
        </p>
        <p>
          <strong>Follow Us</strong>
          <br />
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline"
          >
            YouTube
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline"
          >
            X
          </a>
        </p>
      </div>
      <div className="flex-1 mx-4 mb-8 md:mb-0">
        <h3 className="text-xl font-semibold border-b-2 border-white pb-2 mb-4">
          QUICK LINKS
        </h3>
        <ul>
          <li className="mb-2">
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="/school" className="hover:underline">
              School
            </a>
          </li>
          <li className="mb-2">
            <a href="/coaching" className="hover:underline">
              Coaching
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 mx-4">
        <h3 className="text-xl font-semibold border-b-2 border-white pb-2 mb-4">
          LOCATION MAP
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14026.810057138897!2d77.26939132889154!3d28.54713461560562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce381eb4c8e71%3A0x10950549e28c29e5!2sHari%20Masjid!5e0!3m2!1sen!2sin!4v1619379274467!5m2!1sen!2sin"
          width="300"
          height="200"
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
          className="rounded-lg w-full"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
