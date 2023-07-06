import React from "react";
import Footer from "../../common/footer/Footer";
import Head from "../../common/header/Head";
import Hero from "../../components/hero/Hero";
import Leafletmap from "../../components/map/Leafletmap";
import Market from "../../components/market/Market";
import Featured from "../../components/properties/Featured";
import GetStarted from "../../components/properties/GetStarted";
import WhyInvest from "../../components/whyInvest/WhyInvest";

const Map = () => {
  return (
    <>
      <header>
        <Head />
      </header> 
      
      <Hero />
      <Leafletmap />
      <WhyInvest />
      <Featured />
      <GetStarted />
      <Market />

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Map;
