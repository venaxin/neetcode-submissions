'''
'''

class Node(object):
    def __init__(self,key,val):
        self.key, self.val = key, val
        self.prev, self.next = None, None

class LRUCache(object):

    def __init__(self, capacity):
        """
        :type capacity: int
        """
        self.cap = capacity
        self.cache = {} # we map the key and node
        
        self.LRU, self.MRU = Node(0,0), Node(0,0)
        self.LRU.next, self.MRU.prev = self.MRU, self.LRU

    def get(self, key):
        """
        :type key: int
        :rtype: int
        """
        if key in self.cache:
            # make the k,v MRU
            # already exists so we make it move to the rigth side by simply removing it and readding from right side
            # removing
            nxt,prev = self.cache[key].next, self.cache[key].prev
            nxt.prev, prev.next = prev, nxt

            # adding
            prev = self.MRU.prev

            prev.next = self.cache[key]
            self.MRU.prev = self.cache[key]

            self.cache[key].prev = prev
            self.cache[key].next = self.MRU

            return self.cache[key].val
        return -1

    def put(self, key, value):
        """
        :type key: int
        :type value: int
        :rtype: None
        """
        # key already exists
        if key in self.cache:
            # remove the key node
            nxt,prev = self.cache[key].next, self.cache[key].prev
            nxt.prev, prev.next = prev, nxt
            self.cache[key].val = value
        # key is new
        else:
            # create a node and add it from right
            self.cache[key] = Node(key,value)
        prev = self.MRU.prev

        prev.next = self.cache[key]
        self.MRU.prev = self.cache[key]

        self.cache[key].prev = prev
        self.cache[key].next = self.MRU

        # cap crossed
        if len(self.cache) > self.cap:
            # remove LRU.next
            nxt,prev = self.LRU.next, self.LRU
            self.cache.pop(nxt.key)
            prev.next = nxt.next
            nxt.next.prev = prev
        # cap not crossed
            # we are good here
        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)