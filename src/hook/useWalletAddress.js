import { useState, useEffect } from "react";
import { useWeb3Modal } from "./web3";

function useWalletAddress() {
  const [address, setAddress] = useState();
  const { provider } = useWeb3Modal();
  const getAddress = async () => {
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setAddress(address);
  };
  const accountChanged = async (accounts) => {
    setAddress(accounts[0]);
  };
  useEffect(() => {
    window.ethereum.on("accountsChanged", accountChanged);

    return () => {
      window.ethereum.removeListener("accountsChanged", accountChanged);
    };
  }, []);
  useEffect(() => {
    if (provider) getAddress();
    else setAddress("");
  }, [provider]);
  return address??"";
}

export default useWalletAddress;
