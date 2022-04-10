public class Solution {
    public int CalPoints(string[] ops) {
        var stack = new Stack<int>();
        foreach (var op in ops) {
            switch (op) {
                case "+":
                    var top1 = stack.Pop();
                    var top2 = stack.Peek();
                    stack.Push(top1);
                    stack.Push(top1 + top2);
                    break;
                case "D":
                    stack.Push(stack.Peek() * 2);
                    break;
                case "C":
                    stack.Pop();
                    break;
                default:
                    stack.Push(Int32.Parse(op));
                    break;
            }
        }

        var ans = 0;
        while (stack.Count > 0) {
            ans += stack.Pop();
        }
        return ans;
    }
}