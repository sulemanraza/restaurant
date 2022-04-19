import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
        <link
          rel="preload"
          as="font"
          crossOrigin=""
          href="/fonts/Dosis/Dosis-ExtraLight.ttf"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin=""
          href="/fonts/Dosis/Dosis-Light.ttf"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin=""
          href="/fonts/Dosis/Dosis-Regular.ttf"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin=""
          href="/fonts/Dosis/Dosis-Medium.ttf"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin=""
          href="/fonts/Dosis/Dosis-SemiBold.ttf"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin=""
          href="/fonts/Dosis/Dosis-Bold.ttf"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
