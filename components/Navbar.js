import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const [opened, setOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const nav = document.querySelector("nav");
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    // Self Closing Beahviour
    const handleRouteChange = (url) => {
      nav.classList.remove("opened");
      setOpened(false);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
  }, []);

  const openMenu = () => {
    const nav = document.querySelector("nav");
    if (nav.classList.contains("opened")) {
      nav.classList.remove("opened");
      setOpened(false);
    } else {
      nav.classList.add("opened");
      setOpened(true);
    }
  };
  return (
    <nav>
      <Link href="/">
        <a>
          <img src="/logo.svg" className="logo" />
        </a>
      </Link>
      <div className="section">
        <Link href="/">
          <a className="link">Home</a>
        </Link>
        <Link href="/about">
          <a className="link">About</a>
        </Link>
        {/* <Link href="/lounge">
          <a className="link">Technical Lounge</a>
        </Link> */}
        <Link href="/spacesummit">
          <a className="link">Egyptian Space Summit</a>
        </Link>
      </div>
      <div className="section">
        <Link href="/membership">
          <a className="link">Membership</a>
        </Link>
      </div>
      <span id="menu" onClick={openMenu}>
        <svg
          height="32px"
          id="hamburgerMenu"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
        </svg>
      </span>
      {windowWidth <= 920 && opened === true ? (
        <div>
          <ul className="gap-v-1">
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
            {/* <li>
              <Link href="/lounge">
                <a className="link">Technical Lounge</a>
              </Link>
            </li> */}
            <li>
              <Link href="/spacesummit">
                <a className="link">Egyptian Space Summit</a>
              </Link>
            </li>
            <li>
              <Link href="/membership">
                <a className="link">Membership</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
