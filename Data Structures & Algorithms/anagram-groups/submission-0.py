class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        output = defaultdict(list)
        for word in strs:
            sortedKey = ''.join(sorted(word))
            output[sortedKey].append(word)
        return list(output.values())
