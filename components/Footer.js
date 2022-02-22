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
              <Link href="/Membership">
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
              <a target="_blank" href="https://ieee.org" className="link">
                IEEE.org
              </a>
            </li>
            <li>
              <a target="_blank" href="https://ieee.org" className="link">
                IEEE Explore Digital Library
              </a>
            </li>
            <li>
              <a target="_blank" href="https://ieee.org" className="link">
                IEEE Standards
              </a>
            </li>
            <li>
              <a target="_blank" href="https://ieee.org" className="link">
                IEEE Spectrum
              </a>
            </li>
          </ul>
        </section>
        <section className="contacts col-12 col-md-6 col-lg-4 mt-4">
          <h2>Contact Us</h2>
          <div className="socialLinks">
            <a target="_blank" href="https://www.facebook.com/IEEENUSB">
              <FaFacebook />
            </a>
            <a target="_blank" href="https://www.instagram.com/ieeenusb/">
              <FaInstagram />
            </a>
            <a target="_blank" href="mailto:ieeenu@nu.edu.eg">
              <FaEnvelope />
            </a>
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
