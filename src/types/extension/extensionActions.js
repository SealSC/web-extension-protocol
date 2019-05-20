import {Result} from "../result";
import {predefinedStatus} from "../../consts/predefinedStatus";

class ExtensionActions {
  constructor(extension) {
    this.extension = extension
  }
  async contractOffChainCall() {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async invokeContract() {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async loadContract() {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async transfer() {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async transferToken() {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async getAccount() {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
}

export {
  ExtensionActions
}