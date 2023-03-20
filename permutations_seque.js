function getPermutation(n, k) {
     const nums=[];
     for(let i=1;i<=n;i++){
        nums.push(i)
     }

    const factorials = [1];
    for (let i = 1; i <= n; i++) {
      factorials.push(factorials[i-1] * i);
    }
    let res = '';
    k=k-1

    while (nums.length > 0) {

      const index = Math.floor(k / factorials[nums.length - 1]);
      res += nums[index].toString();
      nums.splice(index, 1);
      k %= factorials[nums.length];

    }
    
    return res;
  }