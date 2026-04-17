class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        let deQ = []
        let output = []

        for (let i = 0;i<nums.length;i++){
            
            while (deQ.length > 0 && nums[i] > nums[deQ[deQ.length - 1]]) deQ.pop()

            deQ.push(i)

            if(deQ[0] <= i - k) deQ.shift()

            if(i >= k-1) output.push(nums[deQ[0]])
        }
        return output
    }
}
