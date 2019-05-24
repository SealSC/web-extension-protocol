import {Result} from "../result";
import {predefinedStatus} from "../../consts/predefinedStatus";

class ExtensionContractCaller {
  constructor(extension) {
    this.extension = extension
  }

  async onChainCall(wrapper, method, param, amount, extra) {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async offChainCall(wrapper, method, param) {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
}

export {
  ExtensionContractCaller
}