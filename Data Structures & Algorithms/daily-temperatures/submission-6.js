class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let tempLength = temperatures.length
        let stack = []
        let result = new Array(tempLength).fill(0)
        for(let index = 0; index<tempLength; index++){
            if(stack.length === 0){
                stack.push(index)
                continue
            } 
            while(temperatures[index] > temperatures[stack[stack.length - 1]]){
                let prevIndex = stack.pop()
                result[prevIndex] = (index - prevIndex)
            }
            stack.push(index)
            
        }
        return result
    }
}
