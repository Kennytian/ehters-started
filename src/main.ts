import { BigNumber, ethers } from "ethers";
import type { ContractReceipt } from "ethers";

class EtherStarted {
  constructor() {}

  signer: any;
  providers: any;
  busd: any;

  public init() {
    const provider = new ethers.providers.Web3Provider({ host: "" });
  }

  async connect() {
    this.signer = this.providers.getSigner();
  }

  async connectContract() {
    if (!this.signer) {
      this.init();
    }

    this.busd = new ethers.Contract(
      "",
      ["function balanceOf(address account) external view returns (uint256)"],
      this.signer
    );
  }

  async getBalance() {
    if (!this.busd) {
      await this.connectContract();
    }
    const balance: BigNumber = await this.busd.balanceOf("0xd35ac571e4a5AA3d067C87E528415E7ea2612439");
    console.log("balance is:", balance.toString());
  }

  async transfer() {
    if (!this.busd) {
      await this.connectContract();
    }

    const tx = await this.busd.transfer("0xd35ac571e4a5AA3d067C87E528415E7ea2612439", "1000000000000000000");
    const wait: ContractReceipt = await tx.wait();

    console.log(wait);
    console.log(wait.transactionHash);
  }
}

new EtherStarted().init();
