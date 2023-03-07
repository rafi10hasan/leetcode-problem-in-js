var isPalindrome = function (x) {
  let rev = 0;
  let num = x;
  let ispalindrome = true;
  while (x !== 0) {
    rem = x % 10;
    rev = rev * 10 + rem;
    x = parseInt(x / 10);
  }

  if (rev === num) {
    if (rev < 0) {
      ispalindrome = false;
      return false;
    } else {
      return ispalindrome;
    }
  } else {
    ispalindrome = false;
    return false;
  }
};
