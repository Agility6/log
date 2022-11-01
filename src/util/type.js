export default function optType(...arr) {
  const toString = Object.prototype.toString
  let _messageType = undefined
  if(arr.length === 1) {
   return toString.call(arr[0])
  } else {
    let typeResult = ''
    arr.forEach(item => {
      typeResult+=toString.call(item) 
    });
    return typeResult
  }
}
