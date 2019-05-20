import {Status} from "./status";
import {ContractWrapper} from "./contractWrapper";
import {Result} from "./result";
import * as extension from "./extension/extensionWrapper";

let types = Object.assign({}, {
  Status, Result, ContractWrapper,
}, extension)

export default types