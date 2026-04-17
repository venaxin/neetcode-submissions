class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums)
        let maxSeqCount = 0
        for(let num of numSet){
            if(!numSet.has(num - 1)){
                let currentNum = num
                let currentStreak = 1
                while(numSet.has(currentNum+1)){
                    currentNum++
                    currentStreak++
                }
                if(currentStreak>maxSeqCount){
                    maxSeqCount = currentStreak
                }
            }
            
        }
        return maxSeqCount
    }
}
