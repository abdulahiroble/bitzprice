import Head from "next/head";
import React from "react";
import Nav from "./nav";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>BitzPrice</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
      </Head>
      <Nav />
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;
