class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var leftPre = new Array(nums.length).fill(0)
        var rightPre = new Array(nums.length).fill(0)
        let leftProd = 1
        for(let index = 0; index<nums.length; index++){
            if (index == 0){
                leftProd = 1
            }
            else{
                leftProd = leftProd * nums[index-1]
            }
            leftPre[index] = leftProd
        }
        let rightProd = 1
        for(let index = nums.length - 1; index>=0; index--){
            if (index == (nums.length - 1)){
                rightProd = 1
            }
            else{
                rightProd = rightProd * nums[index+1]
            }
            rightPre[index] = rightProd
        }
        let productArray = new Array(nums.length).fill(1)
        for(let index = 0; index<nums.length; index++){
            productArray[index] = leftPre[index] * rightPre[index]
        }
        return productArray
    }
}
