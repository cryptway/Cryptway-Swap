import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x153217C824DB4657fBEe8038400F8aafE4830b35";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/2zWpg-bKU81LwEnCUNcrMLTpqr6jV6Wf",
  },
};

