import React from "react";
import { useEthers } from "@usedapp/core";

import styles from "./styles";
import { usePools } from "./hooks";
import { send, swap, fund, currencies, recieve, logo } from "./assets";
import { Exchange, Loader, WalletButton } from "./components";

const App = () => {
  const { account } = useEthers();
  const [poolsLoading, pools] = usePools();

  return (
<div className="bg-[#202124] w-full min-h-screen">
   
<nav className="fixed  w-full justify-between ">
<header className="flex items-center px-6 py-2 "><div className="flex items-center flex-grow basis-0"> 
<a href="#"  className="flex gap-2"> <img src={logo} alt="logo" className="w-8 h-8 object-contain"  />  <text className="text-white text-2xl font-semibold">CRYPTWAY</text></a>
       </div>
    <div className="justify-end flex gap-2">
    
                <WalletButton />    
          </div></header> 


 


<a   href="https://github.com/orgs/cryptway/discussions" > 
<button
                type="button"
                  
                  className=" fixed gap-2 bg-purple-600  bottom-2 right-5 flex px-6 py-[6px] border-[1px] border-[#41444F] hover:px-[23px] hover:py-[5px] shadow-lg  flex-row justify-center items-center my-5  rounded-l-3xl rounded-r-3xl  cursor-pointer"
                >
                  
                  <p className="font-poppins font-bold text text-white text-sm ">
                   Request Feature
                  </p>
                </button> </a>



<div class="ml-8 mt-8 fixed  ">
<div class="bg-[#2D2F36] content-box rounded-xl p-3 grid sm:grid-cols-1   gap-4 border-[1.5px] border-[#41444F]">

 <div>
    <a href="https://app.cryptway.in/"><button type="button" class=" p-2 rounded  hover:shadow hover:bg-[#41444F]"><img src={recieve}  className="w-10 h-10 object-contain" /></button></a>
 </div>
 
 <div>
    <a href="https://app.cryptway.in/send"><button type="button" class=" p-2 rounded  hover:shadow hover:bg-[#41444F]"><img src={send}  className="w-10 h-10 object-contain" /></button></a>
 </div>

 <div>
    <a href="#"><button type="button" class=" p-2 rounded  shadow bg-[#41444F]"><img src={swap}  className="w-10 h-10 object-contain" /></button></a>
 </div>

 <div>
    <a href="https://app.cryptway.in/fund"><button type="button" class=" p-2 rounded  hover:shadow hover:bg-[#41444F]"><img src={fund}  className="w-10 h-10 object-contain" /></button></a>
 </div>

 <div>
    <a href="https://app.cryptway.in/currencies"><button type="button" class=" p-2 rounded  hover:shadow hover:bg-[#41444F]"><img src={currencies}  className="w-10 h-10 object-contain" /></button></a>
 </div>
 
</div>
</div>           

</nav>





 <div className="flex-1 flex justify-start   items-center flex-col w-full p-5 ">
     
<div className="bg-[#2D2F36] mt-20   relative w-[30rem]   md:w-[32rem] rounded-3xl p-4 content-box">
  
  <div className="px-2 flex items-center text-white justify-between font-semibold text-xl">
    <span> Swap </span>

  </div>

  
  
  {account ? (
                  poolsLoading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
  
   
  </div>
  
   

</div>

</div>
  
  );
};

export default App;