class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        for num in nums:
            freq[num] = 1 + freq.get(num, 0)
        
        heap = []
        for num in freq.keys():
            heapq.heappush(heap, (freq[num], num))
            if len(heap)>k:
                heapq.heappop(heap)
        output = []
        for i in range(k):
            output.append(heapq.heappop(heap)[1])
        return output