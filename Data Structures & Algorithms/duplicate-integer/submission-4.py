class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        counter_dict = {}
        for char in nums:
            if char not in counter_dict:
                counter_dict[char] = 0
            counter_dict[char] += 1
            if counter_dict[char]>1:
                return True
        return False