var plusOne = function (digits) {
  let strValue = digits.join("");
  let numValue = BigInt(strValue) + BigInt(1);
  let numArr = numValue
    .toString()
    .split("")
    .map((x) => +x);
  return numArr;
};