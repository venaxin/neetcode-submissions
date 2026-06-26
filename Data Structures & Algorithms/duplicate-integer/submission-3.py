class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        counter_dict = {}
        for char in nums:
            if char not in counter_dict:
                counter_dict[char] = 0
            else:
                return True
        return False