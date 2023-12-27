import React from "react";
import "./BrewConnect.css";
import Epicurious from "../../img/products/logos/epicurious.jpg";
import GQ from "../../img/products/logos/gq.png";
import CNN from "../../img/products/logos/CNN-logo.png";
import Forbes from "../../img/products/logos/forbes.png";
import WSJ from "../../img/products/logos/wsj.png";
import Vogue from "../../img/products/logos/vogue.jpg";

const BrewConnect = () => {
  return (
    <div className="trade-connect">
      <div className="title">
        "Sip, Explore, Love: Your Coffee Odyssey Begins at BeanBazaar."
      </div>
      <div className="media-logos">
        <img src={Epicurious} alt="Epicurious" />
        <img src={Vogue} alt="Vogue" />
        <img src={GQ} alt="GQ" />
        <img src={Forbes} alt="Forbes" />
        <img src={CNN} alt="CNN" />
        <img src={WSJ} alt="Wall Street Journal" />
      </div>
    </div>
  );
};

export default BrewConnect;
