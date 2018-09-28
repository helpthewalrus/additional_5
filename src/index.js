module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let symbol of str) {
    for (let subarray of bracketsConfig) { 
      if (symbol === subarray[0]) {
        (subarray[0] === subarray[1] && stack[stack.length - 1] === subarray[0]) ?
        stack.pop() : stack.push(symbol);
      } else if (symbol === subarray[1]) {
        (stack[stack.length - 1] !== subarray[0]) ? 
        stack.push(symbol) : stack.pop();
      }  
    }
  }
  return (stack.length === 0 ? true : false);
}