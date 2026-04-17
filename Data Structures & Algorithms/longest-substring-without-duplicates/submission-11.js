class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let sArr = s.split('')
        let left = 0 
        let maxCount = 0
        let charSet = new Set();
        for(let right = 0; right < sArr.length; right++){
            while(charSet.has(sArr[right])){
                charSet.delete(sArr[left])
                left++
            }
            charSet.add(sArr[right])
            maxCount = Math.max(maxCount, right - left + 1)
        }
        return maxCount
    }
}