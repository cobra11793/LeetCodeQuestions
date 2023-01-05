/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = {};
    let twoArr = [];
     
     for (let i = 0; i<nums.length; i++){
         map[nums[i]] = i;
     }
     
     for (let i =0; i<nums.length; i++){
         let goal = target - nums[i];
         if (map[goal] !==undefined && map[goal] !== i){
             twoArr.push(map[goal]);
             twoArr.push(i);
             return twoArr
         }
     }
};