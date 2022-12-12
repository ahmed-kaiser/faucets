import { createContext, useState } from "react";
import img1 from "../assets/Images/arbitrum.svg";
import img2 from "../assets/Images/avalanche.svg";
import img3 from "../assets/Images/bsc.svg";
import img4 from "../assets/Images/ethereum.svg";
import img5 from "../assets/Images/fantom.svg";
import img6 from "../assets/Images/harmony.svg";
import img7 from "../assets/Images/poa.svg";
import img8 from "../assets/Images/polygon.svg";

export const NetworksContext = createContext(null);

const networks = [
  { img: img1, title: "Arbitrum Rinkeby" },
  { img: img2, title: "Avalanche Fuji" },
  { img: img3, title: "BNB Chain Testnet" },
  { img: img4, title: "Ethereum Rinkeby" },
  { img: img5, title: "Fantom Testnet" },
  { img: img6, title: "Harmony Testnet" },
  { img: img7, title: "POA Network Sokol" },
  { img: img8, title: "Polygon Mumbai" },
];

const NetworksProvider = ({ children }) => {
  const [selectedNetwork, setSelectedNetwork] = useState(networks[3]);

  return (
    <NetworksContext.Provider
      value={{ networks, selectedNetwork, setSelectedNetwork }}
    >
      {children}
    </NetworksContext.Provider>
  );
};

export default NetworksProvider;
