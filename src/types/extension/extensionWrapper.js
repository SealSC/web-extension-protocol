import {ExtensionChecker} from "./extensionChecker";
import {ExtensionConnector} from "./extensionConnector";
import {ExtensionActions} from "./extensionActions";
import {ExtensionContractCaller} from "./extensionContractCaller";
import {predefinedStatus} from "../../consts/predefinedStatus";
import {Result} from "../result";

class ExtensionWrapper {
  constructor() {
    this.checker = new ExtensionChecker(this)
    this.connector = new ExtensionConnector(this)
    this.actions = new ExtensionActions(this)
    this.contractCaller = new ExtensionContractCaller(this)
    this.webjsInstance = null
  }

  async load() {return new Result(predefinedStatus.NOT_LOADED(null))}
}

export {
  ExtensionChecker,
  ExtensionConnector,
  ExtensionActions,
  ExtensionContractCaller,
  ExtensionWrapper,
}