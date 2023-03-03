var findMedianSortedArrays = function(nums1, nums2) {
    let median;
    const mergedarray=nums1.concat(nums2);
    const sortedarray=[]
    const length=mergedarray.length
    for(let i=0;i<length;i++){
        const value=Math.min(...mergedarray)
        sortedarray.push(value);
        const index=mergedarray.indexOf(value)
        mergedarray.splice(index,1)
    }
    
    if(sortedarray.length%2===0){
        const index=((sortedarray.length)/2)
        const nextindex=index+1
        const firstvalue=sortedarray[index-1];
        const secondvalue=sortedarray[nextindex-1];
        const sum=firstvalue+secondvalue;
        median=sum/2;
    }
   else{
        const index=Math.ceil((sortedarray.length)/2)
        median=sortedarray[index-1]
       
    
   }
  return median;
};