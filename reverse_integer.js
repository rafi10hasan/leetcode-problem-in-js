var reverse = function(x) {
    let rev=0
    let bit=Math.abs(Math.pow(2,31))
    console.log(bit)
    while(x!==0){
        rem=(x%10)
        rev=rev*10+rem
        x=parseInt(x/10)
       
      }

     if(bit<Math.abs(rev) ||bit-1<Math.abs(rev)){
        return 0
     }
    else{
        return rev;
    }
      
};
