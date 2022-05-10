import { ethers, utils } from "ethers";

export class Basic {
  async getBalance(): Promise<string> {
    // const provider = ethers.getDefaultProvider("https://eth-mainnet.alchemyapi.io/v2/R2XbqFHgp15ii8NMkfTTuv4BeGLDJEBY");
    const provider = ethers.getDefaultProvider();
    const balance = await provider.getBalance("0xd35ac571e4a5AA3d067C87E528415E7ea2612439");
    return utils.formatEther(balance);
  }
}
