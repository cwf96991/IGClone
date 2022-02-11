import React, { useEffect, useState } from "react";
import Blockies from "react-blockies";
import web3 from "web3";
import useWalletAddress from "../hook/useWalletAddress";
import useChainBalance from "../hook/useChainBalance";
import { useWeb3Modal } from "../hook/web3";
const truncateAddress = (address) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

const ConnectWallet = ({ chain }) => {
  const walletAddress = useWalletAddress();
  const balance = useChainBalance();
  const { connectWallet, disconnectWallet } = useWeb3Modal();

  const handleClickConnect = async () => {
    await connectWallet();
  };

  const handleClickAddress = () => {
    disconnectWallet();
  };

  return (
    <button
      className="flex flex-col btn btn-outline btn-base-100 text-gray-500 rounded-full mx-2 btn-sm md:btn-md"
      onClick={walletAddress ? handleClickAddress : handleClickConnect}
    >
      <Blockies
        className="rounded-full  mr-2"
        seed={walletAddress.toLowerCase()}
        size={8}
        scale={3}
      />

      <div>
        {walletAddress ? truncateAddress(walletAddress) : "Connect Wallet"}
      </div>
      <div>{balance}</div>
    </button>
  );
};

export default ConnectWallet;
