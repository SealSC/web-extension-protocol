import {Result} from "../result";
import {predefinedStatus} from "../../consts/predefinedStatus";

class ExtensionChecker {
  constructor(extension) {
    this.extension = extension
  }

  async installed(){return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async isMainnet(){return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async isLogin() {return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
}

export {
  ExtensionChecker
}