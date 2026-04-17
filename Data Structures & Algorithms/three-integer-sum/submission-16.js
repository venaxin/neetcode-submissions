class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = []
        nums.sort((a, b) => a - b)
        let first = -1
        while (first <= nums.length){
            first++
            if(nums[first] == nums[first-1]){
                continue
            }
            let second = first + 1
            let third = nums.length - 1
            if(second < nums.length || third>0){
                while(second<third){
                    let total = nums[first]+nums[second]+nums[third]
                    if (total < 0){
                        second++
                    }
                    else if(total > 0){
                        third--
                    }
                    else {
                        output.push([nums[first],nums[second],nums[third]])
                        second++;
                        third--;

                        while (second < third && nums[second] === nums[second - 1]) {
                            second++;
                        }
                    }
                }
            }
        }
        return output
    }
}
