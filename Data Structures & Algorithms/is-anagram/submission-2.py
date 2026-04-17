class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_freq = {}
        for letter in s:
            if letter not in s_freq:
                s_freq[letter] = 1
            else:
                s_freq[letter] += 1
        t_freq = {}
        for letter in t:
            if letter not in t_freq:
                t_freq[letter] = 1
            else:
                t_freq[letter] += 1
        if s_freq == t_freq:
            return True
        return False