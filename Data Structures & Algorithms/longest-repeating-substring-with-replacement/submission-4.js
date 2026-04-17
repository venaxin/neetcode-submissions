class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Array(26).fill(0)
        let maxFreq = 0
        let left = 0 
        let maxLen = 0
        for (let right = 0; right < s.length; right++){

            let charIndex = s.charCodeAt(right) - 65;
            
            count[charIndex]++

            maxFreq = Math.max(maxFreq, count[charIndex])

            let windowLen = right - left + 1
            while ( (windowLen - maxFreq) > k){
                let leftIndex = s.charCodeAt(left) - 65
                count[leftIndex]--
                left++
                windowLen = right - left + 1
            }
            maxLen = Math.max(maxLen, windowLen)
        }
        return maxLen
    }
}
