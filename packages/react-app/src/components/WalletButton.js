import React, { useEffect, useState } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import dp from "../assets/walletjazz.jpg";
import arrow from "../assets/arrow.png"; 

import styles from "../styles";

const WalletButton = () => {
  const [rendered, setRendered] = useState("");

  const { ens } = useLookupAddress();
  const { account, activateBrowserWallet, deactivate } = useEthers();

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  return (
    <>

{account && ( <div className="hidden sm:block">  <button
                  type="button"
                  
                  className="z-50 flex gap-2 px-4 py-[6px] hover:border-[1px] hover:px-[15px] hover:py-[5px] shadow-lg  flex-row justify-center items-center my-5 bg-[#2D2F36]  rounded-l-3xl rounded-r-3xl  cursor-pointer"
                >
                  <img src="https://cdn.productboard.com/production/attachments/1ed607c09813afccd00eecd5507ec12fef6731be5001654a410282df70b9eca3/portal_cover/ETH-logo.png" className="h-6 w-6"/>
                <p className="font-poppins font-bold text text-white ">
                 Goerli
                  </p>
                </button></div> )}

 
    <button
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
      className="flex gap-2 px-6 py-[6px]  text-white shadow-lg  flex-row justify-center items-center my-5 bg-[#2D2F36]  rounded-l-3xl rounded-r-3xl  cursor-pointer"
    >
      
      {account && (<img src={dp}  className="w-6 h-6 rounded-[100%] mr-2" /> )}

       <p className="font-poppins font-bold text text-white ">
     
      {rendered === "" && "Connect Wallet"} 

      {rendered !== "" &&  rendered}

 
      </p>
      

    </button>


    {!account && (  <div className="fixed w-[200px] top-8 right-44">
 <img src={arrow} alt="" className="w-[200px] " />
<p   onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}  className="font-bold border-2 border-red-700 p-4 rounded-xl text-white ">Click Here to connect Wallet</p>
                </div>)}

 </>


  );
};

export default WalletButton;
