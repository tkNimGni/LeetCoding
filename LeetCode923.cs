public class Solution {
    public int ThreeSumMulti(int[] arr, int target) {
        var mod = 1000000007;
        var countDic = new Dictionary<int, int>();
        var keyList = new List<int>();
        var indexDic = new Dictionary<int, int>();
        long ans = 0;
        
        for (var i = 0; i < arr.Length; i++) {
            if (countDic.ContainsKey(arr[i])) {
                countDic[arr[i]]++;
            } else {
                countDic[arr[i]] = 1;
                keyList.Add(arr[i]);
                indexDic.Add(arr[i], keyList.Count() - 1);
            }
        }

        for (var i = 0; i < keyList.Count(); i++) {
            long n = countDic[keyList[i]];
            // 3 nums duplicated
            if (countDic[keyList[i]] >= 3 && keyList[i] * 3 == target) {
                ans += n * (n - 1) * (n - 2) / 6;
                // Console.WriteLine($"({list[i]},{list[i]},{list[i]}) * {dic[list[i]]}");
            }

            // 2 nums duplicated
            var twoDuplicatedRest = target - keyList[i] * 2;
            if (n >= 2 && twoDuplicatedRest != keyList[i] && countDic.ContainsKey(twoDuplicatedRest)) {
                var sum = (n * (n - 1) / 2) * countDic[twoDuplicatedRest];
                ans += sum;
                // Console.WriteLine($"({list[i]},{list[i]},{twoDuplicatedRest}) * {sum}");
            }

            // 3 nums distincted
            for (var j = i + 1; j < keyList.Count(); j++) {
                var distinctRest = target - keyList[i] - keyList[j];
                if (countDic.ContainsKey(distinctRest) && indexDic[distinctRest] > j) {
                    var sum = countDic[keyList[i]] * countDic[keyList[j]] * countDic[distinctRest];
                    ans += sum;
                    // Console.WriteLine($"({list[i]},{list[j]},{distinctRest}) * {sum}");
                }
            }
        }

        return (int)(ans % mod);
    }
}