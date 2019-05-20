import Decimal from "decimal.js"
import {predefinedStatus} from "./consts/predefinedStatus";
import {Status} from "./types/status";

function mulWithPow(original, base, pow = 1) {
  Decimal.set({ precision: 100, toExpPos: 100 })
  let multiple = Decimal.pow(base, pow)
  return Decimal.mul(original, multiple).floor().toString()
}

function toFixedDown(num, fixed) {
  Decimal.set({ precision: 100, toExpPos: 100 })
  return (new Decimal(num)).toFixed(fixed, Decimal.ROUND_DOWN)
}

function surfaceDiffOf(target, base, depth = 0, depthMark = 0) {
  if(!("object" === typeof target) || null === base) {
    return predefinedStatus.BAD_PARAM(target)
  }

  if(!("object" === typeof base) || null === base) {
    return predefinedStatus.BAD_PARAM(base)
  }

  let baseKeys = Reflect.ownKeys(base)
  let baseProp = Reflect.getPrototypeOf(base)
  let basePropKeys = []
  if("object" === typeof baseProp  && null !== baseProp) {
    basePropKeys = Reflect.ownKeys(baseProp)
  }

  baseKeys = baseKeys.concat(basePropKeys)

  let diffKey = []
  baseKeys.forEach(k => {
    if(typeof target[k] !== typeof base[k]) {
      diffKey.push({key: k, deepDiff: null, depth: depthMark})
    } else {
      if(depth > 0) {
        if("object" === typeof target[k]) {
          let childDiff = surfaceDiffOf(target[k], base[k], depth - 1, depthMark + 1)
          if(!(childDiff instanceof Status)) {
            if(0 !== childDiff.length) {
              diffKey.push({key: k, deepDiff: childDiff, depth: depthMark})
            }
          }
        }
      }
    }
  })

  return diffKey
}

export default {
  mulWithPow,
  toFixedDown,
  surfaceDiffOf,
}
