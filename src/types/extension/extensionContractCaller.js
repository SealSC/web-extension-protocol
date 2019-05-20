import {Result} from "../result";
import {predefinedStatus} from "../../consts/predefinedStatus";

class ExtensionContractCaller {
  constructor(extension) {
    this.extension = extension
  }

  async onChainCall() {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async offChainCall() {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
}

export {
  ExtensionContractCaller
}