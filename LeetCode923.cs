public class Solution {
    public int ThreeSumMulti(int[] arr, int target) {
        var dic = new Dictionary<int, int>();
        var list = new List<int>();
        var ans = 0;
        
        for (var i = 0; i < arr.Length; i++) {
            if (dic.ContainsKey(arr[i])) {
                dic[arr[i]]++;
            } else {
                dic[arr[i]] = 1;
                list.Add(arr[i]);
            }
        }

        for (var i = 0; i < list.Count(); i++) {
            var n = dic[list[i]];
            // 3 nums duplicated
            if (dic[list[i]] >= 3 && list[i] * 3 == target) {
                ans += n * (n - 1) * (n - 2) / 6;
                // Console.WriteLine($"({list[i]},{list[i]},{list[i]}) * {dic[list[i]]}");
            }

            // 2 nums duplicated
            var twoDuplicatedRest = target - list[i] * 2;
            if (n >= 2 && twoDuplicatedRest != list[i] && dic.ContainsKey(twoDuplicatedRest)) {
                var sum = (n * (n - 1) / 2) * dic[twoDuplicatedRest];
                ans += sum;
                // Console.WriteLine($"({list[i]},{list[i]},{twoDuplicatedRest}) * {sum}");
            }

            // 3 nums distincted
            for (var j = i + 1; j < list.Count(); j++) {
                var distinctRest = target - list[i] - list[j];
                if (distinctRest > list[i] && distinctRest > list[j] && dic.ContainsKey(distinctRest)) {
                    var sum = dic[list[i]] * dic[list[j]] * dic[distinctRest];
                    ans += sum;
                    // Console.WriteLine($"({list[i]},{list[j]},{distinctRest}) * {sum}");
                }
            }
        }

        return ans;
    }
}