import {Result} from "../result";
import {predefinedStatus} from "../../consts/predefinedStatus";

class ExtensionConnector {
  constructor(extension) {
    this.extension = extension
  }

  async link() { return new Result(null, predefinedStatus.NOT_SUPPORT(null))}
  async unlink() { return new Result(null, predefinedStatus.NOT_SUPPORT(null))}

}

export {
  ExtensionConnector
}