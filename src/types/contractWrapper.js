class ContractWrapper {
  constructor(abi, address, contractInstance) {
    this.abi = abi
    this.address = address
    this.contract = contractInstance
  }
}

export {
  ContractWrapper
}