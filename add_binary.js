var addBinary = function (a, b) {
  let carry = 0;
  let binary = [];
  let max = a.length>b.length ? a.length : b.length;
  for (let i = 0; i < max; i++) {
    let sum = 0;
    if (a[a.length - i - 1] === "1" && b[b.length - i - 1] === "1") {
      if(carry){
        sum += carry
        binary.push(carry);
        carry =1
      }
      else{
        binary.push(sum);
        carry = 1;
      }
      
    } else if (
      (a[a.length - i - 1] === "0" && b[b.length - i - 1] === "1") ||
      (a[a.length - i - 1] === "1" && b[b.length - i - 1] === "0")
    ) {
      sum += 1 + carry;
      if(sum === 2){
        binary.push(0);
        carry = 1
      }
      else{
        binary.push(sum);
      }
     
    } else if (
      (a[a.length - i - 1]) &&
      b[b.length - i - 1] === undefined
    ) {
      sum += Number(a[a.length - i - 1]) + carry;
      if(sum === 2){
        binary.push(0);
        carry = 1
      }
      else{
        binary.push(sum)
        carry = 0
      }
    }
    
    else if (
      (b[b.length - i - 1]) &&
      a[a.length - i - 1] === undefined
    ) {
      sum += Number(b[b.length - i - 1]) + carry;
      if(sum === 2){
        binary.push(0);
        carry = 1
      }
      else{
        binary.push(sum)
        carry = 0
      }
    }

    else{
      if(carry){
        binary.push(carry);
        carry = 0
      }
      else{
        binary.push(0)
      }  
    }
  }

  if (carry) {
    binary.push(carry);
  }

  return binary.reverse().join("");
};