
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
          R-85/8 Near Hari Masjid
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
            href="https://www.facebook.com/jccstudy"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/jamiacoachingcenter/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@JAMIACOACHINGCENTERS"
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
            <a href="/School" className="hover:underline">
              School
            </a>
          </li>
          <li className="mb-2">
            <a href="/Coaching" className="hover:underline">
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
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d218.99944643738544!2d77.28632144452406!3d28.570028677225267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM0JzEyLjMiTiA3N8KwMTcnMTEuMiJF!5e0!3m2!1sen!2sin!4v1719153572712!5m2!1sen!2sin"
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