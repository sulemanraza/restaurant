import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";
import Script from "next/script";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
