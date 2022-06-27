import { useEffect } from "react";
import Head from "next/head";
import "../styles/master.scss";
import "../styles/bootstrap-grid.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      setTimeout(() => {
        if (!url.includes("#")) {
          document.querySelector("#top").scrollIntoView({
            behavior: "smooth",
          });
        } else {
          document.querySelector(`#${url.split("#")[1]}`).scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 2);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
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
        <meta
          name="description"
          content="Engage and empower NU community, through technology, to develop their communities. IEEE NU | Visualize The Future"
          key={"descripton"}
        />
        <meta
          property="og:title"
          content="IEEE @ Nile University Student Branch"
          key={"title"}
        />
        {/* <link rel="canonical" href="https://dev.ieeenu.com" /> */}
        <meta
          property="og:image"
          content="https://i.ibb.co/D1BHjTd/cover.png"
          key={"image"}
        />
        <meta
          property="og:description"
          content="Engage and empower NU community, through technology, to develop their
          communities. IEEE NU | Visualize The Future"
          key={"ogdescription"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preload" href="/logo.svg" as="image" />
        <link rel="preload" href="/assets/Footer.svg" as="image" />
      </Head>
      <span id="top"></span>
      <Navbar />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-B8YNHREF4V`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B8YNHREF4V');
        `}
      </Script>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
