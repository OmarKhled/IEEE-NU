import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaHeart,
  FaMugHot,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <img src="/assets/Footer.svg" />
      <footer className="row">
        <section className="navigation col-12 col-md-6 col-lg-4 mt-4">
          <h2 className="mb-3">Navigation</h2>
          <ul>
            <a className="link" href="/">
              <li>Home</li>
            </a>
            <li>About</li>
            <li>Membership</li>
            <li>Egyptian Space Summit</li>
          </ul>
        </section>
        <section className="links col-12 col-md-6 col-lg-4 mt-4">
          <h2 className="mb-3">External Links</h2>
          <ul>
            <li>IEEE.org</li>
            <li>IEEE Explore Digital Library</li>
            <li>IEEE Standards</li>
            <li>IEEE Spectrum</li>
          </ul>
        </section>
        <section className="contacts col-12 col-md-6 col-lg-4 mt-4">
          <h2>Contact Us</h2>
          <div className="socialLinks">
            <FaFacebook />
            <FaInstagram />
            <FaEnvelope />
          </div>
        </section>
      </footer>
      <div>
        <div className="footerTail gap-h-dot5">
          <p>Made with</p> <FaHeart /> <p>and</p> <FaMugHot />
          <p>in IEEENU</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
