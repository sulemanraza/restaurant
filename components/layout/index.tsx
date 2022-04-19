import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = (props: { children: any }) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
