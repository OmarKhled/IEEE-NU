import { useEffect } from "react";
import Head from "next/head";
import "../styles/master.scss";
import "../styles/bootstrap-grid.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    document.addEventListener(
      "wheel",
      function (e) {
        e.preventDefault();
      },
      {
        passive: true,
      }
    );
    let lastMove = Date.now();
    document.addEventListener("scroll", (e) => {
      console.log("hi");
      if (Date.now() - lastMove < 31) {
        e.preventDefault();
        // 32 frames a second
        return;
      } else {
        lastMove = Date.now();
      }
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/favicon-16x16.png"
        />
        <link rel="manifest" href="/icon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
