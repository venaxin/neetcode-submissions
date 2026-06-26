class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        history = []
        for char in nums:
            if char not in history:
                history.append(char)
            else:
                return True
        return False