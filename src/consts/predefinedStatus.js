import {Status} from "../types/status";

const predefinedStatus =  {
  SUCCESS :                  (userData)=>{return new Status(0, 'success', userData)},
  NO_EXTENSION :             (userData)=>{return new Status(1, 'extension not install.', userData)},
  NOT_SPECIFIED_EXTENSION :  (userData)=>{return new Status(2, 'no specified web extension.', userData)},
  NOT_LOADED :               (userData)=>{return new Status(3, 'web extension not loaded to seal proxy.', userData)},
  NOT_SUPPORT :              (userData)=>{return new Status(4, 'not supported operation or type.', userData)},
  NOT_LOGIN :                (userData)=>{return new Status(5, 'web extension not login.', userData)},
  BAD_PARAM :                (userData)=>{return new Status(6, 'bad action input parameter.', userData)},
  NO_ACCOUNT :               (userData)=>{return new Status(7, 'no account in extension.', userData)},
  UNKNOWN :                  (userData)=>{return new Status(0x1000, 'unknown error occurred', userData)},
}

export {
  predefinedStatus,
}