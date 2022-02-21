import Head from "next/head";
import "../styles/master.scss";
import "../styles/bootstrap-grid.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
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
        <meta
          property="og:title"
          content="IEEE @ Nile University Student Branch"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://dev.ieeenu.com" />
        <meta
          property="og:image"
          content="https://i.ibb.co/xM8HvGb/cover.png"
        />
        <meta
          property="og:description"
          content="Engage and empower NU community, through technology, to develop their
          communities. IEEE NU | Visualize The Future"
        />
        <meta
          name="twitter:title"
          content="IEEE @ Nile University Student Branch"
        />
        <meta
          name="twitter:description"
          content="Engage and empower NU community, through technology, to develop their
          communities. IEEE NU | Visualize The Future"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/xM8HvGb/cover.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
