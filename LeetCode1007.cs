public class Solution {
    public int MinDominoRotations(int[] tops, int[] bottoms) {
        var topFst = tops[0];
        var botFst = bottoms[0];
        var sameTop = true;
        var sameBot = true;
        var swapTop = 0;
        var swapBot = 0;
        for (var i = 1; i < tops.Length; i++) {
            var top = tops[i];
            var bot = bottoms[i];
            if (top != topFst && top != botFst && bot != topFst && bot != botFst) {
                return -1;
            }
            if (!sameTop && !sameBot) {
                return -1;
            }
            if (sameTop) {
                if (topFst == top) {}
                else if (topFst == bot) {
                    swapTop++;
                } else {
                    sameTop = false;
                }
            }
            if (sameBot) {
                if (botFst == bot) {}
                else if (botFst == top) {
                    swapBot++;
                } else {
                    sameBot = false;
                }
            }
        }

        if (sameTop && sameBot) {
            return Math.Min(swapTop, swapBot);
        }
        return sameTop ? swapTop : sameBot ? swapBot : -1;
    }
}