import Fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";

import Prices from "../components/Prices";

const Home = props => {
  return (
    <Layout>
      <h1>Welcome to BitzPrice</h1>
      {/* <div>{props.bpi.bpi.USD.rate}</div> */}
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi} />
    </Layout>
  );
};

Home.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

  const data = await res.json();

  return {
    bpi: data
  };
};

export default Home;
