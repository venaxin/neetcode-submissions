class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []
        let maxArea = 0

        heights.push(0)

        for (let i = 0; i<heights.length; i++){
            let start = i

            while(stack.length > 0 && heights[i] < stack[stack.length - 1][1]){
                const [index,height] = stack.pop()
                maxArea = Math.max(maxArea, height * (i - index))
                start = index
            }
            stack.push([start, heights[i]])
        }
        return maxArea
    }
}
