/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){  // go through array looking for first value
       for(let j = 1; j < nums.length; j++){ // go through array looking for 2nd value
           if(nums[i] + nums[j] == target){  // if they add up to target
               if(i !== j){  // check to make sure they arent same value
                   return [i, j]; // return output..
               }
           }
       }
   }
};