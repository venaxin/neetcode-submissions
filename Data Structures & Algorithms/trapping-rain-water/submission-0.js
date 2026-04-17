class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftWall = 0
        let rightWall = height.length - 1
        let maxLeft = height[leftWall]
        let maxRight = height[rightWall]
        let totalWater = 0
        while(leftWall<rightWall){
            let currentLeft = height[leftWall]
            let currentRight = height[rightWall]
            if(currentLeft<currentRight){
                leftWall++
                currentLeft = height[leftWall]
                if (currentLeft >= maxLeft){
                    maxLeft = currentLeft
                }
                else{
                    totalWater += (maxLeft - currentLeft)
                }
            }
            else{
                rightWall--
                currentRight = height[rightWall]
                if (currentRight >= maxRight){
                    maxRight = currentRight
                }
                else{
                    totalWater += (maxRight - currentRight)
                }
            }
        }
        return totalWater
    }
}
