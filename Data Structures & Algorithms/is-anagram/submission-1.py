class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        freq1 = {}
        freq2 = {}
        for char in s:
            if char not in freq1:
                freq1[char] = 1
            else:
                freq1[char] += 1
        for char in t:
            if char not in freq2:
                freq2[char] = 1
            else:
                freq2[char] += 1
        if freq1 == freq2:
            return True 
        else:
            return False
    