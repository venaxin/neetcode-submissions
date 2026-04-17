class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        sNums = []
        for i, num in enumerate(nums):
            sNums.append([num,i])
        sNums.sort()
        i = 0
        j = len(nums) -1
        while i < j:
            total = sNums[i][0] + sNums[j][0] 
            if total == target:
                return [min(sNums[i][1],sNums[j][1]), max(sNums[i][1],sNums[j][1]) ]
            elif total < target:
                i+=1
            else:
                j-=1
        return []
