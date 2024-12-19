
import fs from "fs";
import {scValToNative} from "@stellar/stellar-sdk"
import {invokeCustomContract} from "./contract";
import { config } from './env_config';


// import * as StellarSdk from "@stellar/stellar-sdk";

export const getTotalPairs = async (protocolName: string, network: "MAINNET" | "TESTNET") => {
  let loadedConfig;
  let contractsJsonPath;
    if (network === "MAINNET") {
    loadedConfig = config('mainnet');
    contractsJsonPath = "/workspace/public/mainnet.contracts.json";
    } else {
    loadedConfig = config('testnet');
    contractsJsonPath = "/workspace/public/testnet.contracts.json";
  }
  const contractsJsonData = fs.readFileSync(contractsJsonPath, "utf-8");
    const contractsJson = JSON.parse(contractsJsonData);


  if (protocolName === "soroswap") {
    const factoryAddress = contractsJson['soroswap_factory'];

    // export async function invokeCustomContract(
    //   contractId: string,
    //   method: string,
    //   params: xdr.ScVal[],
    //   source: Keypair,
    //   simulation?: boolean,
    // )
    const source = undefined;
    const totalPairs = await invokeCustomContract(
                                factoryAddress,
                                "all_pairs_length", 
                                [], 
                                loadedConfig.user, 
                                loadedConfig,
                                true);
    const totalPairsNative=scValToNative(totalPairs.result.retval)
    
      console.log("totalPairsNative: ", totalPairsNative)
    return totalPairsNative;
  }
  else if (protocolName === "phoenix") {
    const factoryAddress = contractsJson['phoenix_factory'];

    // export async function invokeCustomContract(
    //   contractId: string,
    //   method: string,
    //   params: xdr.ScVal[],
    //   source: Keypair,
    //   simulation?: boolean,
    // )
    const source = undefined;
    const totalPairs = await invokeCustomContract(
                                factoryAddress,
                                "query_pools", 
                                [], 
                                loadedConfig.user, 
                                loadedConfig,
                                true);
    const poolsVec=scValToNative(totalPairs.result.retval)
    
    return poolsVec.length;

  }
  else {
    throw new Error("Protocol not supported");
  }

};
