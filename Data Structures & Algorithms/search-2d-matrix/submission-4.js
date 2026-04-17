class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0
        const row = matrix.length
        const col = matrix[0].length
        let right = (row * col) - 1
        while(left<=right){
            // safer way to get the mid for huge numbers
            let mid = left + Math.floor((right - left)/2)

            let rowIndex = Math.floor(mid/col)
            let colIndex = Math.round(mid%col)
            if(target < matrix[rowIndex][colIndex]){
                right = mid - 1
            }
            else if(target > matrix[rowIndex][colIndex]){
                left = mid + 1
            }
            else if(target == matrix[rowIndex][colIndex]){
                return true
            }
        }
        return false
    }
}
