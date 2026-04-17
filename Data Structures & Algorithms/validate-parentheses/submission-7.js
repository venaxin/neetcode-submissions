class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let type = {
            ')':'(',
            ']':'[',
            '}':'{',
        }
        let stack = []
        for(let index in s){
            // for clsoing braces
            if (s[index] in type){
                if(stack.length > 0 && type[s[index]] == stack[stack.length-1]){
                    stack.pop()
                }
                else return false
            } 
            // for opening braces
            else{
                stack.push(s[index])
            }
        }
        if (stack.length > 0) return false
        return true
    }
}
