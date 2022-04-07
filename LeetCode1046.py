class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        if (len(stones) == 1):
            return stones[0]
        while (len(stones) > 1):
            stones.sort()
            if (stones[-1] == stones[-2]):
                stones.pop()
                stones.pop()
            else:
                left = stones[-1] - stones[-2]
                stones.pop()
                stones.pop()
                stones.append(left)
        if (len(stones) == 0):
            return 0
        else:
            return stones[0]