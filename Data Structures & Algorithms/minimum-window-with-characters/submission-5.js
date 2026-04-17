class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length === 0 ) return ''

        // creating a freq map for needed char count
        let tCount = new Map();
        for(let char of t){
            // setting the char. we are initializing with 0 if theres no such key in map or if there is then we just increment by 1 (for both cases)
            tCount.set(char, (tCount.get(char) || 0) + 1)
        }

        let have = 0
        // to get the unique chars
        let need = tCount.size

        let window = new Map()
        // to store the starting and ending index
        let res = [-1, -1]
        // for minWindow length to cmpr
        let resLen = Infinity

        // starting point
        let left = 0
        
        // outer loop to expand the window to increase the have 
        for(let right = 0; right < s.length; right++){
            let char = s[right]

            window.set(char, (window.get(char) || 0) + 1)

            if (tCount.has(char) && window.get(char) === tCount.get(char))  have++
            
            // inner loop to minimize the window, shed unnecessary char
            while(have == need){
                // now that we are in loop that means we HAVE needed char so we check the current window size with out min and SAVE it
                if ( (right - left + 1) < resLen){
                    res = [left, right]
                    resLen = right - left + 1
                }
                // now we shed from left side
                let leftChar = s[left]
                window.set(leftChar, window.get(leftChar) - 1)

                // checking removing the letter caused a problem i.e. have < need. And we dont have to worry as we already saved our good solution in res
                if (tCount.has(leftChar) && window.get(leftChar) < tCount.get(leftChar)) have--
                
                // now we move on to the next char from left
                left++

                // if HAVE became less than NEED we move out of loop 
            }
        }
        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1)
    }
}
