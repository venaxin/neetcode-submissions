class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // storing the indices
        let deQ = []
        // storing the max num in window
        let output = []

        for (let i = 0;i<nums.length;i++){
            // first we are cleaning the back by checking if the current index number in nums is greater than back of Q number value; if it is then we remove all as we have our max num
            while (deQ.length > 0 && nums[i] > nums[deQ[deQ.length - 1]]) deQ.pop()
            // adding our new number
            deQ.push(i)
            // then we are cleaning the front of Q that is if front of Q is old (i.e. out of bounds of window alloted) if so we shift the front by one 
            if(deQ[0] <= i - k) deQ.shift()
            // this condition is to make sure we are adding max for when we have added atleast three nums in Q
            if(i >= k-1) output.push(nums[deQ[0]])
        }
        return output
    }
}
