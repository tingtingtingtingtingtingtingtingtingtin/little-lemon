import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Confirmation from "../../components/confirmation/Confirmation";

const Confirm = () => {
  return (
    <div className="small-page">
      <Header />
      <Confirmation />
      <Footer />
    </div>
  );
};

export default Confirm;
