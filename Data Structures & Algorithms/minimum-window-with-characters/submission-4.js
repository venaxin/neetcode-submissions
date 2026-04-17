class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length === 0 ) return ''

        let tCount = new Map();
        for(let char of t){
            tCount.set(char, (tCount.get(char) || 0) + 1)
        }

        let have = 0
        let need = tCount.size

        let window = new Map()
        let res = [-1, -1]
        let resLen = Infinity

        let left = 0

        for(let right = 0; right < s.length; right++){
            let char = s[right]

            window.set(char, (window.get(char) || 0) + 1)

            if (tCount.has(char) && window.get(char) === tCount.get(char))  have++

            while(have == need){
                if ( (right - left + 1) < resLen){
                    res = [left, right]
                    resLen = right - left + 1
                }

                let leftChar = s[left]
                window.set(leftChar, window.get(leftChar) - 1)

                if (tCount.has(leftChar) && window.get(leftChar) < tCount.get(leftChar)) have--

                left++
            }
        }
        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1)
    }
}
