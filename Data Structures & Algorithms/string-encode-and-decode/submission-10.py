class Solution:

    def encode(self, strs: List[str]) -> str:
        encodedStr = "" 
        for word in strs:
            encodedStr+=(word+".")
        return encodedStr

    def decode(self, s: str) -> List[str]:
        word = ""
        decodedStr = []
        for char in s:
            if char == ".":
                decodedStr.append(word)
                word = ''
            else:
                word+=char
        return decodedStr
