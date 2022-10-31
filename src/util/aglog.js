import * as color from './colorStyle.js'

function  _agLog(_nowDate) {
  let _HOURS = _nowDate.getHours()
  let _MINUTES = _nowDate.getMinutes()
  let _SECONDS = _nowDate.getSeconds()
  _MINUTES = _MINUTES < 10 ? '0'+_MINUTES : _MINUTES
  _HOURS =  _HOURS < 10 ? '0'+_HOURS : _HOURS
  _SECONDS = _SECONDS < 10 ? '0'+_SECONDS : _SECONDS
  const _DATE = `${_HOURS}:${_MINUTES}:${_SECONDS}`
  return function(_TYPE) {
    return function(_MESSAGE) {
      console.log(`%cTime: %c${_DATE} %cType: %c${_TYPE} %cMessage: %c${_MESSAGE}`, color._timeColor(), color._TimeDateColor(), color._TypeColor() ,color._TypeDateColor(), color._timeColor(),color. _TimeDateColor())
     
    }
  }
}

export const agLog = _agLog(new Date)

