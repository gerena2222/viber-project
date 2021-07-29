/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/vendor/fontawesome/css/all.min.css" />
        <link
          rel="stylesheet"
          href="/vendor/owlcarousel/dist/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="/vendor/owlcarousel/dist/assets/owl.theme.default.min.css"
        />
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/vendor/jquery/jquery.min.js"></script>
        <script src="/vendor/owlcarousel/dist/owl.carousel.min.js"></script>

        <link rel="stylesheet" href="/css/style.css" />
        <script src="/js/main.js"></script>
        <script src="/js/testimonial.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
