import { LineColor } from "./util/colorStyle.js";

export function agline(_lineColor = LineColor()) {
  const _LINECOLOR = `color: ${_lineColor}`
  return function(lineNumber) {
    if(typeof lineNumber === 'number') {
      let line = ''
      for(let i = 0; i < lineNumber; i++) {
        i === 0 ? line += '-' : line += ' -'
      }
      console.log(`%c${line}`,_LINECOLOR);
    } else {
      throw new Error('Please enter a numeric type!')
    }
  }
}