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
    <div className="footer">
      <img src="/assets/Footer.svg" alt={"footer"} className="round" />
      <footer className="row">
        <div className="cont row">
          <section className="navigation col-12 col-md-6 col-lg-4 mt-4">
            <h2 className="mb-3">Navigation</h2>
            <ul>
              <li>
                <Link href="/">
                  <a className="link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="link">About</a>
                </Link>
              </li>
              <li>
                <Link href="/membership">
                  <a className="link">Membership</a>
                </Link>
              </li>
              <li>
                <Link href="/spacesummit">
                  <a className="link">Egyptian Space Summit</a>
                </Link>
              </li>
            </ul>
          </section>
          <section className="links col-12 col-md-6 col-lg-4 mt-4">
            <h2 className="mb-3">External Links</h2>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://ieee.org"
                  className="link"
                >
                  IEEE.org
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://ieeexplore.ieee.org/Xplore/home.jsp"
                  className="link"
                >
                  IEEE Explore Digital Library
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://standards.ieee.org/?_ga=2.166069502.1382483501.1627826864-1802152504.1622396110"
                  className="link"
                >
                  IEEE Standards
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://spectrum.ieee.org/?_ga=2.202702929.1382483501.1627826864-1802152504.1622396110"
                  className="link"
                >
                  IEEE Spectrum
                </a>
              </li>
            </ul>
          </section>
          <section className="contacts col-12 col-md-6 col-lg-4 mt-4">
            <h2>Contact Us</h2>
            <div className="socialLinks">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/IEEENUSB"
              >
                <FaFacebook />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/ieeenusb/"
              >
                <FaInstagram />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:ieeenu@nu.edu.eg"
              >
                <FaEnvelope />
              </a>
            </div>
          </section>
        </div>
      </footer>
      <div>
        <div className="footerTail gap-h-dot5">
          <p>Made with</p> <FaHeart /> <p>and</p> <FaMugHot />
          <p>in IEEENU</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
