import { useEffect, useState } from "react";
import Web3 from "web3";

import ABI from "./ABI.json";
import "./Wallet.css";

const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(false);

  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const contract = new web3.eth.Contract(
        ABI,
        "0x27183f46Bb62CA73e800031cF718B3106C0a91EC"
      );
      setConnected(true);
      saveState({ web3: web3, contract: contract });
    } catch (error) {
      alert("Please install Metamask");
    }
  };

  return (
    <>
      <div className='header'>
        {/* {false && (
          <button className='connectBTN' onClick={init}>
            <a href='https://metamask.app.link/dapp/sriche.netlify.app/'>
              Click For Mobile
            </a>
          </button>
        )} */}
        <button className='connectBTN' onClick={init}>
          {connected ? "Connected" : "Connect Metamask"}
          {console.log(connected)}
        </button>
      </div>
    </>
  );
};
export default Wallet;
