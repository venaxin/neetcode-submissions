class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0 
        let right  = nums.length - 1
        while (left<=right){
            let mid = left + Math.floor((right - left)/2)
            if (nums[mid] == target) return mid
            // this means the right half of the array is already sorted 
            if (nums[left] <= nums[mid]){
                if (target >= nums[left] && target < nums[mid] ) right = mid - 1
                else left = mid+1 
                // you can check the rigth half normally viz. to go through it 
            }
            // the rotated part is in right half
            else {
                if (target > nums[mid] && target <= nums[right] ) left = mid + 1
                else right = mid - 1
            }
        }
        return -1
    }
}
