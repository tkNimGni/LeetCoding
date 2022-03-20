public class Solution {
    public int MinDominoRotations(int[] tops, int[] bottoms) {
        var topFst = tops[0];
        var botFst = bottoms[0];
        var sameTop = true;
        var sameBot = true;
        var swapTop = 0;
        var swapBot = 0;
        var revSwapTop = 1;
        var revSwapBot = 1;
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
                if (topFst == top) {
                    if (topFst != bot) {
                        revSwapTop++;
                    }
                }
                else if (topFst == bot) {
                    swapTop++;
                } else {
                    sameTop = false;
                }
            }
            if (sameBot) {
                if (botFst == bot) {
                    if (botFst != top) {
                        revSwapBot++;
                    }
                }
                else if (botFst == top) {
                    swapBot++;
                } else {
                    sameBot = false;
                }
            }
        }
        
        if (sameTop && sameBot) {
            return Math.Min(Math.Min(swapTop, revSwapTop), Math.Min(swapBot, revSwapBot));
        }
        return sameTop ? Math.Min(swapTop, revSwapTop) : sameBot ? Math.Min(swapBot, revSwapBot) : -1;
    }
}