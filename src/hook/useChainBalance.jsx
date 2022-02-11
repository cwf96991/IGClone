import React, { useEffect, useState } from "react";

import { useWeb3Modal } from "./web3";
import web3 from "web3";

const useChainBalance = (chain) => {
  const [signerBalance, setSignerBalance] = useState(0);
  const { networks, connectWallet, disconnectWallet, provider, error } =
    useWeb3Modal();

  const getAddress = async () => {
    const signer = provider.getSigner();

    const balance = await signer.getBalance();

    setSignerBalance(web3.utils.fromWei(balance.toString(), "ether"));
  };
  const accountChanged = async (accounts) => {
    disconnectWallet();
    await connectWallet();
  };
  const networkChanged = async (accounts) => {
    disconnectWallet();
    await connectWallet();
    if (chain != null) {
      await checkNetwork(chain ?? "polygon");
    }
  };
  const checkNetwork = async (network) => {
    try {
      if (window.ethereum.networkName !== network) {
        switchNetwork(network);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const switchNetwork = async (networkName) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName],
          },
        ],
      });
    } catch (err) {
      // setError(err.message);
    }
  };
  useEffect(() => {
    window.ethereum.on("accountsChanged", accountChanged);

    return () => {
      window.ethereum.removeListener("accountsChanged", accountChanged);
    };
  }, []);
  useEffect(() => {
    window.ethereum.on("chainChanged", networkChanged);

    return () => {
      window.ethereum.removeListener("chainChanged", networkChanged);
    };
  }, []);

  useEffect(() => {
    if (provider) getAddress();
  }, [provider]);

  return signerBalance ?? 0;
};

export default useChainBalance;
