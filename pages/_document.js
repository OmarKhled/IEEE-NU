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
          content="https://res.cloudinary.com/ieeenu/image/upload/v1645572827/cover_u3aypu.png"
        />
        <meta
          property="og:description"
          content="Engage and empower NU community, through technology, to develop their
          communities. IEEE NU | Visualize The Future"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
