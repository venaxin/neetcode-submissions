class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        '''
        U so we need to understadn top k frequent mean ranking like reutrn the top 3 freq numbers
        P 
        I 
        '''
        freqList = {}
        for num in nums:
            if num not in freqList:
                freqList[num] = 1
            else:
                freqList[num] += 1
            # 1 : 4,  list [1,1,1,2,1]
        KList = {}
        output = []
        for num,freq in freqList.items():
            if freq not in KList:
                KList[freq] = []
            KList[freq].append(num)
        # now i have to get the top k like greater to smaller freq of nums so how do we do that ?
        sortedFreq = sorted(KList.keys(), reverse=True)
        for freq in sortedFreq:
            # now we iterate thorugh the group list of numbers
            for num in KList[freq]:
                output.append(num)
                if len(output)==k:
                    return output