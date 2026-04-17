class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productArray = new Array(nums.length).fill(1)
        let leftProd = 1
        for(let index = 0; index<nums.length; index++){
            if (index == 0){
                leftProd = 1
            }
            else{
                leftProd = leftProd * nums[index-1]
            }
            productArray[index] = leftProd
        }
        let rightProd = 1
        for(let index = nums.length - 1; index>=0; index--){
            if (index == (nums.length - 1)){
                rightProd = 1
            }
            else{
                rightProd = rightProd * nums[index+1]
            }
            productArray[index] *= rightProd
        }
        return productArray
    }
}
