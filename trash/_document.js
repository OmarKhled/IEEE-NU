import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
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
          content="https://i.ibb.co/D1BHjTd/cover.png"
        />
        <meta
          property="og:description"
          content="Engage and empower NU community, through technology, to develop their
          communities. IEEE NU | Visualize The Future"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <script
          async
          defer
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
        ></script>
        <Main />
        <NextScript />
        {/* <script
          async
          defer
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
        ></script> */}
      </body>
    </Html>
  );
}
