import {Result} from "../result";
import {predefinedStatus} from "../../consts/predefinedStatus";

class ExtensionActions {
  constructor(extension) {
    this.extension = extension
  }

  async loadContract(abi, address) {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async transfer(to, amount, memo, extra) {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async transferToken(wrapper, to, amount, extra) {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async getAccount() {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}

  async getCurrentHeight() {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async getBlockByHeight(height) {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async getBlockByHash(hash) {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async getBalance(address, token, abi) {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}

  async getTransaction(txHash) {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async getTokenInfo(tokenAddress, abi) {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}


  async invoke(methods, ...args) {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
}

export {
  ExtensionActions
}