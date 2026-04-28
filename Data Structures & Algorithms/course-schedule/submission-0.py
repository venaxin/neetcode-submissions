class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        courses=collections.defaultdict(set)
        preq=collections.defaultdict(set)
        for u,v in prerequisites:
            courses[v].add(u)
            preq[u].add(v)
        nopreq=[i for i in range(numCourses) if not preq[i]]
        count=0
        while nopreq:
            np=nopreq.pop()
            for child in courses[np]:
                preq[child].remove(np)
                if not preq[child]:
                    nopreq.append(child)
            count=count+1
        return numCourses==count  