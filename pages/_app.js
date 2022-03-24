import { useEffect } from "react";
import Head from "next/head";
import "../styles/master.scss";
import "../styles/bootstrap-grid.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setTimeout(() => {
        document.querySelector("#top").scrollIntoView({
          behavior: "smooth",
        });
      }, 2);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    // Smooth href Scorlling
    document.querySelectorAll("a").forEach((anchor) => {
      if (anchor.href.includes("#")) {
        const elm = anchor.href.slice(anchor.href.indexOf("#"));
        console.log(elm);
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(elm).scrollIntoView({
            behavior: "smooth",
          });
        });
      }
    });
  }, []);

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

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
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Engage and empower NU community, through technology, to develop their communities. IEEE NU | Visualize The Future"
        />
        {/* <meta
          property="og:title"
          content="IEEE @ Nile University Student Branch"
        /> */}
        <link rel="canonical" href="http://example.com/post-permalink" />
        <meta
          property="og:image"
          content="https://i.ibb.co/D1BHjTd/cover.png"
          key={"image"}
        />
        <meta
          property="og:description"
          content="Engage and empower NU community, through technology, to develop their
          communities. IEEE NU | Visualize The Future"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <span id="top"></span>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
