import { agLog } from "./aglog.js";

export function agTrace() {
  try {
    throw new Error();
  } catch(e) {
      // To be optimized(Regex)
      agLog(`${e.stack.split('at ')[2].split(' ')[0]} function`)
  }
}
