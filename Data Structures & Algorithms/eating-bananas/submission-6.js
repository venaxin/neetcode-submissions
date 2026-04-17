class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles)
        let leastTime = right
        while (left <= right){
            let k = left + Math.floor((right - left)/2)
            let timeTaken = 0
            for(let pile of piles){
                timeTaken += Math.ceil(pile / k)
            }
            if (timeTaken <= h){
                leastTime = k
                right = k - 1
            }
            else left = k+1
        }
        return leastTime
    }
}
