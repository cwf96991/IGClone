// The minimum ABI to get ERC20 Token balance
let minABI = [
  // balanceOf
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
  // decimals
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    type: "function",
  },
];

import React, { useEffect, useState } from "react";

import { useWeb3Modal } from "./web3";
import web3 from "web3";

const useBalance = (chain, tokenAddress) => {
  const [signerBalance, setSignerBalance] = useState(0);
  const { networks, connectWallet, disconnectWallet, provider, error } =
    useWeb3Modal();
  const getAddress = async () => {
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    let contract = web3.eth.contract(minABI).at(tokenAddress);
    contract.balanceOf(address, (error, balance) => {
      // Get decimals
      contract.decimals((error, decimals) => {
        // calculate a balance
        balance = balance.div(10 ** decimals);
        setSignerBalance(balance.toString());
      });
    });
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

  return chain == null || tokenAddress == null ? -1 : signerBalance ?? 0;
};

export default useBalance;
