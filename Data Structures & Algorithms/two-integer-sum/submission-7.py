class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        neededDict = {}
        for i,num in enumerate(nums):
            needed = target - num
            if needed in neededDict:
                return [neededDict[needed],i]
            neededDict[num] = i
            