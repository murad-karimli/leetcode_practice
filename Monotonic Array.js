//896.
 var isMonotonic = function (nums) {
 let isIncreasing=true;
 let isDecreasing=true;
 for(let i=0;i<nums.length;i++)
 {
    if(nums[i]<nums[i+1])
    {
        isDecreasing=false
    }
    if(nums[i]>nums[i+1])
    {
        isIncreasing=false
    }
 }
 return isDecreasing||isIncreasing
 };
