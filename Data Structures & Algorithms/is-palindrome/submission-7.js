class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase()
        s = s.replace(/[^a-zA-Z0-9]/g, '')
        let iindex = 0
        for(let index = s.length - 1;index >= 0;index--){
            if(s[index] == s[iindex]){
                iindex++
            }
            else return false
        }
        return true

    }
}
