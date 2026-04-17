class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        output = defaultdict(list)
        for word in strs:
            # intializing a letter freq array to use as a key
            count = [0] * 26
            for letter in word:
                count[ord(letter)-ord('a')] += 1
            output[tuple(count)].append(word)
        return list(output.values())
