class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        '''
        U so we have a bunch of words and we have to group them by their letters (same letters = anagram of ecah other)
        P so we need the letters of each word to be same so we can round them up by having a frequency list of letters adn then use that as a key to store the similar words together
        '''
        output = {}
        for word in strs:
            key = "".join(sorted(word))
            if key not in output:
                output[key] = []
            output[key].append(word)
        return list(output.values())