public class Solution {
    public int LastStoneWeight(int[] stones) {
        if (stones.Length == 1) {
            return stones[0];
        }

        // heaviest two stones
        var idx1 = 0;
        var idx2 = 1;
        for (var i = 2; i < stones.Length; i++) {
            if (stones[idx1] <= stones[idx2] && stones[idx1] < stones[i]) {
                idx1 = i;
            } else if (stones[idx2] <= stones[idx1] && stones[idx2] < stones[i]) {
                idx2 = i;
            }
        }

        // smash
        int leftStone = Math.Abs(stones[idx1] - stones[idx2]);
        var leftLength = leftStone == 0 ? stones.Length - 2 : stones.Length - 1;
        if (leftLength == 0) {
            return 0;
        }

        // left stones
        var leftStones = new int[leftLength];
        var j = 0;
        for (var i = 0; i < stones.Length; i++) {
            if (i != idx1 && i != idx2) {
                leftStones[j] = stones[i];
                j++;
            }
        }        
        if (leftStone != 0) {
            leftStones[j] = leftStone;
        }
        return LastStoneWeight(leftStones);
    }
}