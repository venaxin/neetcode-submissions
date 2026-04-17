class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     * input is array of numns 
     * output is largest area of water two heights can contain
     * 
     * so height = lowest height of the tow towers
     * now width = 2nd tower index - 1st tower index 
     * 
     * and for checking we check from 1st and last tower for max width 
     * and then we move the smaller tower inwards
     * 
     * 
     */
    maxArea(heights) {
        let maxWater = 0
        let first = 0 
        let second = heights.length - 1
        while (first < second){
            let height = Math.min(heights[first], heights[second])
            let width = second - first
            let area = height * width
            if (area > maxWater){
                maxWater = area
            }
            if (heights[first] < heights[second]){
                first++
            }
            else second--
        }
        return maxWater
    }
}
