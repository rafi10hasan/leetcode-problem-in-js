var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
    const currentIndex=nums[i]
    for(let j=i+1;j<nums.length;j++){

        const targetvalue=currentIndex+nums[j]

        if(targetvalue===target){
            return[i,j]
        }
        else{
            continue;
        }
    }
   
    
}

};

// const nums=[2,7,11,15];
// const target=9;
// const result=twoSum(nums,target)
// console.log(result)